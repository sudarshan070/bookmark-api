# bookmark-api
For a bookmark application, we created a backend API by using Node/Express, and for the database we used MongoDB.

##Basic Informations:
* BASE URL: https://bookmark-app-node.herokuapp.com/api

Create Bookmark (post)
 - /bookmark/create

Delete Bookmark (delete)
- /bookmark/delete

List of Bookmark (get)
- /bookmark

Create tag(create)
- /tags/create

Delete tag(delete)
- /tags/delete/:id
 tag id
 
 Get tags(get)
 - /tags
 
 Add tag to bookmark
 /tags/:slug/:id
 
 slug - bookmark slug
 id -  tag id
 
 Remove tag from bookmark
 /tags/:slug/:id
