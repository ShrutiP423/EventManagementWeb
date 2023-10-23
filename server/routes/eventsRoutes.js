const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');
const isAuth = require('../middleware/user');
const mongoose = require('mongoose');

/**
 * App Routes 
*/

router.get('/', eventsController.homepage );

/* Signup Form and Function*/
router.get('/signup', eventsController.signup);
router.post('/signupnew', eventsController.signupnew);

/* Login Form and Function*/
router.get('/login', eventsController.login);
router.post('/loginnew',eventsController.loginnew);

/* Logout Function*/
router.get('/logout',eventsController.logout);


// Register venue
router.get('/register-venue', eventsController.registerVenue);
router.post('/register-venue',eventsController.registerVenueOnPost);
// explore venue
router.get('/venues', eventsController.exploreVenues );
router.get('/venues/:id', eventsController.exploreVenue);
router.post('/venues/:id', eventsController.rateVenue);
// Update venue
router.get('/venues/edit/:id', eventsController.venuesEdit);
router.post('/venues/edit/:id', eventsController.venuesEditPost);
// Add and delete venue halls
router.get('/venues/add-hall/:id', eventsController.addVenueHall);
router.post('/venues/add-hall/:id', eventsController.addVenueHallOnPost);
router.get('/venues/del-hall/:id/:pid', eventsController.delVenueHall);
// Add and delete venue rooms
router.get('/venues/add-room/:id', eventsController.addVenueRoom);
router.post('/venues/add-room/:id', eventsController.addVenueRoomOnPost);
router.get('/venues/del-room/:id/:pid', eventsController.delVenueRoom);
// Add and delete venue decor
router.get('/venues/add-decor/:id', eventsController.addVenueDecor);
router.post('/venues/add-decor/:id', eventsController.addVenueDecorOnPost);
router.get('/venues/del-decor/:id/:pid', eventsController.delVenueDecor);
// Delete venue
router.get('/delete-venue/:id', eventsController.deleteVenue);


// Register photographer
router.get('/register-photographer', eventsController.registerPhotographer);
router.post('/register-photographer',eventsController.registerPhotographerOnPost);
// Explore photographer
router.get('/photographers', eventsController.explorePhotographers );
router.get('/photographers/:id', eventsController.explorePhotographer );
router.post('/photographers/:id', eventsController.ratePhotographer);
// Update photographer
router.get('/photographers/edit/:id', eventsController.photographersEdit);
router.post('/photographers/edit/:id', eventsController.photographersEditPost);
// Add and delete packages
router.get('/photographers/add-package/:id', eventsController.addPhotographersPackages);
router.post('/photographers/add-package/:id', eventsController.addPhotographersPackagesOnPost);
router.get('/photographers/del-package/:id/:pid', eventsController.delPhotographersPackage);
// Delete photographer
router.get('/delete-photographer/:id', eventsController.deletePhotographer);


// Register entertainer
router.get('/register-entertainer', eventsController.registerEntertainer);
router.post('/register-entertainer',eventsController.registerEntertainerOnPost);
// Explore entertainer
router.get('/entertainers', eventsController.exploreEntertainers );
router.get('/entertainers/:id', eventsController.exploreEntertainer);
router.post('/entertainers/:id', eventsController.rateEntertainer);
// Update entertainer
router.get('/entertainers/edit/:id', eventsController.entertainersEdit);
router.post('/entertainers/edit/:id', eventsController.entertainersEditPost);
// Add and delete prices for events
router.get('/entertainers/add-price/:id', eventsController.addEntertainerPrice);
router.post('/entertainers/add-price/:id', eventsController.addEntertainerPriceOnPost);
router.get('/entertainers/del-price/:id/:pid', eventsController.delEntertainerPrice);
// Delete entertainer
router.get('/delete-entertainer/:id', eventsController.deleteEntertainer);



router.get('/packages', eventsController.explorePackages );
router.get('/packages/:id',eventsController.packageName);




/** Add Decorator Form */
router.get('/adddecorform/:id',eventsController.openDecorform);

/** Add Decorator on Post */
router.post('/addcaterer/:id', eventsController.addCaterer);

/** Update Decorator Form */
router.get('/upddecorform/:id',eventsController.openDecorupdform);

/** Update Decorator on Post */
router.post('/updcaterer/:id', eventsController.updCaterer);

/** Delete Decorator on Post */
router.get('/deletecaterer/:id',eventsController.delCaterer);

/** Explore Decorators */
router.get('/decorators',isAuth,eventsController.exploreDecorators);

/** Explore Particular Decorator*/
router.get('/decorators/:id',isAuth, eventsController.exploreDecorator );

/** Search Decorator */
router.get('/searchdecor',isAuth, eventsController.searchDecor);

/** Filter Decorator */
router.get('/filterdecor',isAuth,eventsController.filterDecor);

/** Rate Decorator */
router.post('/decorupdateRating/:id',isAuth, eventsController.decorupdateRating);


/** Add Caterer Form */
router.get('/addcatererform/:id',eventsController.openCatererform);

/** Add Caterer on Post */
router.post('/adddecor/:id', eventsController.addDecor);

/** Update Caterer Form */
router.get('/updcatererform/:id',eventsController.openCatererupdform);

/** Update Caterer on Post */
router.post('/upddecor/:id', eventsController.updDecor);

/** Delete Caterer on Post */
router.get('/deletedecor/:id',eventsController.delDecor);

/** Explore Caterer */
router.get('/caterers' ,isAuth, eventsController.exploreCaterers);

/** Explore Particular Caterer*/
router.get('/caterers/:id',isAuth, eventsController.exploreCaterer );

/** Search Caterer */
router.get('/searchcaterer',isAuth, eventsController.searchCaterer);

/** Filter Caterer */
router.get('/filtercaterer',isAuth,eventsController.filterCaterer);

/** Rate Caterer */
router.post('/catererupdateRating/:id',isAuth, eventsController.catererupdateRating);



/** Add Invite Form */
router.get('/addinviteform/:id',eventsController.openform);

/** Add Invite on Post */
router.post('/addinvite/:id', eventsController.addInvite);

/** Update Invite Form */
router.get('/updinviteform/:id',eventsController.openupdform);

/** Update Invite on Post */
router.post('/updinvite/:id', eventsController.updInvite);

/** Delete Invite on Post */
router.get('/deleteinvite/:id',eventsController.delInvite);

/** Explore Invitations */
router.get('/invitations' ,isAuth, eventsController.exploreInvites);
/** Explore Particular Invite*/
router.get('/invitations/:id',isAuth, eventsController.exploreInvite );

/** Search Invite */
router.get('/searchinvite',isAuth, eventsController.searchInvite);

/** Filter Invite */
router.get('/filterinvite',isAuth,eventsController.filterInvite);

/** Rate Invite */
router.post('/updateRating/:id',isAuth, eventsController.updateRating);

module.exports = router;

