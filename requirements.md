# Propeller Health Platform Technical Assessment

At Propeller, our mission is to empower every person with chronic respiratory disease to take
control of their health so that they can live a better life. Poor air quality often negatively affects
those with respiratory diseases, so by capturing air quality data we can better inform our
patients what may be triggering their symptoms and provide them an outlook for their upcoming
day.

For the purpose of this exercise, suppose we have air quality sensors placed at various outdoor
locations. Please build a REST API endpoint to receive and store readings from those sensors.
Additionally, please write a REST API endpoint to retrieve the stored values as a daily summary
of all pollutants. Both of these endpoints should be covered by tests.

## Additional Sensor Information

Air quality data can be really complicated. For this exercise, assume the sensors are capturing
the following data.

| Pollutant                | Valid Measurements  |
|------------------------- |-------------------- |
| Ground-level ozone (O3)  | 0 - 0.604 ppm       |
| Carbon monoxide (CO)     | 0 - 50.4 ppm        |
| Sulfur dioxide (SO2)     | 0 - 1004 ppb        |
| Nitrogen dioxide (NO2)   | 0 - 2049 ppb        |

Also assume that sensors may become faulty and not be able to record one or more pollutants.

## Acceptance Criteria

- A REST API endpoint that:
  - Accepts and validates data from the sensors. This data includes:
    - Sensor Id
    - Timestamp
    - Air quality data listed in the table above
  - Stores that data in memory (data does not need to persist between program
  runs)

- A second REST API endpoint that:
  - Accepts:
    - An optional field to filter the response by sensor id
  - Returns a summary that contains:
    - Minimum value received for each pollutant and its associated timestamp
    - Maximum value received for each pollutant and its associated timestamp
    - Average value received for each pollutant
- Both of the REST endpoints should be covered with tests
- An updated README containing an example request payload for both endpoints

Please use the provided starter repository which uses our stack: [Node.js / Express](https://expressjs.com/en/starter/hello-world.html). Please feel
free to add any additional libraries or frameworks you find useful.

_Your time is valuable to us, so please don’t spend more than one to two hours working on this
assessment_. You will have the opportunity to speak to your work when we meet you in person.

Please submit a zip file containing all code and notes no later than two business days prior to
your scheduled interview.
