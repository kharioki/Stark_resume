import { objectType } from '@nexus/schema';

export const Position = objectType({
  name: 'Position',
  definition(t) {
    t.id('id');
    t.string('title');
    t.string('company');
    t.date('startDate', position => new Date(position.startDate));
    t.date('endDate', {
      nullable: true,
      resolve: position =>
        position.endDate ? new Date(position.endDate) : null
    });
    t.string('employmentType');
    t.string('location');
  }
});
