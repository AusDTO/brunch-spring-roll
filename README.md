# brunch-spring-roll

[Brunch](http://brunch.io/) skeleton for [spring-boot](http://projects.spring.io/spring-boot/)

## Install

1. Install node: http://nodejs.org/


2. Install Brunch:

   ```
   npm install -g brunch
   ```


3. Navigate to your Spring Boot resource folder and install **brunch-spring-roll**

   ```
   brunch new frontend -s https://github.com/alphillips/brunch-spring-roll
   ```

   This creates a **frontend** folder under resources.

4. cd into your **frontend** folder and install dependencies

   ```
   npm install
   ```


## Develop

After you build the spring-boot project `mvn spring-boot:run`
Build brunch

```
brunch build
```

Builds all the assets into the `public` directory. Also copies all assets including templates into classes directory so you don't need to run `mvn` again.

```
brunch watch
```

Same as `build` and also listens for any changes to files and runs build as you develop.


## Deploy

```
brunch build --production
```

Same as `build` and also minifies the assets.
