---
name: php-models
description: Construct and read the non-obvious model shapes of an APIMatic-generated PHP SDK — PHP 8.1 backed enums (case vs ->value, from/tryFrom), discriminated union types (branch on type field), nullable types and null-coalescing, arrays/collections, and DateTime serialization. Use when building a request body or reading a response field that is an enum, union, list/map, or date — anything that isn't a plain string/number — or when an unknown JSON field is dropped on deserialization.
---

# Working with models in an APIMatic PHP SDK

Most request/response data are class instances built with setters (covered in
**php-calling-endpoints**). This skill covers the **non-obvious model shapes** that trip
integrations up. Patterns are generic across APIMatic PHP SDKs; take the real type names from
your SDK source.

> Throughout this skill, `{...}` is a placeholder for a name you take from your SDK (e.g.
> `{EnumType}`, `{RequestType}`, `{DiscriminatorField}`) — replace it with the concrete
> identifier from the source.

## PHP 8.1 backed enums

APIMatic PHP SDKs generated for PHP 8.1+ use backed enums (string or int). Always use the case
constant on requests; use `->value` only when you need the raw wire value:

```php
use StaxFattMerchantAPILib\Models\Enums\{EnumType};

// Set on a request:
$body->set{EnumProp}({EnumType}::Active);

// Get the wire string value:
$raw = {EnumType}::Active->value;   // e.g. 'active'

// Parse a server-provided string (safe — returns null for unknown values):
$case = {EnumType}::tryFrom($serverValue);
if ($case === null) {
    // unknown/future value — handle gracefully
}

// Strict parse (throws ValueError for unknown values — prefer tryFrom for API responses):
$case = {EnumType}::from($serverValue);

// Enumerate all cases:
$all = {EnumType}::cases();
```

In older SDK versions, enums may be a class with string constants (`const Active = 'active'`).
Open the enum file in the source to confirm the pattern.

## Discriminated union / polymorphic types

When a field can be one of several types, APIMatic PHP SDKs typically use a base class with a
discriminator field (e.g. `type`, `kind`, `object`). Read the discriminator to branch:

```php
$item = $response->get{PolyField}();

switch ($item->get{DiscriminatorField}()) {
    case {SubTypeA}::{DISCRIMINATOR_CONST}:
        /** @var {SubTypeA} $item */
        echo $item->getSpecificField();
        break;
    case {SubTypeB}::{DISCRIMINATOR_CONST}:
        /** @var {SubTypeB} $item */
        echo $item->getOtherField();
        break;
}
```

Alternatively, check `instanceof` when the SDK generates concrete subclasses:

```php
if ($item instanceof {SubTypeA}) {
    echo $item->getSpecificField();
} elseif ($item instanceof {SubTypeB}) {
    echo $item->getOtherField();
}
```

Open the model class hierarchy under `src/Models/` to confirm the discriminator field name and
the subclass structure.

## Nullable types and null coalescing

Optional response fields have nullable types (`?string`, `?int`, etc.). Use null coalescing to
provide defaults safely:

```php
$name = $resource->getName() ?? 'Unknown';
$amount = $resource->getAmount() ?? 0;

// Nested nullable access:
$city = $resource->getAddress()?->getCity() ?? '';
```

Never assume an optional field is non-null in a response — always guard with `??` or an explicit
null check.

## Collections / arrays

List properties are typed as `array` (or a typed wrapper). Assign a plain PHP array on requests;
iterate on responses:

```php
// Request — set a list property:
$body->set{ListProp}(['A', 'B', 'C']);

// Request — set a list of model objects:
$body->set{ItemsProp}([$item1, $item2]);

// Response — iterate:
foreach ($response->get{Items}() ?? [] as $item) {
    echo $item->getId();
}
```

A `null` collection means the field was absent from the response; an **empty array** `[]` means
the field was present but empty. Always use `?? []` to guard iteration against null.

Maps (key-value pairs) are plain associative arrays:

```php
$body->set{MapProp}(['key1' => 'value1', 'key2' => 'value2']);
$value = $response->get{MapProp}()['key1'] ?? null;
```

## Dates and DateTimes

Date/time fields use `\DateTime` or `\DateTimeImmutable`, serialized as ISO-8601 strings on the
wire. Work with `\DateTime` objects directly and let the SDK handle the wire format:

```php
// Request — set a date field:
$body->set{DateField}(new \DateTime('2024-06-17T15:30:45+00:00'));
$body->set{DateField}(new \DateTime('now', new \DateTimeZone('UTC')));

// Response — read a date field:
$dt = $response->get{DateField}();
if ($dt !== null) {
    echo $dt->format('Y-m-d');
    echo $dt->getTimestamp();
}

// Parse an ISO-8601 string manually if needed:
$dt = new \DateTimeImmutable('2024-06-17T15:30:45Z');
$iso = $dt->format(\DateTimeInterface::ATOM); // '2024-06-17T15:30:45+00:00'
```

Date-only fields (no time component) may use a plain `string` in `Y-m-d` format — check the
model property type annotation in the source.

## Unknown / future fields

Models declare their properties explicitly. Unknown JSON fields from the server are dropped on
deserialization by default — if a field your code needs isn't on the model, either regenerate the
SDK or parse the raw response body from `ApiException::getResponseBody()` yourself (see
**php-error-handling**).

See [reference.md](reference.md) for condensed syntax cards.
