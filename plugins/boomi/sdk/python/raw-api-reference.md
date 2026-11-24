# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [BoomiClient](boomi/client.py)

## Atoms

> Source: [Atoms](boomi/apis/atoms.py)

<details>
<summary><code>def delete_atom(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteAtomErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an Atom from the Boomi platform. The Atom must be offline before it can be deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.atoms.with_raw_response.delete_atom("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAtomErrorBody
```

**Async**

```python
result = await async_client.atoms.with_raw_response.delete_atom("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteAtomErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;None, [DeleteAtomErrorBody](boomi/errors/delete_atom_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteAtomErrorBody](boomi/errors/delete_atom_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_atom(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Atom, GetAtomErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific Boomi Atom (runtime engine) by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.atoms.with_raw_response.get_atom("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Atom
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAtomErrorBody
```

**Async**

```python
result = await async_client.atoms.with_raw_response.get_atom("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Atom
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAtomErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Atom](boomi/models/atom.py), [GetAtomErrorBody](boomi/errors/get_atom_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Atom](boomi/models/atom.py)</code> -- The Atom object.

**On `Failure`**: `error` is <code>[GetAtomErrorBody](boomi/errors/get_atom_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_atoms(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AtomQueryResult, QueryAtomsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of Atoms matching the specified filter criteria, including online/offline status and environment associations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.atoms.with_raw_response.query_atoms(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AtomQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryAtomsErrorBody
```

**Async**

```python
result = await async_client.atoms.with_raw_response.query_atoms(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AtomQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryAtomsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](boomi/models/query_request.py) \| [QueryRequestDict](boomi/models/query_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[AtomQueryResult](boomi/models/atom_query_result.py), [QueryAtomsErrorBody](boomi/errors/query_atoms_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AtomQueryResult](boomi/models/atom_query_result.py)</code> -- Query results containing matching Atom objects.

**On `Failure`**: `error` is <code>[QueryAtomsErrorBody](boomi/errors/query_atoms_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_atom(id_: str, body: AtomInput | AtomInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Atom, UpdateAtomErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the name or purge schedule of an existing Boomi Atom.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.atoms.with_raw_response.update_atom("some example string", AtomInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Atom
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAtomErrorBody
```

**Async**

```python
result = await async_client.atoms.with_raw_response.update_atom("some example string", AtomInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Atom
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateAtomErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>body</code> | <code>[AtomInput](boomi/models/atom_input.py) \| [AtomInputDict](boomi/models/atom_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Atom](boomi/models/atom.py), [UpdateAtomErrorBody](boomi/errors/update_atom_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Atom](boomi/models/atom.py)</code> -- The updated Atom object.

**On `Failure`**: `error` is <code>[UpdateAtomErrorBody](boomi/errors/update_atom_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Components

> Source: [Components](boomi/apis/components.py)

<details>
<summary><code>def create_packaged_component(body: PackagedComponentInput | PackagedComponentInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PackagedComponent, CreatePackagedComponentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a packaged version of a Boomi component (process, connector, etc.) that can be deployed to environments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.components.with_raw_response.create_packaged_component(
    PackagedComponentInput(component_id="some example string", component_version="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PackagedComponent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePackagedComponentErrorBody
```

**Async**

```python
result = await async_client.components.with_raw_response.create_packaged_component(
    PackagedComponentInput(component_id="some example string", component_version="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PackagedComponent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreatePackagedComponentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PackagedComponentInput](boomi/models/packaged_component_input.py) \| [PackagedComponentInputDict](boomi/models/packaged_component_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[PackagedComponent](boomi/models/packaged_component.py), [CreatePackagedComponentErrorBody](boomi/errors/create_packaged_component_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PackagedComponent](boomi/models/packaged_component.py)</code> -- The created packaged component.

**On `Failure`**: `error` is <code>[CreatePackagedComponentErrorBody](boomi/errors/create_packaged_component_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_packaged_component(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PackagedComponent, GetPackagedComponentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific packaged component by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.components.with_raw_response.get_packaged_component("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PackagedComponent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPackagedComponentErrorBody
```

**Async**

```python
result = await async_client.components.with_raw_response.get_packaged_component("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PackagedComponent
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPackagedComponentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[PackagedComponent](boomi/models/packaged_component.py), [GetPackagedComponentErrorBody](boomi/errors/get_packaged_component_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PackagedComponent](boomi/models/packaged_component.py)</code> -- The packaged component object.

**On `Failure`**: `error` is <code>[GetPackagedComponentErrorBody](boomi/errors/get_packaged_component_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Deployments

> Source: [Deployments](boomi/apis/deployments.py)

<details>
<summary><code>def create_deployed_package(body: DeployedPackageInput | DeployedPackageInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeployedPackage, CreateDeployedPackageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deploys a packaged component to an environment. Creates a new deployed package record associating the package with the target environment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.create_deployed_package(
    DeployedPackageInput(environment_id="some example string", package_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeployedPackage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDeployedPackageErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.create_deployed_package(
    DeployedPackageInput(environment_id="some example string", package_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeployedPackage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDeployedPackageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeployedPackageInput](boomi/models/deployed_package_input.py) \| [DeployedPackageInputDict](boomi/models/deployed_package_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[DeployedPackage](boomi/models/deployed_package.py), [CreateDeployedPackageErrorBody](boomi/errors/create_deployed_package_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeployedPackage](boomi/models/deployed_package.py)</code> -- The deployed package record.

**On `Failure`**: `error` is <code>[CreateDeployedPackageErrorBody](boomi/errors/create_deployed_package_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_deployed_package(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteDeployedPackageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a deployed package from its environment, undeploying the component.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.delete_deployed_package("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDeployedPackageErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.delete_deployed_package("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDeployedPackageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;None, [DeleteDeployedPackageErrorBody](boomi/errors/delete_deployed_package_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteDeployedPackageErrorBody](boomi/errors/delete_deployed_package_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_deployed_package(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeployedPackage, GetDeployedPackageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific deployed package by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.get_deployed_package("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeployedPackage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeployedPackageErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.get_deployed_package("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeployedPackage
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDeployedPackageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[DeployedPackage](boomi/models/deployed_package.py), [GetDeployedPackageErrorBody](boomi/errors/get_deployed_package_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeployedPackage](boomi/models/deployed_package.py)</code> -- The deployed package object.

**On `Failure`**: `error` is <code>[GetDeployedPackageErrorBody](boomi/errors/get_deployed_package_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_deployed_packages(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeployedPackageQueryResult, QueryDeployedPackagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of deployed packages matching the specified filter criteria. Useful for auditing current deployments across environments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.deployments.with_raw_response.query_deployed_packages(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeployedPackageQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryDeployedPackagesErrorBody
```

**Async**

```python
result = await async_client.deployments.with_raw_response.query_deployed_packages(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeployedPackageQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryDeployedPackagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](boomi/models/query_request.py) \| [QueryRequestDict](boomi/models/query_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[DeployedPackageQueryResult](boomi/models/deployed_package_query_result.py), [QueryDeployedPackagesErrorBody](boomi/errors/query_deployed_packages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeployedPackageQueryResult](boomi/models/deployed_package_query_result.py)</code> -- Query results containing matching deployed package objects.

**On `Failure`**: `error` is <code>[QueryDeployedPackagesErrorBody](boomi/errors/query_deployed_packages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Environments

> Source: [Environments](boomi/apis/environments.py)

<details>
<summary><code>def create_environment(body: EnvironmentInput | EnvironmentInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, CreateEnvironmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new runtime environment in the Boomi platform for deploying and running integration processes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.create_environment(
    EnvironmentInput(name="some example string", classification=Classification1.PRODUCTION)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.create_environment(
    EnvironmentInput(name="some example string", classification=Classification1.PRODUCTION)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[EnvironmentInput](boomi/models/environment_input.py) \| [EnvironmentInputDict](boomi/models/environment_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[EnvironmentModel](boomi/models/environment_model.py), [CreateEnvironmentErrorBody](boomi/errors/create_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](boomi/models/environment_model.py)</code> -- The created environment object.

**On `Failure`**: `error` is <code>[CreateEnvironmentErrorBody](boomi/errors/create_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_environment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEnvironmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a runtime environment from the Boomi platform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.delete_environment("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.delete_environment("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;None, [DeleteEnvironmentErrorBody](boomi/errors/delete_environment_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEnvironmentErrorBody](boomi/errors/delete_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_environment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentModel, GetEnvironmentErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific runtime environment by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.get_environment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.get_environment("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentModel
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[EnvironmentModel](boomi/models/environment_model.py), [GetEnvironmentErrorBody](boomi/errors/get_environment_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentModel](boomi/models/environment_model.py)</code> -- The environment object.

**On `Failure`**: `error` is <code>[GetEnvironmentErrorBody](boomi/errors/get_environment_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_environments(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentQueryResult, QueryEnvironmentsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of runtime environments matching the specified query filter criteria.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.environments.with_raw_response.query_environments(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryEnvironmentsErrorBody
```

**Async**

```python
result = await async_client.environments.with_raw_response.query_environments(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryEnvironmentsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](boomi/models/query_request.py) \| [QueryRequestDict](boomi/models/query_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[EnvironmentQueryResult](boomi/models/environment_query_result.py), [QueryEnvironmentsErrorBody](boomi/errors/query_environments_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentQueryResult](boomi/models/environment_query_result.py)</code> -- Query results containing matching environment objects.

**On `Failure`**: `error` is <code>[QueryEnvironmentsErrorBody](boomi/errors/query_environments_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Execution

> Source: [Execution](boomi/apis/execution.py)

<details>
<summary><code>def execute_process(body: ExecutionRequest | ExecutionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExecutionRequestResult, ExecuteProcessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers the execution of an integration process on a specified Atom. Returns an execution request ID that can be used to track the job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.execution.with_raw_response.execute_process(
    ExecutionRequest(atom_id="some example string", process_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExecutionRequestResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExecuteProcessErrorBody
```

**Async**

```python
result = await async_client.execution.with_raw_response.execute_process(
    ExecutionRequest(atom_id="some example string", process_id="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExecutionRequestResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExecuteProcessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ExecutionRequest](boomi/models/execution_request.py) \| [ExecutionRequestDict](boomi/models/execution_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[ExecutionRequestResult](boomi/models/execution_request_result.py), [ExecuteProcessErrorBody](boomi/errors/execute_process_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExecutionRequestResult](boomi/models/execution_request_result.py)</code> -- The execution request with a job ID for tracking.

**On `Failure`**: `error` is <code>[ExecuteProcessErrorBody](boomi/errors/execute_process_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_execution_records(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExecutionRecordQueryResult, QueryExecutionRecordsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of process execution records matching the specified filter criteria. Useful for retrieving job history and execution statistics.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.execution.with_raw_response.query_execution_records(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExecutionRecordQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryExecutionRecordsErrorBody
```

**Async**

```python
result = await async_client.execution.with_raw_response.query_execution_records(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExecutionRecordQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryExecutionRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](boomi/models/query_request.py) \| [QueryRequestDict](boomi/models/query_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[ExecutionRecordQueryResult](boomi/models/execution_record_query_result.py), [QueryExecutionRecordsErrorBody](boomi/errors/query_execution_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExecutionRecordQueryResult](boomi/models/execution_record_query_result.py)</code> -- Query results containing matching execution records.

**On `Failure`**: `error` is <code>[QueryExecutionRecordsErrorBody](boomi/errors/query_execution_records_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## GoldenRecords

> Source: [GoldenRecords](boomi/apis/golden_records.py)

<details>
<summary><code>def list_golden_records(repository_id: str, universe_id: str, *, page_size: int | None = 100, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RepositoriesUniversesRecordsResponse, ListGoldenRecordsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of golden records from the specified master data domain (universe).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.golden_records.with_raw_response.list_golden_records("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesUniversesRecordsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGoldenRecordsErrorBody
```

**Async**

```python
result = await async_client.golden_records.with_raw_response.list_golden_records(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesUniversesRecordsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListGoldenRecordsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>universe_id</code> | <code>str</code> | Unique identifier of the master data domain (universe). |
| <code>page_size</code> | <code>int \| None</code> | Number of records per page.<br>**Default**: <code>100</code> |
| <code>page_token</code> | <code>str \| None</code> | Pagination token from a previous response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[RepositoriesUniversesRecordsResponse](boomi/models/repositories_universes_records_response.py), [ListGoldenRecordsErrorBody](boomi/errors/list_golden_records_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RepositoriesUniversesRecordsResponse](boomi/models/repositories_universes_records_response.py)</code> -- A paginated list of golden records.

**On `Failure`**: `error` is <code>[ListGoldenRecordsErrorBody](boomi/errors/list_golden_records_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Messages

> Source: [Messages](boomi/apis/messages.py)

<details>
<summary><code>def publish_messages(body: MultiMessageRequest | MultiMessageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublishResponse, PublishMessagesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes one or more messages to the event topic. Supports two operational modes: multiple messages mode (predefined JSON format with payload and properties fields) and single message mode (original format in plain text, JSON, or XML). Messages may be up to 5 MB each and the total HTTP request must not exceed 10 MB. Rate limited to 60,000 requests per IP per 5-minute window.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.messages.with_raw_response.publish_messages(
    MultiMessageRequest(messages=[MessageItem(payload="some example string")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishMessagesErrorBody
```

**Async**

```python
result = await async_client.messages.with_raw_response.publish_messages(
    MultiMessageRequest(messages=[MessageItem(payload="some example string")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishMessagesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MultiMessageRequest](boomi/models/multi_message_request.py) \| [MultiMessageRequestDict](boomi/models/multi_message_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[PublishResponse](boomi/models/publish_response.py), [PublishMessagesErrorBody](boomi/errors/publish_messages_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublishResponse](boomi/models/publish_response.py)</code> -- Messages accepted and published successfully.

**On `Failure`**: `error` is <code>[PublishMessagesErrorBody](boomi/errors/publish_messages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseBoomiEventStreamsRestMessagesApi](boomi/models/error_response_boomi_event_streams_rest_messages_api.py)</code> |
| 413, 429 | <code>[RawError](boomi/core/results.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ModelsApi

> Source: [ModelsApi](boomi/apis/models_api.py)

<details>
<summary><code>def create_model(repository_id: str, body: ModelInput | ModelInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Model, CreateModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new data model within the repository that defines the schema for a master data domain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.create_model("some example string", ModelInput(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.create_model(
    "some example string", ModelInput(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>body</code> | <code>[ModelInput](boomi/models/model_input.py) \| [ModelInputDict](boomi/models/model_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Model](boomi/models/model.py), [CreateModelErrorBody](boomi/errors/create_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Model](boomi/models/model.py)</code> -- The created data model.

**On `Failure`**: `error` is <code>[CreateModelErrorBody](boomi/errors/create_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a data model from the repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.delete_model("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.delete_model("some example string", "some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>model_id</code> | <code>str</code> | Unique identifier of the data model. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;None, [DeleteModelErrorBody](boomi/errors/delete_model_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteModelErrorBody](boomi/errors/delete_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Model, GetModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details and schema of a specific data model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.get_model("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.get_model("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>model_id</code> | <code>str</code> | Unique identifier of the data model. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Model](boomi/models/model.py), [GetModelErrorBody](boomi/errors/get_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Model](boomi/models/model.py)</code> -- The data model details.

**On `Failure`**: `error` is <code>[GetModelErrorBody](boomi/errors/get_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_models(repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RepositoriesModelsResponse, ListModelsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all data models defined within a specific repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.list_models("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesModelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelsErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.list_models("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesModelsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[RepositoriesModelsResponse](boomi/models/repositories_models_response.py), [ListModelsErrorBody](boomi/errors/list_models_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RepositoriesModelsResponse](boomi/models/repositories_models_response.py)</code> -- A list of data models.

**On `Failure`**: `error` is <code>[ListModelsErrorBody](boomi/errors/list_models_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publish_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Model, PublishModelErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes a data model, making it available for domain deployment and data ingestion.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.publish_model("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishModelErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.publish_model("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Model
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishModelErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>model_id</code> | <code>str</code> | Unique identifier of the data model. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Model](boomi/models/model.py), [PublishModelErrorBody](boomi/errors/publish_model_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Model](boomi/models/model.py)</code> -- The published model.

**On `Failure`**: `error` is <code>[PublishModelErrorBody](boomi/errors/publish_model_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Processes

> Source: [Processes](boomi/apis/processes.py)

<details>
<summary><code>def create_process(body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Process, CreateProcessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new integration process in the Boomi platform. The process definition is provided in the request body as XML or JSON.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.processes.with_raw_response.create_process(ProcessInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Process
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProcessErrorBody
```

**Async**

```python
result = await async_client.processes.with_raw_response.create_process(ProcessInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Process
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProcessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProcessInput](boomi/models/process_input.py) \| [ProcessInputDict](boomi/models/process_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Process](boomi/models/process.py), [CreateProcessErrorBody](boomi/errors/create_process_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Process](boomi/models/process.py)</code> -- The created process object.

**On `Failure`**: `error` is <code>[CreateProcessErrorBody](boomi/errors/create_process_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_process(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteProcessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes an integration process from the Boomi platform.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.processes.with_raw_response.delete_process("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProcessErrorBody
```

**Async**

```python
result = await async_client.processes.with_raw_response.delete_process("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProcessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;None, [DeleteProcessErrorBody](boomi/errors/delete_process_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteProcessErrorBody](boomi/errors/delete_process_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_process(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Process, GetProcessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the details of a specific integration process by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.processes.with_raw_response.get_process("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Process
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProcessErrorBody
```

**Async**

```python
result = await async_client.processes.with_raw_response.get_process("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Process
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProcessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Process](boomi/models/process.py), [GetProcessErrorBody](boomi/errors/get_process_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Process](boomi/models/process.py)</code> -- The process object.

**On `Failure`**: `error` is <code>[GetProcessErrorBody](boomi/errors/get_process_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_process_schedules(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProcessSchedules, GetProcessSchedulesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the scheduling configuration for a specific integration process.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.processes.with_raw_response.get_process_schedules("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProcessSchedules
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProcessSchedulesErrorBody
```

**Async**

```python
result = await async_client.processes.with_raw_response.get_process_schedules("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProcessSchedules
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProcessSchedulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[ProcessSchedules](boomi/models/process_schedules.py), [GetProcessSchedulesErrorBody](boomi/errors/get_process_schedules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProcessSchedules](boomi/models/process_schedules.py)</code> -- The process schedule configuration.

**On `Failure`**: `error` is <code>[GetProcessSchedulesErrorBody](boomi/errors/get_process_schedules_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def query_processes(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProcessQueryResult, QueryProcessesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of integration processes matching the specified query filter criteria. Supports filtering by folder ID, process name, and other properties.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.processes.with_raw_response.query_processes(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProcessQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryProcessesErrorBody
```

**Async**

```python
result = await async_client.processes.with_raw_response.query_processes(QueryRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProcessQueryResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type QueryProcessesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QueryRequest](boomi/models/query_request.py) \| [QueryRequestDict](boomi/models/query_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[ProcessQueryResult](boomi/models/process_query_result.py), [QueryProcessesErrorBody](boomi/errors/query_processes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProcessQueryResult](boomi/models/process_query_result.py)</code> -- Query results containing matching process objects.

**On `Failure`**: `error` is <code>[QueryProcessesErrorBody](boomi/errors/query_processes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_process(id_: str, body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Process, UpdateProcessErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing integration process by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.processes.with_raw_response.update_process("some example string", ProcessInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Process
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProcessErrorBody
```

**Async**

```python
result = await async_client.processes.with_raw_response.update_process("some example string", ProcessInput())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Process
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProcessErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>body</code> | <code>[ProcessInput](boomi/models/process_input.py) \| [ProcessInputDict](boomi/models/process_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Process](boomi/models/process.py), [UpdateProcessErrorBody](boomi/errors/update_process_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Process](boomi/models/process.py)</code> -- The updated process object.

**On `Failure`**: `error` is <code>[UpdateProcessErrorBody](boomi/errors/update_process_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_process_schedules(id_: str, body: ProcessSchedules | ProcessSchedulesDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProcessSchedules, UpdateProcessSchedulesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the scheduling configuration for a specific integration process.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.processes.with_raw_response.update_process_schedules("some example string", ProcessSchedules())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProcessSchedules
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProcessSchedulesErrorBody
```

**Async**

```python
result = await async_client.processes.with_raw_response.update_process_schedules(
    "some example string", ProcessSchedules()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProcessSchedules
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProcessSchedulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Unique identifier of the platform object. |
| <code>body</code> | <code>[ProcessSchedules](boomi/models/process_schedules.py) \| [ProcessSchedulesDict](boomi/models/process_schedules.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[ProcessSchedules](boomi/models/process_schedules.py), [UpdateProcessSchedulesErrorBody](boomi/errors/update_process_schedules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProcessSchedules](boomi/models/process_schedules.py)</code> -- The updated process schedule configuration.

**On `Failure`**: `error` is <code>[UpdateProcessSchedulesErrorBody](boomi/errors/update_process_schedules_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404 | <code>[ErrorResponse](boomi/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Quarantine

> Source: [Quarantine](boomi/apis/quarantine.py)

<details>
<summary><code>def list_quarantine_entries(repository_id: str, universe_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RepositoriesUniversesQuarantineResponse, ListQuarantineEntriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns records held in quarantine that could not be automatically processed due to data quality or matching issues.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.quarantine.with_raw_response.list_quarantine_entries("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesUniversesQuarantineResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQuarantineEntriesErrorBody
```

**Async**

```python
result = await async_client.quarantine.with_raw_response.list_quarantine_entries(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesUniversesQuarantineResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQuarantineEntriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>universe_id</code> | <code>str</code> | Unique identifier of the master data domain (universe). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[RepositoriesUniversesQuarantineResponse](boomi/models/repositories_universes_quarantine_response.py), [ListQuarantineEntriesErrorBody](boomi/errors/list_quarantine_entries_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RepositoriesUniversesQuarantineResponse](boomi/models/repositories_universes_quarantine_response.py)</code> -- A list of quarantined records.

**On `Failure`**: `error` is <code>[ListQuarantineEntriesErrorBody](boomi/errors/list_quarantine_entries_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Repositories

> Source: [Repositories](boomi/apis/repositories.py)

<details>
<summary><code>def create_repository(body: RepositoryInput | RepositoryInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Repository, CreateRepositoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new DataHub repository for managing master data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.repositories.with_raw_response.create_repository(RepositoryInput(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Repository
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRepositoryErrorBody
```

**Async**

```python
result = await async_client.repositories.with_raw_response.create_repository(
    RepositoryInput(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Repository
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RepositoryInput](boomi/models/repository_input.py) \| [RepositoryInputDict](boomi/models/repository_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Repository](boomi/models/repository.py), [CreateRepositoryErrorBody](boomi/errors/create_repository_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Repository](boomi/models/repository.py)</code> -- The created repository.

**On `Failure`**: `error` is <code>[CreateRepositoryErrorBody](boomi/errors/create_repository_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_repository(repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteRepositoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently deletes a DataHub repository and all its data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.repositories.with_raw_response.delete_repository("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteRepositoryErrorBody
```

**Async**

```python
result = await async_client.repositories.with_raw_response.delete_repository("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;None, [DeleteRepositoryErrorBody](boomi/errors/delete_repository_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteRepositoryErrorBody](boomi/errors/delete_repository_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_repository(repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Repository, GetRepositoryErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details of a specific DataHub repository by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.repositories.with_raw_response.get_repository("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Repository
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRepositoryErrorBody
```

**Async**

```python
result = await async_client.repositories.with_raw_response.get_repository("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Repository
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRepositoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[Repository](boomi/models/repository.py), [GetRepositoryErrorBody](boomi/errors/get_repository_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Repository](boomi/models/repository.py)</code> -- The repository details.

**On `Failure`**: `error` is <code>[GetRepositoryErrorBody](boomi/errors/get_repository_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_repositories(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RepositoriesResponse, ListRepositoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all DataHub repositories associated with the authenticated account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.repositories.with_raw_response.list_repositories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRepositoriesErrorBody
```

**Async**

```python
result = await async_client.repositories.with_raw_response.list_repositories()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRepositoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[RepositoriesResponse](boomi/models/repositories_response.py), [ListRepositoriesErrorBody](boomi/errors/list_repositories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RepositoriesResponse](boomi/models/repositories_response.py)</code> -- A list of DataHub repositories.

**On `Failure`**: `error` is <code>[ListRepositoriesErrorBody](boomi/errors/list_repositories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](boomi/apis/sources.py)

<details>
<summary><code>def create_source(repository_id: str, body: SourceInput | SourceInputDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SourceBoomiDataHubSourcesApi, CreateSourceErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new data source within the repository representing a system that contributes records to the master data hub.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sources.with_raw_response.create_source("some example string", SourceInput(name="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceBoomiDataHubSourcesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSourceErrorBody
```

**Async**

```python
result = await async_client.sources.with_raw_response.create_source(
    "some example string", SourceInput(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SourceBoomiDataHubSourcesApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSourceErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>body</code> | <code>[SourceInput](boomi/models/source_input.py) \| [SourceInputDict](boomi/models/source_input.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[SourceBoomiDataHubSourcesApi](boomi/models/source_boomi_data_hub_sources_api.py), [CreateSourceErrorBody](boomi/errors/create_source_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SourceBoomiDataHubSourcesApi](boomi/models/source_boomi_data_hub_sources_api.py)</code> -- The created data source.

**On `Failure`**: `error` is <code>[CreateSourceErrorBody](boomi/errors/create_source_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sources(repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RepositoriesSourcesResponse, ListSourcesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all data sources configured within a specific repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sources.with_raw_response.list_sources("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesSourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourcesErrorBody
```

**Async**

```python
result = await async_client.sources.with_raw_response.list_sources("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RepositoriesSourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourcesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>repository_id</code> | <code>str</code> | Unique identifier of the DataHub repository. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](boomi/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](boomi/core/results.py)&#91;[RepositoriesSourcesResponse](boomi/models/repositories_sources_response.py), [ListSourcesErrorBody](boomi/errors/list_sources_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RepositoriesSourcesResponse](boomi/models/repositories_sources_response.py)</code> -- A list of data sources.

**On `Failure`**: `error` is <code>[ListSourcesErrorBody](boomi/errors/list_sources_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponseBoomiDataHubGoldenRecordsApi](boomi/models/error_response_boomi_data_hub_golden_records_api.py)</code> |
| anything unmapped | <code>[RawError](boomi/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

