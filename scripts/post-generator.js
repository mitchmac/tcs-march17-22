const { faker } = require('@faker-js/faker');
const YAML = require('yaml');
const fs = require('fs');

for (let i = 0; i < 30; i++) {
  let content = YAML.stringify(
    {
      title: faker.lorem.sentence(5),
      author: 'content/authors/napolean.md',
      excerpt: faker.lorem.paragraph(3),
      date: faker.date.past(5, '2021-07-12T07:00:00.000Z')
    }
  );

  fs.writeFileSync(`content/posts/${faker.lorem.slug(4)}.mdx`, `---\n${content}---\n${faker.lorem.paragraphs(4)}`);
}

