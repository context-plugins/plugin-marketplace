---
name: php-calling-endpoints
description: Call API operations on an APIMatic-generated PHP SDK — API accessor pattern, building request model objects, passing path/query/body params, reading varied response shapes, and handling null for optional parameters. Use whenever invoking an endpoint, building a request body, working out parameter order, or consuming a response from any APIMatic PHP SDK — load it even after reading the method signature in the source, since the signature doesn't show which params are truly required vs. nullable-optional.
---

# Calling endpoints on an APIMatic PHP SDK

Operations are **synchronous methods** on API accessor objects — one `{Resource}Api` class per
resource group, under `src/Apis/`. Access one through its accessor method on the client, e.g.
`$client->{apiGroup}()->{operation}(...)`; the exact accessor method name and style varies per SDK,
so **read the client class in the source** to confirm it before writing a call. An operation
belonging to no group may sit directly on the client.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{apiGroup}`, `{operation}`, `{RequestType}`, `{EnumType}`) — replace it with the concrete
> identifier from the source.

## Method signature convention

Every endpoint method lays its parameters out in a fixed order:

```php
public function {operation}(
    mixed $requiredParam,          // no default — must be passed
    ?string $optionalParam = null, // nullable with default — may be omitted
    // ...
): mixed
```

- **Required params come first**, optional/nullable params follow with `= null` defaults.
- **A nullable param without a default still must be passed** in some SDK versions — check the
  actual signature in the source.
- **The signature is the source of truth.** Whether a parameter is nullable, required, or
  defaulted varies per operation. Path params are typically required non-nullable values;
  query and body params may be required or optional.
- Methods are **synchronous by default** — they return a result or throw `ApiException`.

## Building request models

Request bodies are class instances constructed with setter methods or a constructor. Required
properties must be set; optional ones are nullable and are omitted from the JSON when `null`.
The request type is the type of the operation's `$body` parameter — take its exact name from
the method signature in the SDK source:

```php
use SlackWebApiLib\Models\{RequestType};

$body = new {RequestType}();
$body->setRequiredProp($value);   // required — must be set
$body->setOptionalProp($value);   // nullable — omit to exclude from request
```

For SDKs that use constructor arguments:

```php
$body = new {RequestType}(
    requiredProp: $value,
    optionalProp: $value  // pass null to exclude
);
```

A request body's shape varies: some are flat (scalar properties directly on the object), others
nest an inner resource object. Open the request model (under `src/Models/`) to see its real
required/optional properties. A nested body:

```php
$inner = new {InnerType}();
$inner->setRequiredProp($value);

$body = new {RequestType}();
$body->set{Member}($inner);
```

## Enums

In PHP 8.1+ SDKs, enums are backed enums. Use the case directly:

```php
use SlackWebApiLib\Models\Enums\{EnumType};

$body->set{EnumProp}({EnumType}::Active);        // backed enum case
// For the wire value (string/int):
$wireValue = {EnumType}::Active->value;           // e.g. 'active'
// From a server-provided string:
$case = {EnumType}::from('active');               // throws ValueError if unknown
$case = {EnumType}::tryFrom('active');            // returns null if unknown — prefer this
```

In older SDK versions enums may be string constants on a class. Open the enum file in the source
to confirm which pattern is used.

## Union types, collections, and dates

Some properties are not plain scalars: discriminated unions (branch on a type/kind field), arrays,
and `\DateTime` objects. If a request property or response field is one of these, see
**php-models** for how to construct and read it.

## Making the call and reading the response

```php
$response = $client->{apiGroup}()->{operation}($pathArg, $optionalQueryArg, $body);
```

**Each operation's return type varies** — read the method's return type annotation and handle it
accordingly:

- **An object wrapping the resource** under a getter (`getResource()` or similar). Unwrap it:
  ```php
  $resource = $response->get{Resource}();
  echo $resource?->getId();
  ```
- **The resource directly** — a typed object: use it as-is.
  ```php
  $resource = $client->{apiGroup}()->{operation}(...);
  ```
- **An array of resources** — `array` / typed list: iterate it.
  ```php
  foreach ($response as $item) {
      echo $item->get{Field}();
  }
  ```
- **`null` / void** — no response body; the call succeeds with no return value.

## Passing optional parameters

For operations with many optional parameters, pass `null` explicitly for each one you want to
omit rather than relying on parameter reordering:

```php
$results = $client->{apiGroup}()->{operation}(
    filter: {EnumType}::Active,
    startDate: null,      // omit from request
    query: 'search text',
    page: 1,
    perPage: 100
);
```

Named arguments (PHP 8.0+) are order-independent and reduce mistakes on multi-param list
operations — prefer them.

## Worked example — a list/GET call

```php
use SlackWebApiLib\Models\Enums\{EnumType};

// Signature (illustrative):
//   public function {operation}(
//       ?{EnumType} $filter = null,
//       ?string $startDate = null,
//       int $page = 1,
//       int $perPage = 20
//   ): array

$results = $client->{apiGroup}()->{operation}(
    filter: {EnumType}::Active,
    startDate: null,
    page: 1,
    perPage: 20
);

foreach ($results as $item) {
    echo $item->getId() . PHP_EOL;
}
```

## Finding the right method in the SDK source

Read these from the SDK **source** files (clone to a temp dir first — see **php-getting-started**):

- Most operations are on **API accessor classes** under `src/Apis/`; find an operation by grepping
  for `public function` across that directory.
- Each method's docblock documents its parameters and the endpoint path.
- Request/response/enum types live under `src/Models/` (and `src/Models/Enums/`).

## Next

- Errors and status codes → **php-error-handling**
- Pagination, retries, timeouts → **php-configuration-resilience**
- Union types, collections, dates, enums → **php-models**
