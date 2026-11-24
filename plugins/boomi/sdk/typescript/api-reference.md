# Reference

> Source: [BoomiClient](src/client.ts)

## Atoms

> Source: [Atoms](src/resources/atoms.ts)

<details>
<summary><code>deleteAtom(request: Atoms.DeleteAtomRequest, options?: RequestOptions): ApiPromise&lt;undefined, Atoms.DeleteAtomError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.atoms.deleteAtom({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Atoms.DeleteAtomError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.atoms.deleteAtom({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.atoms.deleteAtom(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Atoms.DeleteAtomError](src/resources/atoms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.atoms.deleteAtom(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Atoms.DeleteAtomError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAtom(request: Atoms.GetAtomRequest, options?: RequestOptions): ApiPromise&lt;Atom, Atoms.GetAtomError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.atoms.getAtom({ id: "some example string" });
  // TODO: Handle 'response' of type Atom
} catch (err) {
  // TODO: Handle 'err' of type Atoms.GetAtomError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.atoms.getAtom({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Atom
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.atoms.getAtom(request)`

- **OnSuccess**: <code>[Atom](src/models/atom.ts)</code>
- **OnError**: throws <code>[Atoms.GetAtomError](src/resources/atoms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.atoms.getAtom(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Atom, Atoms.GetAtomError&gt;</code>, with `result.value` of type <code>[Atom](src/models/atom.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryAtoms(request: Atoms.QueryAtomsRequest, options?: RequestOptions): ApiPromise&lt;AtomQueryResult, Atoms.QueryAtomsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Atoms matching the specified filter criteria, including online/offline status and environment associations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.atoms.queryAtoms({ body: {} });
  // TODO: Handle 'response' of type AtomQueryResult
} catch (err) {
  // TODO: Handle 'err' of type Atoms.QueryAtomsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.atoms.queryAtoms({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AtomQueryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](src/models/query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.atoms.queryAtoms(request)`

- **OnSuccess**: <code>[AtomQueryResult](src/models/atom-query-result.ts)</code>
- **OnError**: throws <code>[Atoms.QueryAtomsError](src/resources/atoms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.atoms.queryAtoms(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AtomQueryResult, Atoms.QueryAtomsError&gt;</code>, with `result.value` of type <code>[AtomQueryResult](src/models/atom-query-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateAtom(request: Atoms.UpdateAtomRequest, options?: RequestOptions): ApiPromise&lt;Atom, Atoms.UpdateAtomError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name or purge schedule of an existing Boomi Atom.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.atoms.updateAtom({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type Atom
} catch (err) {
  // TODO: Handle 'err' of type Atoms.UpdateAtomError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.atoms.updateAtom({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Atom
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |
| <code>body</code> | <code>[AtomInput](src/models/atom-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.atoms.updateAtom(request)`

- **OnSuccess**: <code>[Atom](src/models/atom.ts)</code>
- **OnError**: throws <code>[Atoms.UpdateAtomError](src/resources/atoms.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.atoms.updateAtom(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Atom, Atoms.UpdateAtomError&gt;</code>, with `result.value` of type <code>[Atom](src/models/atom.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Components

> Source: [Components](src/resources/components.ts)

<details>
<summary><code>createPackagedComponent(request: Components.CreatePackagedComponentRequest, options?: RequestOptions): ApiPromise&lt;PackagedComponent, Components.CreatePackagedComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed to environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.createPackagedComponent({
    body: { componentId: "some example string", componentVersion: "some example string" },
  });
  // TODO: Handle 'response' of type PackagedComponent
} catch (err) {
  // TODO: Handle 'err' of type Components.CreatePackagedComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.components
  .createPackagedComponent({
    body: { componentId: "some example string", componentVersion: "some example string" },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PackagedComponent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PackagedComponentInput](src/models/packaged-component-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.components.createPackagedComponent(request)`

- **OnSuccess**: <code>[PackagedComponent](src/models/packaged-component.ts)</code>
- **OnError**: throws <code>[Components.CreatePackagedComponentError](src/resources/components.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.components.createPackagedComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PackagedComponent, Components.CreatePackagedComponentError&gt;</code>, with `result.value` of type <code>[PackagedComponent](src/models/packaged-component.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPackagedComponent(request: Components.GetPackagedComponentRequest, options?: RequestOptions): ApiPromise&lt;PackagedComponent, Components.GetPackagedComponentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific packaged component by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.components.getPackagedComponent({ id: "some example string" });
  // TODO: Handle 'response' of type PackagedComponent
} catch (err) {
  // TODO: Handle 'err' of type Components.GetPackagedComponentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.components.getPackagedComponent({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PackagedComponent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.components.getPackagedComponent(request)`

- **OnSuccess**: <code>[PackagedComponent](src/models/packaged-component.ts)</code>
- **OnError**: throws <code>[Components.GetPackagedComponentError](src/resources/components.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.components.getPackagedComponent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PackagedComponent, Components.GetPackagedComponentError&gt;</code>, with `result.value` of type <code>[PackagedComponent](src/models/packaged-component.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Deployments

> Source: [Deployments](src/resources/deployments.ts)

<details>
<summary><code>createDeployedPackage(request: Deployments.CreateDeployedPackageRequest, options?: RequestOptions): ApiPromise&lt;DeployedPackage, Deployments.CreateDeployedPackageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deploys a packaged component to an environment. Creates a new deployed package record associating the package with the target environment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deployments.createDeployedPackage({
    body: { environmentId: "some example string", packageId: "some example string" },
  });
  // TODO: Handle 'response' of type DeployedPackage
} catch (err) {
  // TODO: Handle 'err' of type Deployments.CreateDeployedPackageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments
  .createDeployedPackage({ body: { environmentId: "some example string", packageId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeployedPackage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeployedPackageInput](src/models/deployed-package-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.createDeployedPackage(request)`

- **OnSuccess**: <code>[DeployedPackage](src/models/deployed-package.ts)</code>
- **OnError**: throws <code>[Deployments.CreateDeployedPackageError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.createDeployedPackage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeployedPackage, Deployments.CreateDeployedPackageError&gt;</code>, with `result.value` of type <code>[DeployedPackage](src/models/deployed-package.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDeployedPackage(request: Deployments.DeleteDeployedPackageRequest, options?: RequestOptions): ApiPromise&lt;undefined, Deployments.DeleteDeployedPackageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a deployed package from its environment, undeploying the component.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.deployments.deleteDeployedPackage({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Deployments.DeleteDeployedPackageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments.deleteDeployedPackage({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.deleteDeployedPackage(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Deployments.DeleteDeployedPackageError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.deleteDeployedPackage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Deployments.DeleteDeployedPackageError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeployedPackage(request: Deployments.GetDeployedPackageRequest, options?: RequestOptions): ApiPromise&lt;DeployedPackage, Deployments.GetDeployedPackageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific deployed package by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deployments.getDeployedPackage({ id: "some example string" });
  // TODO: Handle 'response' of type DeployedPackage
} catch (err) {
  // TODO: Handle 'err' of type Deployments.GetDeployedPackageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments.getDeployedPackage({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeployedPackage
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.getDeployedPackage(request)`

- **OnSuccess**: <code>[DeployedPackage](src/models/deployed-package.ts)</code>
- **OnError**: throws <code>[Deployments.GetDeployedPackageError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.getDeployedPackage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeployedPackage, Deployments.GetDeployedPackageError&gt;</code>, with `result.value` of type <code>[DeployedPackage](src/models/deployed-package.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryDeployedPackages(request: Deployments.QueryDeployedPackagesRequest, options?: RequestOptions): ApiPromise&lt;DeployedPackageQueryResult, Deployments.QueryDeployedPackagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of deployed packages matching the specified filter criteria. Useful for auditing current deployments across environments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.deployments.queryDeployedPackages({ body: {} });
  // TODO: Handle 'response' of type DeployedPackageQueryResult
} catch (err) {
  // TODO: Handle 'err' of type Deployments.QueryDeployedPackagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.deployments.queryDeployedPackages({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeployedPackageQueryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](src/models/query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.deployments.queryDeployedPackages(request)`

- **OnSuccess**: <code>[DeployedPackageQueryResult](src/models/deployed-package-query-result.ts)</code>
- **OnError**: throws <code>[Deployments.QueryDeployedPackagesError](src/resources/deployments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.deployments.queryDeployedPackages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeployedPackageQueryResult, Deployments.QueryDeployedPackagesError&gt;</code>, with `result.value` of type <code>[DeployedPackageQueryResult](src/models/deployed-package-query-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](src/resources/environments.ts)

<details>
<summary><code>createEnvironment(request: Environments.CreateEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;Environment, Environments.CreateEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new runtime environment in the Boomi platform for deploying and running integration processes.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.createEnvironment({
    body: { name: "some example string", classification: Classification1.Production },
  });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.CreateEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments
  .createEnvironment({ body: { name: "some example string", classification: Classification1.Production } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EnvironmentInput](src/models/environment-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.createEnvironment(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.CreateEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.createEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.CreateEnvironmentError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteEnvironment(request: Environments.DeleteEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;undefined, Environments.DeleteEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a runtime environment from the Boomi platform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.environments.deleteEnvironment({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Environments.DeleteEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments.deleteEnvironment({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.deleteEnvironment(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Environments.DeleteEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.deleteEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Environments.DeleteEnvironmentError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnvironment(request: Environments.GetEnvironmentRequest, options?: RequestOptions): ApiPromise&lt;Environment, Environments.GetEnvironmentError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific runtime environment by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.getEnvironment({ id: "some example string" });
  // TODO: Handle 'response' of type Environment
} catch (err) {
  // TODO: Handle 'err' of type Environments.GetEnvironmentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments.getEnvironment({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Environment
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.getEnvironment(request)`

- **OnSuccess**: <code>[Environment](src/models/environment.ts)</code>
- **OnError**: throws <code>[Environments.GetEnvironmentError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.getEnvironment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Environment, Environments.GetEnvironmentError&gt;</code>, with `result.value` of type <code>[Environment](src/models/environment.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryEnvironments(request: Environments.QueryEnvironmentsRequest, options?: RequestOptions): ApiPromise&lt;EnvironmentQueryResult, Environments.QueryEnvironmentsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of runtime environments matching the specified query filter criteria.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.environments.queryEnvironments({ body: {} });
  // TODO: Handle 'response' of type EnvironmentQueryResult
} catch (err) {
  // TODO: Handle 'err' of type Environments.QueryEnvironmentsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.environments.queryEnvironments({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnvironmentQueryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](src/models/query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.environments.queryEnvironments(request)`

- **OnSuccess**: <code>[EnvironmentQueryResult](src/models/environment-query-result.ts)</code>
- **OnError**: throws <code>[Environments.QueryEnvironmentsError](src/resources/environments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.environments.queryEnvironments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnvironmentQueryResult, Environments.QueryEnvironmentsError&gt;</code>, with `result.value` of type <code>[EnvironmentQueryResult](src/models/environment-query-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Execution

> Source: [Execution](src/resources/execution.ts)

<details>
<summary><code>executeProcess(request: Execution.ExecuteProcessRequest, options?: RequestOptions): ApiPromise&lt;ExecutionRequestResult, Execution.ExecuteProcessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers the execution of an integration process on a specified Atom. Returns an execution request ID that can be used to track the job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.execution.executeProcess({
    body: { atomId: "some example string", processId: "some example string" },
  });
  // TODO: Handle 'response' of type ExecutionRequestResult
} catch (err) {
  // TODO: Handle 'err' of type Execution.ExecuteProcessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.execution
  .executeProcess({ body: { atomId: "some example string", processId: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExecutionRequestResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ExecutionRequest](src/models/execution-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.execution.executeProcess(request)`

- **OnSuccess**: <code>[ExecutionRequestResult](src/models/execution-request-result.ts)</code>
- **OnError**: throws <code>[Execution.ExecuteProcessError](src/resources/execution.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.execution.executeProcess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExecutionRequestResult, Execution.ExecuteProcessError&gt;</code>, with `result.value` of type <code>[ExecutionRequestResult](src/models/execution-request-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryExecutionRecords(request: Execution.QueryExecutionRecordsRequest, options?: RequestOptions): ApiPromise&lt;ExecutionRecordQueryResult, Execution.QueryExecutionRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of process execution records matching the specified filter criteria. Useful for retrieving job history and execution statistics.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.execution.queryExecutionRecords({ body: {} });
  // TODO: Handle 'response' of type ExecutionRecordQueryResult
} catch (err) {
  // TODO: Handle 'err' of type Execution.QueryExecutionRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.execution.queryExecutionRecords({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExecutionRecordQueryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](src/models/query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.execution.queryExecutionRecords(request)`

- **OnSuccess**: <code>[ExecutionRecordQueryResult](src/models/execution-record-query-result.ts)</code>
- **OnError**: throws <code>[Execution.QueryExecutionRecordsError](src/resources/execution.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.execution.queryExecutionRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExecutionRecordQueryResult, Execution.QueryExecutionRecordsError&gt;</code>, with `result.value` of type <code>[ExecutionRecordQueryResult](src/models/execution-record-query-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## GoldenRecords

> Source: [GoldenRecords](src/resources/golden-records.ts)

<details>
<summary><code>listGoldenRecords(request: GoldenRecords.ListGoldenRecordsRequest, options?: RequestOptions): ApiPromise&lt;RepositoriesUniversesRecordsResponse, GoldenRecords.ListGoldenRecordsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of golden records from the specified master data domain (universe).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.goldenRecords.listGoldenRecords({
    repositoryId: "some example string",
    universeId: "some example string",
  });
  // TODO: Handle 'response' of type RepositoriesUniversesRecordsResponse
} catch (err) {
  // TODO: Handle 'err' of type GoldenRecords.ListGoldenRecordsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.goldenRecords
  .listGoldenRecords({ repositoryId: "some example string", universeId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RepositoriesUniversesRecordsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |
| <code>universeId</code> | <code>string</code> | Unique identifier of the master data domain (universe). |
| <code>pageSize?</code> | <code>number</code> | Number of records per page.<br>**Default**: 100 |
| <code>pageToken?</code> | <code>string</code> | Pagination token from a previous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.goldenRecords.listGoldenRecords(request)`

- **OnSuccess**: <code>[RepositoriesUniversesRecordsResponse](src/models/repositories-universes-records-response.ts)</code>
- **OnError**: throws <code>[GoldenRecords.ListGoldenRecordsError](src/resources/golden-records.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.goldenRecords.listGoldenRecords(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RepositoriesUniversesRecordsResponse, GoldenRecords.ListGoldenRecordsError&gt;</code>, with `result.value` of type <code>[RepositoriesUniversesRecordsResponse](src/models/repositories-universes-records-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](src/resources/messages.ts)

<details>
<summary><code>publishMessages(request: Messages.PublishMessagesRequest, options?: RequestOptions): ApiPromise&lt;PublishResponse, Messages.PublishMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes one or more messages to the event topic. Supports two operational modes: multiple messages mode (predefined JSON format with payload and properties fields) and single message mode (original format in plain text, JSON, or XML). Messages may be up to 5 MB each and the total HTTP request must not exceed 10 MB. Rate limited to 60,000 requests per IP per 5-minute window.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.messages.publishMessages({
    body: { messages: [{ payload: "some example string" }] },
  });
  // TODO: Handle 'response' of type PublishResponse
} catch (err) {
  // TODO: Handle 'err' of type Messages.PublishMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.messages
  .publishMessages({ body: { messages: [{ payload: "some example string" }] } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublishResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[Request](src/models/unions/request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.messages.publishMessages(request)`

- **OnSuccess**: <code>[PublishResponse](src/models/publish-response.ts)</code>
- **OnError**: throws <code>[Messages.PublishMessagesError](src/resources/messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.messages.publishMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublishResponse, Messages.PublishMessagesError&gt;</code>, with `result.value` of type <code>[PublishResponse](src/models/publish-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Models

> Source: [Models](src/resources/models.ts)

<details>
<summary><code>createModel(request: Models.CreateModelRequest, options?: RequestOptions): ApiPromise&lt;Model, Models.CreateModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new data model within the repository that defines the schema for a master data domain.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.createModel({
    repositoryId: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type Model
} catch (err) {
  // TODO: Handle 'err' of type Models.CreateModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .createModel({ repositoryId: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Model
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |
| <code>body</code> | <code>[ModelInput](src/models/model-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.createModel(request)`

- **OnSuccess**: <code>[Model](src/models/model.ts)</code>
- **OnError**: throws <code>[Models.CreateModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.createModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Model, Models.CreateModelError&gt;</code>, with `result.value` of type <code>[Model](src/models/model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteModel(request: Models.DeleteModelRequest, options?: RequestOptions): ApiPromise&lt;undefined, Models.DeleteModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a data model from the repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.models.deleteModel({ repositoryId: "some example string", modelId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Models.DeleteModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .deleteModel({ repositoryId: "some example string", modelId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |
| <code>modelId</code> | <code>string</code> | Unique identifier of the data model. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.deleteModel(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Models.DeleteModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.deleteModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Models.DeleteModelError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getModel(request: Models.GetModelRequest, options?: RequestOptions): ApiPromise&lt;Model, Models.GetModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details and schema of a specific data model.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.getModel({
    repositoryId: "some example string",
    modelId: "some example string",
  });
  // TODO: Handle 'response' of type Model
} catch (err) {
  // TODO: Handle 'err' of type Models.GetModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .getModel({ repositoryId: "some example string", modelId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Model
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |
| <code>modelId</code> | <code>string</code> | Unique identifier of the data model. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.getModel(request)`

- **OnSuccess**: <code>[Model](src/models/model.ts)</code>
- **OnError**: throws <code>[Models.GetModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.getModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Model, Models.GetModelError&gt;</code>, with `result.value` of type <code>[Model](src/models/model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listModels(request: Models.ListModelsRequest, options?: RequestOptions): ApiPromise&lt;RepositoriesModelsResponse, Models.ListModelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all data models defined within a specific repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.listModels({ repositoryId: "some example string" });
  // TODO: Handle 'response' of type RepositoriesModelsResponse
} catch (err) {
  // TODO: Handle 'err' of type Models.ListModelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models.listModels({ repositoryId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RepositoriesModelsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.listModels(request)`

- **OnSuccess**: <code>[RepositoriesModelsResponse](src/models/repositories-models-response.ts)</code>
- **OnError**: throws <code>[Models.ListModelsError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.listModels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RepositoriesModelsResponse, Models.ListModelsError&gt;</code>, with `result.value` of type <code>[RepositoriesModelsResponse](src/models/repositories-models-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishModel(request: Models.PublishModelRequest, options?: RequestOptions): ApiPromise&lt;Model, Models.PublishModelError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes a data model, making it available for domain deployment and data ingestion.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.models.publishModel({
    repositoryId: "some example string",
    modelId: "some example string",
  });
  // TODO: Handle 'response' of type Model
} catch (err) {
  // TODO: Handle 'err' of type Models.PublishModelError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.models
  .publishModel({ repositoryId: "some example string", modelId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Model
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |
| <code>modelId</code> | <code>string</code> | Unique identifier of the data model. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.models.publishModel(request)`

- **OnSuccess**: <code>[Model](src/models/model.ts)</code>
- **OnError**: throws <code>[Models.PublishModelError](src/resources/models.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.models.publishModel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Model, Models.PublishModelError&gt;</code>, with `result.value` of type <code>[Model](src/models/model.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Processes

> Source: [Processes](src/resources/processes.ts)

<details>
<summary><code>createProcess(request: Processes.CreateProcessRequest, options?: RequestOptions): ApiPromise&lt;Process, Processes.CreateProcessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new integration process in the Boomi platform. The process definition is provided in the request body as XML or JSON.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processes.createProcess({ body: {} });
  // TODO: Handle 'response' of type Process
} catch (err) {
  // TODO: Handle 'err' of type Processes.CreateProcessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processes.createProcess({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Process
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessInput](src/models/process-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processes.createProcess(request)`

- **OnSuccess**: <code>[Process](src/models/process.ts)</code>
- **OnError**: throws <code>[Processes.CreateProcessError](src/resources/processes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processes.createProcess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Process, Processes.CreateProcessError&gt;</code>, with `result.value` of type <code>[Process](src/models/process.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteProcess(request: Processes.DeleteProcessRequest, options?: RequestOptions): ApiPromise&lt;undefined, Processes.DeleteProcessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an integration process from the Boomi platform.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.processes.deleteProcess({ id: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Processes.DeleteProcessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processes.deleteProcess({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processes.deleteProcess(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Processes.DeleteProcessError](src/resources/processes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processes.deleteProcess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Processes.DeleteProcessError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProcess(request: Processes.GetProcessRequest, options?: RequestOptions): ApiPromise&lt;Process, Processes.GetProcessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific integration process by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processes.getProcess({ id: "some example string" });
  // TODO: Handle 'response' of type Process
} catch (err) {
  // TODO: Handle 'err' of type Processes.GetProcessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processes.getProcess({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Process
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processes.getProcess(request)`

- **OnSuccess**: <code>[Process](src/models/process.ts)</code>
- **OnError**: throws <code>[Processes.GetProcessError](src/resources/processes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processes.getProcess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Process, Processes.GetProcessError&gt;</code>, with `result.value` of type <code>[Process](src/models/process.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getProcessSchedules(request: Processes.GetProcessSchedulesRequest, options?: RequestOptions): ApiPromise&lt;ProcessSchedules, Processes.GetProcessSchedulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the scheduling configuration for a specific integration process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processes.getProcessSchedules({ id: "some example string" });
  // TODO: Handle 'response' of type ProcessSchedules
} catch (err) {
  // TODO: Handle 'err' of type Processes.GetProcessSchedulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processes.getProcessSchedules({ id: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessSchedules
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processes.getProcessSchedules(request)`

- **OnSuccess**: <code>[ProcessSchedules](src/models/process-schedules.ts)</code>
- **OnError**: throws <code>[Processes.GetProcessSchedulesError](src/resources/processes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processes.getProcessSchedules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessSchedules, Processes.GetProcessSchedulesError&gt;</code>, with `result.value` of type <code>[ProcessSchedules](src/models/process-schedules.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>queryProcesses(request: Processes.QueryProcessesRequest, options?: RequestOptions): ApiPromise&lt;ProcessQueryResult, Processes.QueryProcessesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of integration processes matching the specified query filter criteria. Supports filtering by folder ID, process name, and other properties.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processes.queryProcesses({ body: {} });
  // TODO: Handle 'response' of type ProcessQueryResult
} catch (err) {
  // TODO: Handle 'err' of type Processes.QueryProcessesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processes.queryProcesses({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessQueryResult
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](src/models/query-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processes.queryProcesses(request)`

- **OnSuccess**: <code>[ProcessQueryResult](src/models/process-query-result.ts)</code>
- **OnError**: throws <code>[Processes.QueryProcessesError](src/resources/processes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processes.queryProcesses(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessQueryResult, Processes.QueryProcessesError&gt;</code>, with `result.value` of type <code>[ProcessQueryResult](src/models/process-query-result.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProcess(request: Processes.UpdateProcessRequest, options?: RequestOptions): ApiPromise&lt;Process, Processes.UpdateProcessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing integration process by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processes.updateProcess({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type Process
} catch (err) {
  // TODO: Handle 'err' of type Processes.UpdateProcessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processes.updateProcess({ id: "some example string", body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Process
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |
| <code>body</code> | <code>[ProcessInput](src/models/process-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processes.updateProcess(request)`

- **OnSuccess**: <code>[Process](src/models/process.ts)</code>
- **OnError**: throws <code>[Processes.UpdateProcessError](src/resources/processes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processes.updateProcess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Process, Processes.UpdateProcessError&gt;</code>, with `result.value` of type <code>[Process](src/models/process.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateProcessSchedules(request: Processes.UpdateProcessSchedulesRequest, options?: RequestOptions): ApiPromise&lt;ProcessSchedules, Processes.UpdateProcessSchedulesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the scheduling configuration for a specific integration process.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.processes.updateProcessSchedules({ id: "some example string", body: {} });
  // TODO: Handle 'response' of type ProcessSchedules
} catch (err) {
  // TODO: Handle 'err' of type Processes.UpdateProcessSchedulesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.processes
  .updateProcessSchedules({ id: "some example string", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ProcessSchedules
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Unique identifier of the platform object. |
| <code>body</code> | <code>[ProcessSchedules](src/models/process-schedules.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.processes.updateProcessSchedules(request)`

- **OnSuccess**: <code>[ProcessSchedules](src/models/process-schedules.ts)</code>
- **OnError**: throws <code>[Processes.UpdateProcessSchedulesError](src/resources/processes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.processes.updateProcessSchedules(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ProcessSchedules, Processes.UpdateProcessSchedulesError&gt;</code>, with `result.value` of type <code>[ProcessSchedules](src/models/process-schedules.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Quarantine

> Source: [Quarantine](src/resources/quarantine.ts)

<details>
<summary><code>listQuarantineEntries(request: Quarantine.ListQuarantineEntriesRequest, options?: RequestOptions): ApiPromise&lt;RepositoriesUniversesQuarantineResponse, Quarantine.ListQuarantineEntriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns records held in quarantine that could not be automatically processed due to data quality or matching issues.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.quarantine.listQuarantineEntries({
    repositoryId: "some example string",
    universeId: "some example string",
  });
  // TODO: Handle 'response' of type RepositoriesUniversesQuarantineResponse
} catch (err) {
  // TODO: Handle 'err' of type Quarantine.ListQuarantineEntriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.quarantine
  .listQuarantineEntries({ repositoryId: "some example string", universeId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RepositoriesUniversesQuarantineResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |
| <code>universeId</code> | <code>string</code> | Unique identifier of the master data domain (universe). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.quarantine.listQuarantineEntries(request)`

- **OnSuccess**: <code>[RepositoriesUniversesQuarantineResponse](src/models/repositories-universes-quarantine-response.ts)</code>
- **OnError**: throws <code>[Quarantine.ListQuarantineEntriesError](src/resources/quarantine.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.quarantine.listQuarantineEntries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RepositoriesUniversesQuarantineResponse, Quarantine.ListQuarantineEntriesError&gt;</code>, with `result.value` of type <code>[RepositoriesUniversesQuarantineResponse](src/models/repositories-universes-quarantine-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Repositories

> Source: [Repositories](src/resources/repositories.ts)

<details>
<summary><code>createRepository(request: Repositories.CreateRepositoryRequest, options?: RequestOptions): ApiPromise&lt;Repository, Repositories.CreateRepositoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new DataHub repository for managing master data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.repositories.createRepository({ body: { name: "some example string" } });
  // TODO: Handle 'response' of type Repository
} catch (err) {
  // TODO: Handle 'err' of type Repositories.CreateRepositoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.repositories
  .createRepository({ body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Repository
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RepositoryInput](src/models/repository-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.repositories.createRepository(request)`

- **OnSuccess**: <code>[Repository](src/models/repository.ts)</code>
- **OnError**: throws <code>[Repositories.CreateRepositoryError](src/resources/repositories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.repositories.createRepository(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Repository, Repositories.CreateRepositoryError&gt;</code>, with `result.value` of type <code>[Repository](src/models/repository.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteRepository(request: Repositories.DeleteRepositoryRequest, options?: RequestOptions): ApiPromise&lt;undefined, Repositories.DeleteRepositoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a DataHub repository and all its data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.repositories.deleteRepository({ repositoryId: "some example string" });
} catch (err) {
  // TODO: Handle 'err' of type Repositories.DeleteRepositoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.repositories
  .deleteRepository({ repositoryId: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.repositories.deleteRepository(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[Repositories.DeleteRepositoryError](src/resources/repositories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.repositories.deleteRepository(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, Repositories.DeleteRepositoryError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRepository(request: Repositories.GetRepositoryRequest, options?: RequestOptions): ApiPromise&lt;Repository, Repositories.GetRepositoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details of a specific DataHub repository by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.repositories.getRepository({ repositoryId: "some example string" });
  // TODO: Handle 'response' of type Repository
} catch (err) {
  // TODO: Handle 'err' of type Repositories.GetRepositoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.repositories.getRepository({ repositoryId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Repository
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.repositories.getRepository(request)`

- **OnSuccess**: <code>[Repository](src/models/repository.ts)</code>
- **OnError**: throws <code>[Repositories.GetRepositoryError](src/resources/repositories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.repositories.getRepository(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Repository, Repositories.GetRepositoryError&gt;</code>, with `result.value` of type <code>[Repository](src/models/repository.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listRepositories(options?: RequestOptions): ApiPromise&lt;RepositoriesResponse, Repositories.ListRepositoriesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DataHub repositories associated with the authenticated account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.repositories.listRepositories();
  // TODO: Handle 'response' of type RepositoriesResponse
} catch (err) {
  // TODO: Handle 'err' of type Repositories.ListRepositoriesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.repositories.listRepositories().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RepositoriesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.repositories.listRepositories()`

- **OnSuccess**: <code>[RepositoriesResponse](src/models/repositories-response.ts)</code>
- **OnError**: throws <code>[Repositories.ListRepositoriesError](src/resources/repositories.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.repositories.listRepositories().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RepositoriesResponse, Repositories.ListRepositoriesError&gt;</code>, with `result.value` of type <code>[RepositoriesResponse](src/models/repositories-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](src/resources/sources.ts)

<details>
<summary><code>createSource(request: Sources.CreateSourceRequest, options?: RequestOptions): ApiPromise&lt;SourceBoomiDataHubSourcesApi, Sources.CreateSourceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new data source within the repository representing a system that contributes records to the master data hub.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.createSource({
    repositoryId: "some example string",
    body: { name: "some example string" },
  });
  // TODO: Handle 'response' of type SourceBoomiDataHubSourcesApi
} catch (err) {
  // TODO: Handle 'err' of type Sources.CreateSourceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources
  .createSource({ repositoryId: "some example string", body: { name: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SourceBoomiDataHubSourcesApi
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |
| <code>body</code> | <code>[SourceInput](src/models/source-input.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.createSource(request)`

- **OnSuccess**: <code>[SourceBoomiDataHubSourcesApi](src/models/source-boomi-data-hub-sources-api.ts)</code>
- **OnError**: throws <code>[Sources.CreateSourceError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.createSource(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SourceBoomiDataHubSourcesApi, Sources.CreateSourceError&gt;</code>, with `result.value` of type <code>[SourceBoomiDataHubSourcesApi](src/models/source-boomi-data-hub-sources-api.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSources(request: Sources.ListSourcesRequest, options?: RequestOptions): ApiPromise&lt;RepositoriesSourcesResponse, Sources.ListSourcesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all data sources configured within a specific repository.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sources.listSources({ repositoryId: "some example string" });
  // TODO: Handle 'response' of type RepositoriesSourcesResponse
} catch (err) {
  // TODO: Handle 'err' of type Sources.ListSourcesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sources.listSources({ repositoryId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RepositoriesSourcesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repositoryId</code> | <code>string</code> | Unique identifier of the DataHub repository. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sources.listSources(request)`

- **OnSuccess**: <code>[RepositoriesSourcesResponse](src/models/repositories-sources-response.ts)</code>
- **OnError**: throws <code>[Sources.ListSourcesError](src/resources/sources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.sources.listSources(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RepositoriesSourcesResponse, Sources.ListSourcesError&gt;</code>, with `result.value` of type <code>[RepositoriesSourcesResponse](src/models/repositories-sources-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[BoomiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

