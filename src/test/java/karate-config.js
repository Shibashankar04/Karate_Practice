function fn() {
    var env = karate.env;
    karate.log("env is", env);
    var browser = karate.properties['browser'] || 'chrome';

    var config = {

        baseUrl: "baseUrl",
        env: env

    };

    if (!env) {

        env = 'qa';
    }

    if (env == "qa") {
        config.baseUrl = "https://lms2-qa.benchmarkuniverse.com/?realm=bangalore"

    }
    else if(env == "staging"){

        config.baseUrl = "https://lms2-staging.benchmarkuniverse.com/?realm=bangalore"
    }
    // else{
    //     config.baseUrl="https://lms2-dev.benchmarkuniverse.com/?realm=bangalore"
    // }

    return config;

}