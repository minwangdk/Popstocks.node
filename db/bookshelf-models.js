/**
 * Created by Min on 17-Feb-16.
 */

var bookshelf = app.get('bookshelf');

var User = bookshelf.Model.extend({
  tableName: 'users'
});