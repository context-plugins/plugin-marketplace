# Models reference (APIMatic Ruby)

Condensed reference for the model shapes in **ruby-models**. Confirm exact names in `lib/{gem}/models/`.

## Constructor pattern — positional args + SKIP

```ruby
# Required fields: nil default; optional fields: SKIP default
obj = MyModel.new(
  required_value,    # sets @field = required_value
  SKIP               # optional: never assigned → omitted from to_hash
)
```

`SKIP` is a private constant on each model class. Do not reference it externally — simply omit
trailing optional arguments to use their defaults.

## from_hash / to_hash

```ruby
obj = MyModel.from_hash(JSON.parse(raw_body))   # nil-safe; extra keys → additional_properties
hash = obj.to_hash                               # nil optional fields omitted; nullable → null
json = obj.to_json                               # delegates to to_hash
```

## Enums — class constants

```ruby
# Integer enum
SuiteCodeEnum::HEARTS    # => 1
SuiteCodeEnum::SPADES    # => 2

# String enum (same pattern)
SomeStringEnum::ACTIVE   # => "active"

# Validate
SuiteCodeEnum.validate(1)              # => true
SuiteCodeEnum.from_value('hearts')    # => 1
```

Constants are integers or strings — not iota or symbols. Always use the constant, not the raw value.

## oneOf / anyOf — UnionTypeLookUp + APIHelper

```ruby
# Deserialization (inside from_hash — generated code handles this)
value = APIHelper.deserialize_union_type(
  UnionTypeLookUp.get(:OneOfLionDeerType3),
  hash['field']
)

# Read the result — check class
case value
when Lion   then # ...
when Deer   then # ...
end

# Construction — pass the concrete object directly
Animal.new('Animal', 42, Lion.new('id', '50 kg', 'hunter'))
```

`UnionTypeLookUp.get(key)` returns a `OneOf.new([...])` or `AnyOf.new([...])` from CoreLibrary.
With a discriminator, the type context wires the mapping automatically during deserialization.

## Polymorphism — discriminators hash

```ruby
# Base class delegates to subclass when discriminator matches
Animal.from_hash({ 'pet_type' => 'Cat', 'name' => 'Mika', 'color' => 'grey' })
# => Cat instance

# Check type
obj.is_a?(Cat)       # true
obj.is_a?(Animal)    # true (Cat < Animal)
```

`self.discriminators` returns `{ 'Cat' => Cat, 'Dog' => Dog }` on the base class.

## Collections

| Field type | Ruby type | Notes |
|---|---|---|
| List of models | `Array<BaseModel subclass>` | `to_hash` recurses |
| List of scalars | `Array<String/Integer/…>` | Returned as-is |
| Free-form map | `Hash<String, Object>` | String keys |

## Dates — DateTimeHelper

| Wire format | Parse method | Serialize method |
|---|---|---|
| RFC 3339 | `DateTimeHelper.from_rfc3339(str)` | `DateTimeHelper.to_rfc3339(dt)` |
| RFC 1123 | `DateTimeHelper.from_rfc1123(str)` | `DateTimeHelper.to_rfc1123(dt)` |
| Unix timestamp | `DateTimeHelper.from_unix(str)` | `DateTimeHelper.to_unix(dt)` |

Pass `DateTime` values when constructing models; the generator picks the right format internally.

## Additional properties

```ruby
# Extra JSON keys are captured — not dropped
obj.get_additional_properties   # => { :extra_key => value }

# Conflicts with declared fields raise ArgumentError during to_hash
```
