# brunch-spring-roll

A [Brunch](http://brunch.io/) skeleton for [spring-boot](http://projects.spring.io/spring-boot/)

We created bunch-spring-boot to solve the following problems for one of our Spring-boot projects:
  1. Minify and concatenate our frontend assets with one command
  2. Auto deploy frontend changes without re-compiling the app during development
  3. Apply and build frontend needs such as SASS compiling
  4. Least impact on maven and Java side of the project
  5. Must work well with Spring-boot

We looked  at other projects such as [Webpack](https://webpack.github.io/) and [Wro4j](https://github.com/wro4j/wro4j). We found that they were either too much of a work around to work with Spring-boot, or too much overhead on the project. [Brunch](http://brunch.io/) was simple, light weight and met our needs. And it provides a simple interface for a plugin. Hopefully this project will be helpful to others.


## Install

1. Install node: http://nodejs.org/

2. Install Brunch globally:

   ```
   npm install -g brunch
   ```

3. Navigate to your Spring Boot resources folder and install **brunch-spring-roll**

   ```
   brunch new frontend -s https://github.com/AusDTO/brunch-spring-roll
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
