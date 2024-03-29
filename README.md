# ECCC Office Request Rate-Limiting

## Development

- Build the app `docker-compose build`
- Boot the app `docker-compose up -d`
- Watch the locks with `docker-compose logs -f`
- Restart the app (to get new code changes) `docker-compose restart`
- Test the app vai `docker-compose exec app yarn test` (or just `dev test`)

To push environmental variables into the container make a `.env` file root directory.
e.g.
```
PROOF_URL=https://edge.proofgov.com
PROOF_API_TOKEN=<....>
FORM_CONFIG_ID=12
APP_URL=http://eccc-on-site-access.proofgov.com:4000
```

## **Old** Example Form Query API

To start using the example application, follow the steps:

1. Set up environmental variables.

   ```bash
   export PROOF_URL=https://app.proofgov.com
   export PROOF_API_TOKEN=<some-token>
   ```

   If you were provided a Form ID, you can set it via:

   ```bash
   export PROOF_FORM_ID=1
   ```

2. Run `yarn install`.
3. Run `yarn setup-form` (this setups a new form, if needed, and updates the [schema](schema.yaml)).
4. If you want to generate sample submissioned; run `yarn generate-submission`.
5. Run `yarn server`.
6. Now you're ready to receive requests on [http://localhost:4000](http://localhost:4000).

### Sending Requests

Once you have the server runing, you can submit a request via cURL:

```bash
curl steve:password@localhost:4000/covid-cases
```

You can see and modify users/passwords in the `config.js` file.

### A few notes...

Both `yarn setup-form` and `yarn generate-submission` support a `--help` option for more details.

Running `yarn setup-form` may create a `provider_info.yaml` file that is used for subsequent requests.

In case you need to generate a lot of submissions, you can run `while true; do yarn generate-submission; done`. (`ctrl-c` to exit).
