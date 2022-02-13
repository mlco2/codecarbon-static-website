# codecarbon-static-website

Static website for CodeCarbon.io

## Test on your computer

You need a local webserver, one simple way is : 

`python3 -m http.server`

## Deploy to Clever Cloud

```
git remote add clever git+ssh://git@push-n2-par-clevercloud-customers.services.clever-cloud.com/app_<SECRET_STRING>.git
git push -u clever main:master
```
