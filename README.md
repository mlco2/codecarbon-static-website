# codecarbon-static-website

Static website for CodeCarbon.io

## Deploy to Clever Cloud

```
git remote add clever git+ssh://git@push-n2-par-clevercloud-customers.services.clever-cloud.com/app_<SECRET_STRING>.git
git push -u clever main:master
```

## Adding a contributor to the actual list

- Save your original pic into /assets/contributor/img_backup ( can be usefull if we want to change contributor list in a futur)
- Format your pic with a width and height of 300px. The pic mode should be grayscale, and jpg format.
- Once you have a pic correctly set, add it with the name of the contributor in the /assets/contributor/img folder.
- Add your entries in the contributor.js file. It's an array of object.
- Copy/paste the exemple at the end ( before the ']'). Take care to add a coma between object.
