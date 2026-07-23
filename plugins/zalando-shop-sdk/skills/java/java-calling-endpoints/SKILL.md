---
name: java-calling-endpoints
description: Call API operations on an APIMatic-generated Java SDK — get a controller from the client via get{Resource}Controller(), choose between the blocking sync form (returns T directly, throws ApiException and IOException) and the async form (returns CompletableFuture<T>), pass parameters either as positional arguments or bundled into an {Op}Input built with its nested Builder, and read the result directly as T with no wrapper. Use whenever invoking an endpoint, building a request model, working out which params are required vs optional, or consuming a response from any APIMatic Java SDK — load it even after reading the signature in the source, since it doesn't warn you about the two variants (sync/async), the Input builder pattern, or that sync ops declare two checked exceptions.
---

# Calling endpoints on an APIMatic Java SDK

Operations are **methods on a controller** you obtain from the client. Each operation is generated in two
forms: a **blocking synchronous** variant that returns the result directly, and an **async** variant that
returns `CompletableFuture<T>`. Choose based on your threading model.

> Throughout, `{...}` tokens are placeholders for names you take from your SDK — replace them with the
> concrete identifiers from the source. The generated `doc/controllers/*.md` files list every operation
> with its signature and a usage snippet. **Grep `doc/controllers/` first**, then open the `.java` file
> for the exact signature.

**The source and these companion skills are complementary — load both.** The generated source is
authoritative for the *surface* (method names, parameter types, which checked exceptions); this skill
covers the *usage layer* — the builder pattern for inputs, the two calling styles, and the gotchas the
signatures can't show.

## Getting a controller

Controllers are obtained via getter methods on the client — one per API resource group:

```java
{Resource}Controller ctrl = client.get{Resource}Controller();
```

Open `ZalandoShopClient.java` for the full list of `get*Controller()` methods. Controllers are stateless;
obtain one and reuse it, or call the getter each time — there is no difference in behaviour.

## Method signature convention

Every operation is generated in two variants:

```java
// Synchronous — returns T directly, declares two checked exceptions:
public T {operation}(final {Op}Input input) throws ApiException, IOException

// Asynchronous — returns a future; exceptions surface via CompletionException:
public CompletableFuture<T> {operation}Async(final {Op}Input input)
```

- The **sync** variant returns the deserialized response body as `T` directly — there is **no**
  `ApiResponse<T>` wrapper. `T` may be a model class, a boxed primitive (`Double`, `String`,
  `Boolean`), a `List<…>`, or `void`.
- Both **`ApiException`** and **`IOException`** are checked exceptions on the sync form — you must
  catch or declare both (see **java-error-handling**).
- The **async** variant wraps both into `CompletionException`; unwrap with `.getCause()` in the
  `.exceptionally()` handler.

## Two parameter styles — check the signature

APIMatic Java generates one of two shapes per operation:

**1. Positional parameters** — each parameter is a separate method argument (common for simple,
low-arity ops):

```java
// Example: positional enum + two doubles
Double result = ctrl.getCalculate(OperationTypeEnum.SUM, 5.0D, 3.0D);
```

**2. `{Op}Input` builder** — when an operation has several parameters they are bundled into an input
model. Required fields are constructor parameters of the nested `Builder`; optional fields are fluent
setter methods called before `.build()`:

```java
// GetCalculateInput — all three fields are required (constructor params):
GetCalculateInput input = new GetCalculateInput.Builder(
        OperationTypeEnum.MULTIPLY,   // required — constructor arg 1
        222.14D,                      // required — constructor arg 2
        165.14D                       // required — constructor arg 3
    )
    .build();

Double result = ctrl.getCalculate(input);
```

To set optional fields, call the fluent setters before `.build()`:

```java
{Op}Input input = new {Op}Input.Builder(requiredA, requiredB)
    .optionalField(value)    // optional — fluent setter
    .anotherOptional(other)
    .build();
```

Never guess which parameters are required vs optional — open `doc/models/{op-input}.md` (the `Tags`
column says `Required` or `Optional`) or read the `Builder` constructor parameters in the source
directly.

## Calling synchronously

Catch or re-declare both checked exceptions:

```java
{Resource}Controller ctrl = client.get{Resource}Controller();
{Op}Input input = new {Op}Input.Builder(/* required params */).build();

try {
    T result = ctrl.{operation}(input);
    // use result directly — no unwrapping needed
} catch (ApiException e) {
    // non-2xx response — see java-error-handling
    System.err.println("API error " + e.getResponseCode() + ": " + e.getMessage());
} catch (IOException e) {
    // network / IO failure
    System.err.println("IO error: " + e.getMessage());
}
```

## Calling asynchronously

Use `.thenAccept()` for the success path and `.exceptionally()` for errors:

```java
ctrl.{operation}Async(input)
    .thenAccept(result -> {
        // success — result is T
        System.out.println(result);
    })
    .exceptionally(exception -> {
        // failure — CompletionException wrapping ApiException or IOException
        exception.printStackTrace();
        return null;
    });
```

To inspect an `ApiException` from an async failure, unwrap: `exception.getCause()` and check
`instanceof ApiException`.

## Reading the result

The return value is `T` directly — read fields via getters, iterate lists, use primitives as-is:

```java
// Model result — fields via getters:
ServiceStatus status = ctrl.oAuthClientCredentialsGrant();
String app = status.getApp();     // nullable — null-check before use (see java-models)

// Primitive result — use directly:
Double answer = ctrl.getCalculate(input);

// List result — iterate:
List<{Item}> items = ctrl.list{Items}(input);
for ({Item} it : items) { /* ... */ }

// Void result — method returns void; throws on non-2xx:
ctrl.delete{Resource}(input);
```

There is no `.getData()` or `.getResult()` call — the method return *is* the data.

## Enums as parameters

Enum-typed parameters take the generated constant directly:

```java
OperationTypeEnum.SUM       // string-backed — wire value "SUM"
SuiteCodeEnum.HEARTS        // integer-backed — wire value 1
```

For a value not known at compile time, use the static factory:

```java
// String-backed enum:
OperationTypeEnum op = OperationTypeEnum.fromString("MULTIPLY");  // throws IOException if unknown

// Integer-backed enum:
SuiteCodeEnum suite = SuiteCodeEnum.fromInteger(2);               // throws IOException if unknown
```

See **java-models** for the two enum kinds and their factory methods.

## Finding the right method in the SDK source

- `doc/controllers/*.md` — lists every operation with its signature, parameter table, and example
  usage. **Start here** before opening the `.java` file.
- `ZalandoShopClient.java` — controller accessor methods; each `get{Resource}Controller()` returns a
  `{Resource}Controller`.
- Each operation has both a sync method **and** a matching `{operation}Async` variant.
- `doc/models/{op-input}.md` — describes an `{Op}Input`'s required vs optional fields.

## Next

- Build request models, enums, unions → **java-models**
- Errors, status codes, typed exceptions → **java-error-handling**
- Retries, timeouts, OkHttpClient → **java-configuration-resilience**
