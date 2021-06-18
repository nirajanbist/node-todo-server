/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */

export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          username: '',
          password: ''
        },
        {
          username: '',
          password: ''
        },
        
      ]);
    });
}
