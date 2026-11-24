# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BoomiClient](boomi/client.py)

## Atoms

> Source: [Atoms](boomi/apis/atoms.py)

<details>
<summary><code>def delete_atom(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.atoms.delete_atom("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAtomErrorBody
```

**Async**

```python
try:
    await async_client.atoms.delete_atom("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteAtomErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[DeleteAtomErrorBody](boomi/errors/delete_atom_error.py)&#93;</code>

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
<summary><code>def get_atom(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Atom</code></summary>

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
try:
    response = client.atoms.get_atom("some example string")
    # TODO: Handle 'response' of type Atom
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAtomErrorBody
```

**Async**

```python
try:
    response = await async_client.atoms.get_atom("some example string")
    # TODO: Handle 'response' of type Atom
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAtomErrorBody
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

**OnSuccess**: <code>[Atom](boomi/models/atom.py)</code> -- The Atom object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[GetAtomErrorBody](boomi/errors/get_atom_error.py)&#93;</code>

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
<summary><code>def query_atoms(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AtomQueryResult</code></summary>

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
try:
    response = client.atoms.query_atoms(QueryRequest())
    # TODO: Handle 'response' of type AtomQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryAtomsErrorBody
```

**Async**

```python
try:
    response = await async_client.atoms.query_atoms(QueryRequest())
    # TODO: Handle 'response' of type AtomQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryAtomsErrorBody
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

**OnSuccess**: <code>[AtomQueryResult](boomi/models/atom_query_result.py)</code> -- Query results containing matching Atom objects.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[QueryAtomsErrorBody](boomi/errors/query_atoms_error.py)&#93;</code>

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
<summary><code>def update_atom(id_: str, body: AtomInput | AtomInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Atom</code></summary>

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
try:
    response = client.atoms.update_atom("some example string", AtomInput())
    # TODO: Handle 'response' of type Atom
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAtomErrorBody
```

**Async**

```python
try:
    response = await async_client.atoms.update_atom("some example string", AtomInput())
    # TODO: Handle 'response' of type Atom
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateAtomErrorBody
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

**OnSuccess**: <code>[Atom](boomi/models/atom.py)</code> -- The updated Atom object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[UpdateAtomErrorBody](boomi/errors/update_atom_error.py)&#93;</code>

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
<summary><code>def create_packaged_component(body: PackagedComponentInput | PackagedComponentInputDict, *, request_options: RequestOptionsOrDict | None = None) -> PackagedComponent</code></summary>

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
try:
    response = client.components.create_packaged_component(
        PackagedComponentInput(component_id="some example string", component_version="some example string")
    )
    # TODO: Handle 'response' of type PackagedComponent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePackagedComponentErrorBody
```

**Async**

```python
try:
    response = await async_client.components.create_packaged_component(
        PackagedComponentInput(component_id="some example string", component_version="some example string")
    )
    # TODO: Handle 'response' of type PackagedComponent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreatePackagedComponentErrorBody
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

**OnSuccess**: <code>[PackagedComponent](boomi/models/packaged_component.py)</code> -- The created packaged component.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[CreatePackagedComponentErrorBody](boomi/errors/create_packaged_component_error.py)&#93;</code>

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
<summary><code>def get_packaged_component(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> PackagedComponent</code></summary>

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
try:
    response = client.components.get_packaged_component("some example string")
    # TODO: Handle 'response' of type PackagedComponent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPackagedComponentErrorBody
```

**Async**

```python
try:
    response = await async_client.components.get_packaged_component("some example string")
    # TODO: Handle 'response' of type PackagedComponent
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPackagedComponentErrorBody
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

**OnSuccess**: <code>[PackagedComponent](boomi/models/packaged_component.py)</code> -- The packaged component object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[GetPackagedComponentErrorBody](boomi/errors/get_packaged_component_error.py)&#93;</code>

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
<summary><code>def create_deployed_package(body: DeployedPackageInput | DeployedPackageInputDict, *, request_options: RequestOptionsOrDict | None = None) -> DeployedPackage</code></summary>

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
try:
    response = client.deployments.create_deployed_package(
        DeployedPackageInput(environment_id="some example string", package_id="some example string")
    )
    # TODO: Handle 'response' of type DeployedPackage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDeployedPackageErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.create_deployed_package(
        DeployedPackageInput(environment_id="some example string", package_id="some example string")
    )
    # TODO: Handle 'response' of type DeployedPackage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDeployedPackageErrorBody
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

**OnSuccess**: <code>[DeployedPackage](boomi/models/deployed_package.py)</code> -- The deployed package record.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[CreateDeployedPackageErrorBody](boomi/errors/create_deployed_package_error.py)&#93;</code>

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
<summary><code>def delete_deployed_package(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.deployments.delete_deployed_package("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDeployedPackageErrorBody
```

**Async**

```python
try:
    await async_client.deployments.delete_deployed_package("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDeployedPackageErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[DeleteDeployedPackageErrorBody](boomi/errors/delete_deployed_package_error.py)&#93;</code>

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
<summary><code>def get_deployed_package(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> DeployedPackage</code></summary>

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
try:
    response = client.deployments.get_deployed_package("some example string")
    # TODO: Handle 'response' of type DeployedPackage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDeployedPackageErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.get_deployed_package("some example string")
    # TODO: Handle 'response' of type DeployedPackage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDeployedPackageErrorBody
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

**OnSuccess**: <code>[DeployedPackage](boomi/models/deployed_package.py)</code> -- The deployed package object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[GetDeployedPackageErrorBody](boomi/errors/get_deployed_package_error.py)&#93;</code>

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
<summary><code>def query_deployed_packages(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DeployedPackageQueryResult</code></summary>

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
try:
    response = client.deployments.query_deployed_packages(QueryRequest())
    # TODO: Handle 'response' of type DeployedPackageQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryDeployedPackagesErrorBody
```

**Async**

```python
try:
    response = await async_client.deployments.query_deployed_packages(QueryRequest())
    # TODO: Handle 'response' of type DeployedPackageQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryDeployedPackagesErrorBody
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

**OnSuccess**: <code>[DeployedPackageQueryResult](boomi/models/deployed_package_query_result.py)</code> -- Query results containing matching deployed package objects.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[QueryDeployedPackagesErrorBody](boomi/errors/query_deployed_packages_error.py)&#93;</code>

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
<summary><code>def create_environment(body: EnvironmentInput | EnvironmentInputDict, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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
try:
    response = client.environments.create_environment(
        EnvironmentInput(name="some example string", classification=Classification1.PRODUCTION)
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.create_environment(
        EnvironmentInput(name="some example string", classification=Classification1.PRODUCTION)
    )
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEnvironmentErrorBody
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

**OnSuccess**: <code>[EnvironmentModel](boomi/models/environment_model.py)</code> -- The created environment object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[CreateEnvironmentErrorBody](boomi/errors/create_environment_error.py)&#93;</code>

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
<summary><code>def delete_environment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.environments.delete_environment("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEnvironmentErrorBody
```

**Async**

```python
try:
    await async_client.environments.delete_environment("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEnvironmentErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[DeleteEnvironmentErrorBody](boomi/errors/delete_environment_error.py)&#93;</code>

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
<summary><code>def get_environment(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentModel</code></summary>

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
try:
    response = client.environments.get_environment("some example string")
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.get_environment("some example string")
    # TODO: Handle 'response' of type EnvironmentModel
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentErrorBody
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

**OnSuccess**: <code>[EnvironmentModel](boomi/models/environment_model.py)</code> -- The environment object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[GetEnvironmentErrorBody](boomi/errors/get_environment_error.py)&#93;</code>

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
<summary><code>def query_environments(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentQueryResult</code></summary>

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
try:
    response = client.environments.query_environments(QueryRequest())
    # TODO: Handle 'response' of type EnvironmentQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryEnvironmentsErrorBody
```

**Async**

```python
try:
    response = await async_client.environments.query_environments(QueryRequest())
    # TODO: Handle 'response' of type EnvironmentQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryEnvironmentsErrorBody
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

**OnSuccess**: <code>[EnvironmentQueryResult](boomi/models/environment_query_result.py)</code> -- Query results containing matching environment objects.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[QueryEnvironmentsErrorBody](boomi/errors/query_environments_error.py)&#93;</code>

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
<summary><code>def execute_process(body: ExecutionRequest | ExecutionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ExecutionRequestResult</code></summary>

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
try:
    response = client.execution.execute_process(
        ExecutionRequest(atom_id="some example string", process_id="some example string")
    )
    # TODO: Handle 'response' of type ExecutionRequestResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExecuteProcessErrorBody
```

**Async**

```python
try:
    response = await async_client.execution.execute_process(
        ExecutionRequest(atom_id="some example string", process_id="some example string")
    )
    # TODO: Handle 'response' of type ExecutionRequestResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExecuteProcessErrorBody
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

**OnSuccess**: <code>[ExecutionRequestResult](boomi/models/execution_request_result.py)</code> -- The execution request with a job ID for tracking.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[ExecuteProcessErrorBody](boomi/errors/execute_process_error.py)&#93;</code>

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
<summary><code>def query_execution_records(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ExecutionRecordQueryResult</code></summary>

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
try:
    response = client.execution.query_execution_records(QueryRequest())
    # TODO: Handle 'response' of type ExecutionRecordQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryExecutionRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.execution.query_execution_records(QueryRequest())
    # TODO: Handle 'response' of type ExecutionRecordQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryExecutionRecordsErrorBody
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

**OnSuccess**: <code>[ExecutionRecordQueryResult](boomi/models/execution_record_query_result.py)</code> -- Query results containing matching execution records.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[QueryExecutionRecordsErrorBody](boomi/errors/query_execution_records_error.py)&#93;</code>

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
<summary><code>def list_golden_records(repository_id: str, universe_id: str, *, page_size: int | None = 100, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RepositoriesUniversesRecordsResponse</code></summary>

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
try:
    response = client.golden_records.list_golden_records("some example string", "some example string")
    # TODO: Handle 'response' of type RepositoriesUniversesRecordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGoldenRecordsErrorBody
```

**Async**

```python
try:
    response = await async_client.golden_records.list_golden_records("some example string", "some example string")
    # TODO: Handle 'response' of type RepositoriesUniversesRecordsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListGoldenRecordsErrorBody
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

**OnSuccess**: <code>[RepositoriesUniversesRecordsResponse](boomi/models/repositories_universes_records_response.py)</code> -- A paginated list of golden records.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[ListGoldenRecordsErrorBody](boomi/errors/list_golden_records_error.py)&#93;</code>

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
<summary><code>def publish_messages(body: MultiMessageRequest | MultiMessageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> PublishResponse</code></summary>

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
try:
    response = client.messages.publish_messages(
        MultiMessageRequest(messages=[MessageItem(payload="some example string")])
    )
    # TODO: Handle 'response' of type PublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishMessagesErrorBody
```

**Async**

```python
try:
    response = await async_client.messages.publish_messages(
        MultiMessageRequest(messages=[MessageItem(payload="some example string")])
    )
    # TODO: Handle 'response' of type PublishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishMessagesErrorBody
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

**OnSuccess**: <code>[PublishResponse](boomi/models/publish_response.py)</code> -- Messages accepted and published successfully.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[PublishMessagesErrorBody](boomi/errors/publish_messages_error.py)&#93;</code>

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
<summary><code>def create_model(repository_id: str, body: ModelInput | ModelInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Model</code></summary>

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
try:
    response = client.models_api.create_model("some example string", ModelInput(name="some example string"))
    # TODO: Handle 'response' of type Model
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateModelErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.create_model("some example string", ModelInput(name="some example string"))
    # TODO: Handle 'response' of type Model
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateModelErrorBody
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

**OnSuccess**: <code>[Model](boomi/models/model.py)</code> -- The created data model.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[CreateModelErrorBody](boomi/errors/create_model_error.py)&#93;</code>

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
<summary><code>def delete_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.models_api.delete_model("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteModelErrorBody
```

**Async**

```python
try:
    await async_client.models_api.delete_model("some example string", "some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteModelErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[DeleteModelErrorBody](boomi/errors/delete_model_error.py)&#93;</code>

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
<summary><code>def get_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Model</code></summary>

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
try:
    response = client.models_api.get_model("some example string", "some example string")
    # TODO: Handle 'response' of type Model
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetModelErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.get_model("some example string", "some example string")
    # TODO: Handle 'response' of type Model
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetModelErrorBody
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

**OnSuccess**: <code>[Model](boomi/models/model.py)</code> -- The data model details.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[GetModelErrorBody](boomi/errors/get_model_error.py)&#93;</code>

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
<summary><code>def list_models(repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> RepositoriesModelsResponse</code></summary>

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
try:
    response = client.models_api.list_models("some example string")
    # TODO: Handle 'response' of type RepositoriesModelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListModelsErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.list_models("some example string")
    # TODO: Handle 'response' of type RepositoriesModelsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListModelsErrorBody
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

**OnSuccess**: <code>[RepositoriesModelsResponse](boomi/models/repositories_models_response.py)</code> -- A list of data models.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[ListModelsErrorBody](boomi/errors/list_models_error.py)&#93;</code>

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
<summary><code>def publish_model(repository_id: str, model_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Model</code></summary>

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
try:
    response = client.models_api.publish_model("some example string", "some example string")
    # TODO: Handle 'response' of type Model
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishModelErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.publish_model("some example string", "some example string")
    # TODO: Handle 'response' of type Model
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishModelErrorBody
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

**OnSuccess**: <code>[Model](boomi/models/model.py)</code> -- The published model.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[PublishModelErrorBody](boomi/errors/publish_model_error.py)&#93;</code>

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
<summary><code>def create_process(body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Process</code></summary>

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
try:
    response = client.processes.create_process(ProcessInput())
    # TODO: Handle 'response' of type Process
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProcessErrorBody
```

**Async**

```python
try:
    response = await async_client.processes.create_process(ProcessInput())
    # TODO: Handle 'response' of type Process
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProcessErrorBody
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

**OnSuccess**: <code>[Process](boomi/models/process.py)</code> -- The created process object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[CreateProcessErrorBody](boomi/errors/create_process_error.py)&#93;</code>

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
<summary><code>def delete_process(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.processes.delete_process("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProcessErrorBody
```

**Async**

```python
try:
    await async_client.processes.delete_process("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProcessErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[DeleteProcessErrorBody](boomi/errors/delete_process_error.py)&#93;</code>

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
<summary><code>def get_process(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Process</code></summary>

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
try:
    response = client.processes.get_process("some example string")
    # TODO: Handle 'response' of type Process
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProcessErrorBody
```

**Async**

```python
try:
    response = await async_client.processes.get_process("some example string")
    # TODO: Handle 'response' of type Process
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProcessErrorBody
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

**OnSuccess**: <code>[Process](boomi/models/process.py)</code> -- The process object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[GetProcessErrorBody](boomi/errors/get_process_error.py)&#93;</code>

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
<summary><code>def get_process_schedules(id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ProcessSchedules</code></summary>

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
try:
    response = client.processes.get_process_schedules("some example string")
    # TODO: Handle 'response' of type ProcessSchedules
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProcessSchedulesErrorBody
```

**Async**

```python
try:
    response = await async_client.processes.get_process_schedules("some example string")
    # TODO: Handle 'response' of type ProcessSchedules
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProcessSchedulesErrorBody
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

**OnSuccess**: <code>[ProcessSchedules](boomi/models/process_schedules.py)</code> -- The process schedule configuration.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[GetProcessSchedulesErrorBody](boomi/errors/get_process_schedules_error.py)&#93;</code>

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
<summary><code>def query_processes(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ProcessQueryResult</code></summary>

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
try:
    response = client.processes.query_processes(QueryRequest())
    # TODO: Handle 'response' of type ProcessQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryProcessesErrorBody
```

**Async**

```python
try:
    response = await async_client.processes.query_processes(QueryRequest())
    # TODO: Handle 'response' of type ProcessQueryResult
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueryProcessesErrorBody
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

**OnSuccess**: <code>[ProcessQueryResult](boomi/models/process_query_result.py)</code> -- Query results containing matching process objects.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[QueryProcessesErrorBody](boomi/errors/query_processes_error.py)&#93;</code>

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
<summary><code>def update_process(id_: str, body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Process</code></summary>

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
try:
    response = client.processes.update_process("some example string", ProcessInput())
    # TODO: Handle 'response' of type Process
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProcessErrorBody
```

**Async**

```python
try:
    response = await async_client.processes.update_process("some example string", ProcessInput())
    # TODO: Handle 'response' of type Process
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProcessErrorBody
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

**OnSuccess**: <code>[Process](boomi/models/process.py)</code> -- The updated process object.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[UpdateProcessErrorBody](boomi/errors/update_process_error.py)&#93;</code>

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
<summary><code>def update_process_schedules(id_: str, body: ProcessSchedules | ProcessSchedulesDict, *, request_options: RequestOptionsOrDict | None = None) -> ProcessSchedules</code></summary>

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
try:
    response = client.processes.update_process_schedules("some example string", ProcessSchedules())
    # TODO: Handle 'response' of type ProcessSchedules
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProcessSchedulesErrorBody
```

**Async**

```python
try:
    response = await async_client.processes.update_process_schedules("some example string", ProcessSchedules())
    # TODO: Handle 'response' of type ProcessSchedules
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProcessSchedulesErrorBody
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

**OnSuccess**: <code>[ProcessSchedules](boomi/models/process_schedules.py)</code> -- The updated process schedule configuration.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[UpdateProcessSchedulesErrorBody](boomi/errors/update_process_schedules_error.py)&#93;</code>

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
<summary><code>def list_quarantine_entries(repository_id: str, universe_id: str, *, request_options: RequestOptionsOrDict | None = None) -> RepositoriesUniversesQuarantineResponse</code></summary>

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
try:
    response = client.quarantine.list_quarantine_entries("some example string", "some example string")
    # TODO: Handle 'response' of type RepositoriesUniversesQuarantineResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQuarantineEntriesErrorBody
```

**Async**

```python
try:
    response = await async_client.quarantine.list_quarantine_entries("some example string", "some example string")
    # TODO: Handle 'response' of type RepositoriesUniversesQuarantineResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQuarantineEntriesErrorBody
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

**OnSuccess**: <code>[RepositoriesUniversesQuarantineResponse](boomi/models/repositories_universes_quarantine_response.py)</code> -- A list of quarantined records.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[ListQuarantineEntriesErrorBody](boomi/errors/list_quarantine_entries_error.py)&#93;</code>

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
<summary><code>def create_repository(body: RepositoryInput | RepositoryInputDict, *, request_options: RequestOptionsOrDict | None = None) -> Repository</code></summary>

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
try:
    response = client.repositories.create_repository(RepositoryInput(name="some example string"))
    # TODO: Handle 'response' of type Repository
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.create_repository(RepositoryInput(name="some example string"))
    # TODO: Handle 'response' of type Repository
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRepositoryErrorBody
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

**OnSuccess**: <code>[Repository](boomi/models/repository.py)</code> -- The created repository.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[CreateRepositoryErrorBody](boomi/errors/create_repository_error.py)&#93;</code>

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
<summary><code>def delete_repository(repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.repositories.delete_repository("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryErrorBody
```

**Async**

```python
try:
    await async_client.repositories.delete_repository("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteRepositoryErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[DeleteRepositoryErrorBody](boomi/errors/delete_repository_error.py)&#93;</code>

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
<summary><code>def get_repository(repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Repository</code></summary>

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
try:
    response = client.repositories.get_repository("some example string")
    # TODO: Handle 'response' of type Repository
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.get_repository("some example string")
    # TODO: Handle 'response' of type Repository
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRepositoryErrorBody
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

**OnSuccess**: <code>[Repository](boomi/models/repository.py)</code> -- The repository details.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[GetRepositoryErrorBody](boomi/errors/get_repository_error.py)&#93;</code>

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
<summary><code>def list_repositories(*, request_options: RequestOptionsOrDict | None = None) -> RepositoriesResponse</code></summary>

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
try:
    response = client.repositories.list_repositories()
    # TODO: Handle 'response' of type RepositoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRepositoriesErrorBody
```

**Async**

```python
try:
    response = await async_client.repositories.list_repositories()
    # TODO: Handle 'response' of type RepositoriesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRepositoriesErrorBody
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

**OnSuccess**: <code>[RepositoriesResponse](boomi/models/repositories_response.py)</code> -- A list of DataHub repositories.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[ListRepositoriesErrorBody](boomi/errors/list_repositories_error.py)&#93;</code>

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
<summary><code>def create_source(repository_id: str, body: SourceInput | SourceInputDict, *, request_options: RequestOptionsOrDict | None = None) -> SourceBoomiDataHubSourcesApi</code></summary>

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
try:
    response = client.sources.create_source("some example string", SourceInput(name="some example string"))
    # TODO: Handle 'response' of type SourceBoomiDataHubSourcesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSourceErrorBody
```

**Async**

```python
try:
    response = await async_client.sources.create_source("some example string", SourceInput(name="some example string"))
    # TODO: Handle 'response' of type SourceBoomiDataHubSourcesApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSourceErrorBody
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

**OnSuccess**: <code>[SourceBoomiDataHubSourcesApi](boomi/models/source_boomi_data_hub_sources_api.py)</code> -- The created data source.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[CreateSourceErrorBody](boomi/errors/create_source_error.py)&#93;</code>

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
<summary><code>def list_sources(repository_id: str, *, request_options: RequestOptionsOrDict | None = None) -> RepositoriesSourcesResponse</code></summary>

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
try:
    response = client.sources.list_sources("some example string")
    # TODO: Handle 'response' of type RepositoriesSourcesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSourcesErrorBody
```

**Async**

```python
try:
    response = await async_client.sources.list_sources("some example string")
    # TODO: Handle 'response' of type RepositoriesSourcesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSourcesErrorBody
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

**OnSuccess**: <code>[RepositoriesSourcesResponse](boomi/models/repositories_sources_response.py)</code> -- A list of data sources.

**OnError**: <code>[ApiError](boomi/core/exceptions.py)&#91;[ListSourcesErrorBody](boomi/errors/list_sources_error.py)&#93;</code>

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

