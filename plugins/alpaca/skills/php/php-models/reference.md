# Models reference (APIMatic PHP)

## PHP 8.1 backed enums

```php
// Declaration (generated):
enum {EnumType}: string
{
    case Active  = 'active';
    case Pending = 'pending';
    case Closed  = 'closed';
}

// Usage:
$body->set{EnumProp}({EnumType}::Active);          // set on request
$raw   = {EnumType}::Active->value;                // 'active'
$case  = {EnumType}::tryFrom($serverString);       // null-safe parse
$case  = {EnumType}::from($serverString);          // strict (throws ValueError)
$cases = {EnumType}::cases();                      // all cases
```

## Int-backed enums

```php
enum {EnumType}: int
{
    case Off = 0;
    case On  = 1;
}

$body->set{EnumProp}({EnumType}::On);
$n = {EnumType}::On->value;  // 1
```

## Discriminated unions — finding the exact structure

For a polymorphic field, open the base class under `src/Models/`. It will carry a discriminator
property (often `type`, `kind`, or `object`). Each concrete subclass sets that property as a
class constant. Use `get{DiscriminatorField}()` to branch, or `instanceof` for subclass checks.

## Date/time

Date/time values are `\DateTime` / `\DateTimeImmutable`, serialized as ISO-8601
(`"2024-06-17T15:30:45Z"`) on the wire. Work with `\DateTime` directly — the SDK handles
formatting/parsing.

Useful formats:

```php
$dt->format(\DateTimeInterface::ATOM);    // ISO 8601 with timezone offset
$dt->format(\DateTimeInterface::RFC3339); // RFC 3339
$dt->format('Y-m-d');                     // date only
$dt->getTimestamp();                      // Unix timestamp
```

## Nullable properties

Optional response fields are typed `?Type`. Always guard reads:

```php
$value  = $obj->get{Field}() ?? 'default';
$nested = $obj->get{Parent}()?->get{Child}() ?? null;
```

## Collections

```php
// Assign on request:
$body->set{Items}([$obj1, $obj2]);

// Read on response (guard against null):
foreach ($response->get{Items}() ?? [] as $item) { ... }
```

A `null` list means the field was absent; `[]` means present-but-empty.

## Notes

- Optional model properties with `null` values are typically omitted from the serialized JSON
  request body (check the model's serialization logic in the source).
- Unknown JSON response fields are silently dropped unless the model has an additional-properties
  map.
