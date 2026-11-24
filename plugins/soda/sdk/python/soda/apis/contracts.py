from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_v1_contracts_actions_create_skeleton_operation_id_error import (
    GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody,
    get_api_v1_contracts_actions_create_skeleton_operation_id_error_mapper,
)
from ..errors.get_api_v1_contracts_actions_generate_operation_id_error import (
    GetApiV1ContractsActionsGenerateOperationIdErrorBody,
    get_api_v1_contracts_actions_generate_operation_id_error_mapper,
)
from ..errors.get_api_v1_contracts_contract_id_error import (
    GetApiV1ContractsContractIdErrorBody,
    get_api_v1_contracts_contract_id_error_mapper,
)
from ..errors.get_api_v1_contracts_contract_id_versions_error import (
    GetApiV1ContractsContractIdVersionsErrorBody,
    get_api_v1_contracts_contract_id_versions_error_mapper,
)
from ..errors.get_api_v1_contracts_error import GetApiV1ContractsErrorBody, get_api_v1_contracts_error_mapper
from ..errors.post_api_v1_contracts_actions_create_skeleton_error import (
    PostApiV1ContractsActionsCreateSkeletonErrorBody,
    post_api_v1_contracts_actions_create_skeleton_error_mapper,
)
from ..errors.post_api_v1_contracts_actions_generate_error import (
    PostApiV1ContractsActionsGenerateErrorBody,
    post_api_v1_contracts_actions_generate_error_mapper,
)
from ..errors.post_api_v1_contracts_contract_id_error import (
    PostApiV1ContractsContractIdErrorBody,
    post_api_v1_contracts_contract_id_error_mapper,
)
from ..errors.post_api_v1_contracts_contract_id_verify_error import (
    PostApiV1ContractsContractIdVerifyErrorBody,
    post_api_v1_contracts_contract_id_verify_error_mapper,
)
from ..errors.post_api_v1_contracts_error import PostApiV1ContractsErrorBody, post_api_v1_contracts_error_mapper
from ..models.public_api_create_contract_request_dto import (
    PublicApiCreateContractRequestDto,
    PublicApiCreateContractRequestDtoDict,
)
from ..models.public_api_create_skeleton_contract_request_dto import (
    PublicApiCreateSkeletonContractRequestDto,
    PublicApiCreateSkeletonContractRequestDtoDict,
)
from ..models.public_api_create_skeleton_contract_status_response import PublicApiCreateSkeletonContractStatusResponse
from ..models.public_api_generate_contract_request_dto import (
    PublicApiGenerateContractRequestDto,
    PublicApiGenerateContractRequestDtoDict,
)
from ..models.public_api_generate_contract_status_response import PublicApiGenerateContractStatusResponse
from ..models.public_api_get_contract_response import PublicApiGetContractResponse
from ..models.public_api_list_contract_versions_response import PublicApiListContractVersionsResponse
from ..models.public_api_list_contracts_response import PublicApiListContractsResponse
from ..models.public_api_publish_contract_request_dto import (
    PublicApiPublishContractRequestDto,
    PublicApiPublishContractRequestDtoDict,
)
from ..models.public_api_verify_contract_request_dto import (
    PublicApiVerifyContractRequestDto,
    PublicApiVerifyContractRequestDtoDict,
)
from ..server.server import Server


class Contracts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ContractsWithRawResponse(client, server, auth)

    def get_api_v1_contracts(
        self,
        *,
        dataset_id: str | None = None,
        dataset_qualified_name: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListContractsResponse:
        """This endpoint allows you to list contracts in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasetId``: Optionally, use this parameter to list only the contracts for a specific dataset.

        - ``datasetQualifiedName``: Optionally, use this parameter instead of ``datasetId`` to identify the dataset by
            its qualified name. Do not supply both ``datasetId`` and ``datasetQualifiedName``.

        ## Authorization

        When filtering by dataset, only users with **View dataset** permission on the specified dataset can list its
        contracts. When no dataset filter is supplied, all contracts in the organization are returned.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            dataset_qualified_name: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_contracts(
                dataset_id=dataset_id,
                dataset_qualified_name=dataset_qualified_name,
                page=page,
                size=size,
                request_options=request_options,
            ),
        )

    def get_api_v1_contracts_actions_create_skeleton_operation_id(
        self, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiCreateSkeletonContractStatusResponse:
        """Returns the status of a skeleton contract generation operation that was triggered via the **Generate skeleton
        contract** endpoint.

        The ``operationId`` is the last path segment of the ``Location`` header returned by the **Generate skeleton
        contract** response.

        The response includes the operation state, dataset information, and creation timestamp.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_contracts_actions_create_skeleton_operation_id(
                operation_id, request_options=request_options
            ),
        )

    def get_api_v1_contracts_actions_generate_operation_id(
        self, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiGenerateContractStatusResponse:
        """Returns the status of a contract generation operation that was triggered via the **Generate contracts**
        endpoint.

        The ``operationId`` is the last path segment of the ``Location`` header returned by the **Generate contracts**
        response.

        While the operation is ongoing, only the operation state is returned (``datasets`` will be ``null``). Once the
        operation reaches a terminal state (completed, failed, or canceled), the full per-dataset scan details are
        included.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_contracts_actions_generate_operation_id(
                operation_id, request_options=request_options
            ),
        )

    def get_api_v1_contracts_contract_id(
        self, contract_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiGetContractResponse:
        """This endpoint allows you to retrieve a specific contract, including its YAML content.

        ## Authorization

        Only users with **View dataset** permission can view contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_contracts_contract_id(contract_id, request_options=request_options)
        )

    def get_api_v1_contracts_contract_id_versions(
        self,
        contract_id: str,
        *,
        created_before: RFC3339DateTime | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListContractVersionsResponse:
        """This endpoint allows you to list versions of a specific contract.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``createdBefore``: Optionally, supply a UTC datetime value (ISO 8601, e.g. ``2024-01-15T10:30:00``) to only
            return versions created strictly before this timestamp. Use this for consistent pagination.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            created_before: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_contracts_contract_id_versions(
                contract_id, created_before=created_before, page=page, size=size, request_options=request_options
            ),
        )

    def post_api_v1_contracts(
        self,
        body: PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiGetContractResponse:
        """This endpoint allows you to create a new contract on a dataset. The contract is initialized with a template
        containing the dataset identifier and an empty columns list. Use the publish endpoint to replace this with your
        full contract YAML.

        Provide either ``datasetId`` or ``datasetQualifiedName`` in the request body to identify the target dataset.
        Exactly one must be supplied. If both are supplied, the request is rejected with a 400 error.

        ## Authorization

        Only users with **Manage contracts** permission can create contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_contracts(body, request_options=request_options))

    def post_api_v1_contracts_actions_create_skeleton(
        self,
        body: PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Triggers skeleton contract generation for a single dataset based on its schema.

        The dataset must be connected to a Soda Runner and must not already have a published contract.

        Provide either ``datasetId`` (UUID) or ``datasetQualifiedName`` (e.g. ``my_datasource/my_schema/my_table``).
        Exactly one must be supplied.

        Returns ``202 Accepted`` with a ``Location`` header pointing to the status endpoint. Use the status endpoint to
        monitor the progress of the skeleton generation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_contracts_actions_create_skeleton(body, request_options=request_options)
        )

    def post_api_v1_contracts_actions_generate(
        self,
        body: PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Triggers AI-powered contract generation for one or more datasets. The contract generation runs
        asynchronously.

        Each dataset must be connected to a Soda Runner and must not already have a contract. If any dataset is not
        eligible, the request is rejected with a ``400`` response listing the ineligible datasets and reasons.

        Provide ``datasetIds`` (list of UUIDs) and/or ``datasetQualifiedNames`` (list of qualified names, e.g.
        ``my_datasource/my_schema/my_table``). Both lists are additive. At least one must be non-empty.

        Returns ``202 Accepted`` with a ``Location`` header pointing to the status endpoint. Use the status endpoint to
        monitor the progress of the contract generation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_contracts_actions_generate(body, request_options=request_options)
        )

    def post_api_v1_contracts_contract_id(
        self,
        contract_id: str,
        body: PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiGetContractResponse:
        """This endpoint allows you to publish new YAML content for an existing contract.

        The ``contents`` field must contain valid Soda contract YAML. If the YAML is malformed or does not conform to
        the contract schema, the request is rejected with a 400 error.

        The ``dataset`` in the YAML must name the dataset that ``contractId`` belongs to. Contents naming a different
        dataset are rejected with a 400 error.

        ## Authorization

        Only users with **Manage contracts** permission can publish contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_contracts_contract_id(
                contract_id, body, request_options=request_options
            ),
        )

    def post_api_v1_contracts_contract_id_verify(
        self,
        contract_id: str,
        body: PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint triggers a contract verification scan for the specified contract.

        The response, when successful, is ``201`` and contains headers ``Location`` and ``X-Soda-Scan-Id`` which
        identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get scan
        status**, **Get scan logs**, and **Cancel a scan** endpoints.

        Optionally, you can provide ``checkPaths`` to limit verification to specific checks within the contract. Note:
        ``checkPaths`` may not be available for all organizations.

        ## Authorization

        Only users with **Manage contracts** permission can verify contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_contracts_contract_id_verify(
                contract_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ContractsWithRawResponse:
        return self._with_raw_response


class AsyncContracts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncContractsWithRawResponse(client, server, auth)

    async def get_api_v1_contracts(
        self,
        *,
        dataset_id: str | None = None,
        dataset_qualified_name: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListContractsResponse:
        """This endpoint allows you to list contracts in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasetId``: Optionally, use this parameter to list only the contracts for a specific dataset.

        - ``datasetQualifiedName``: Optionally, use this parameter instead of ``datasetId`` to identify the dataset by
            its qualified name. Do not supply both ``datasetId`` and ``datasetQualifiedName``.

        ## Authorization

        When filtering by dataset, only users with **View dataset** permission on the specified dataset can list its
        contracts. When no dataset filter is supplied, all contracts in the organization are returned.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            dataset_qualified_name: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_contracts(
                dataset_id=dataset_id,
                dataset_qualified_name=dataset_qualified_name,
                page=page,
                size=size,
                request_options=request_options,
            ),
        )

    async def get_api_v1_contracts_actions_create_skeleton_operation_id(
        self, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiCreateSkeletonContractStatusResponse:
        """Returns the status of a skeleton contract generation operation that was triggered via the **Generate skeleton
        contract** endpoint.

        The ``operationId`` is the last path segment of the ``Location`` header returned by the **Generate skeleton
        contract** response.

        The response includes the operation state, dataset information, and creation timestamp.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_contracts_actions_create_skeleton_operation_id(
                operation_id, request_options=request_options
            ),
        )

    async def get_api_v1_contracts_actions_generate_operation_id(
        self, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiGenerateContractStatusResponse:
        """Returns the status of a contract generation operation that was triggered via the **Generate contracts**
        endpoint.

        The ``operationId`` is the last path segment of the ``Location`` header returned by the **Generate contracts**
        response.

        While the operation is ongoing, only the operation state is returned (``datasets`` will be ``null``). Once the
        operation reaches a terminal state (completed, failed, or canceled), the full per-dataset scan details are
        included.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_contracts_actions_generate_operation_id(
                operation_id, request_options=request_options
            ),
        )

    async def get_api_v1_contracts_contract_id(
        self, contract_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiGetContractResponse:
        """This endpoint allows you to retrieve a specific contract, including its YAML content.

        ## Authorization

        Only users with **View dataset** permission can view contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_contracts_contract_id(contract_id, request_options=request_options)
        )

    async def get_api_v1_contracts_contract_id_versions(
        self,
        contract_id: str,
        *,
        created_before: RFC3339DateTime | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListContractVersionsResponse:
        """This endpoint allows you to list versions of a specific contract.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``createdBefore``: Optionally, supply a UTC datetime value (ISO 8601, e.g. ``2024-01-15T10:30:00``) to only
            return versions created strictly before this timestamp. Use this for consistent pagination.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            created_before: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_contracts_contract_id_versions(
                contract_id, created_before=created_before, page=page, size=size, request_options=request_options
            ),
        )

    async def post_api_v1_contracts(
        self,
        body: PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiGetContractResponse:
        """This endpoint allows you to create a new contract on a dataset. The contract is initialized with a template
        containing the dataset identifier and an empty columns list. Use the publish endpoint to replace this with your
        full contract YAML.

        Provide either ``datasetId`` or ``datasetQualifiedName`` in the request body to identify the target dataset.
        Exactly one must be supplied. If both are supplied, the request is rejected with a 400 error.

        ## Authorization

        Only users with **Manage contracts** permission can create contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_contracts(body, request_options=request_options))

    async def post_api_v1_contracts_actions_create_skeleton(
        self,
        body: PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Triggers skeleton contract generation for a single dataset based on its schema.

        The dataset must be connected to a Soda Runner and must not already have a published contract.

        Provide either ``datasetId`` (UUID) or ``datasetQualifiedName`` (e.g. ``my_datasource/my_schema/my_table``).
        Exactly one must be supplied.

        Returns ``202 Accepted`` with a ``Location`` header pointing to the status endpoint. Use the status endpoint to
        monitor the progress of the skeleton generation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_contracts_actions_create_skeleton(
                body, request_options=request_options
            ),
        )

    async def post_api_v1_contracts_actions_generate(
        self,
        body: PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Triggers AI-powered contract generation for one or more datasets. The contract generation runs
        asynchronously.

        Each dataset must be connected to a Soda Runner and must not already have a contract. If any dataset is not
        eligible, the request is rejected with a ``400`` response listing the ineligible datasets and reasons.

        Provide ``datasetIds`` (list of UUIDs) and/or ``datasetQualifiedNames`` (list of qualified names, e.g.
        ``my_datasource/my_schema/my_table``). Both lists are additive. At least one must be non-empty.

        Returns ``202 Accepted`` with a ``Location`` header pointing to the status endpoint. Use the status endpoint to
        monitor the progress of the contract generation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_contracts_actions_generate(body, request_options=request_options)
        )

    async def post_api_v1_contracts_contract_id(
        self,
        contract_id: str,
        body: PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiGetContractResponse:
        """This endpoint allows you to publish new YAML content for an existing contract.

        The ``contents`` field must contain valid Soda contract YAML. If the YAML is malformed or does not conform to
        the contract schema, the request is rejected with a 400 error.

        The ``dataset`` in the YAML must name the dataset that ``contractId`` belongs to. Contents naming a different
        dataset are rejected with a 400 error.

        ## Authorization

        Only users with **Manage contracts** permission can publish contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_contracts_contract_id(
                contract_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_contracts_contract_id_verify(
        self,
        contract_id: str,
        body: PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint triggers a contract verification scan for the specified contract.

        The response, when successful, is ``201`` and contains headers ``Location`` and ``X-Soda-Scan-Id`` which
        identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get scan
        status**, **Get scan logs**, and **Cancel a scan** endpoints.

        Optionally, you can provide ``checkPaths`` to limit verification to specific checks within the contract. Note:
        ``checkPaths`` may not be available for all organizations.

        ## Authorization

        Only users with **Manage contracts** permission can verify contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_contracts_contract_id_verify(
                contract_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncContractsWithRawResponse:
        return self._with_raw_response


class ContractsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_contracts(
        self,
        *,
        dataset_id: str | None = None,
        dataset_qualified_name: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListContractsResponse, GetApiV1ContractsErrorBody]:
        """This endpoint allows you to list contracts in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasetId``: Optionally, use this parameter to list only the contracts for a specific dataset.

        - ``datasetQualifiedName``: Optionally, use this parameter instead of ``datasetId`` to identify the dataset by
            its qualified name. Do not supply both ``datasetId`` and ``datasetQualifiedName``.

        ## Authorization

        When filtering by dataset, only users with **View dataset** permission on the specified dataset can list its
        contracts. When no dataset filter is supplied, all contracts in the organization are returned.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            dataset_qualified_name: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts"),
            query_params=[
                param[str | None]("datasetId", dataset_id),
                param[str | None]("datasetQualifiedName", dataset_qualified_name),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListContractsResponse],
            error_mapper=get_api_v1_contracts_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_contracts_actions_create_skeleton_operation_id(
        self, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiCreateSkeletonContractStatusResponse, GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody
    ]:
        """Returns the status of a skeleton contract generation operation that was triggered via the **Generate skeleton
        contract** endpoint.

        The ``operationId`` is the last path segment of the ``Location`` header returned by the **Generate skeleton
        contract** response.

        The response includes the operation state, dataset information, and creation timestamp.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts/actions/createSkeleton/{operationId}"),
            path_params=[param[str]("operationId", operation_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiCreateSkeletonContractStatusResponse],
            error_mapper=get_api_v1_contracts_actions_create_skeleton_operation_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_contracts_actions_generate_operation_id(
        self, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGenerateContractStatusResponse, GetApiV1ContractsActionsGenerateOperationIdErrorBody]:
        """Returns the status of a contract generation operation that was triggered via the **Generate contracts**
        endpoint.

        The ``operationId`` is the last path segment of the ``Location`` header returned by the **Generate contracts**
        response.

        While the operation is ongoing, only the operation state is returned (``datasets`` will be ``null``). Once the
        operation reaches a terminal state (completed, failed, or canceled), the full per-dataset scan details are
        included.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts/actions/generate/{operationId}"),
            path_params=[param[str]("operationId", operation_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiGenerateContractStatusResponse],
            error_mapper=get_api_v1_contracts_actions_generate_operation_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_contracts_contract_id(
        self, contract_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetContractResponse, GetApiV1ContractsContractIdErrorBody]:
        """This endpoint allows you to retrieve a specific contract, including its YAML content.

        ## Authorization

        Only users with **View dataset** permission can view contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts/{contractId}"),
            path_params=[param[str]("contractId", contract_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiGetContractResponse],
            error_mapper=get_api_v1_contracts_contract_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_contracts_contract_id_versions(
        self,
        contract_id: str,
        *,
        created_before: RFC3339DateTime | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListContractVersionsResponse, GetApiV1ContractsContractIdVersionsErrorBody]:
        """This endpoint allows you to list versions of a specific contract.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``createdBefore``: Optionally, supply a UTC datetime value (ISO 8601, e.g. ``2024-01-15T10:30:00``) to only
            return versions created strictly before this timestamp. Use this for consistent pagination.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            created_before: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts/{contractId}/versions"),
            path_params=[param[str]("contractId", contract_id)],
            query_params=[
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListContractVersionsResponse],
            error_mapper=get_api_v1_contracts_contract_id_versions_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_contracts(
        self,
        body: PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiGetContractResponse, PostApiV1ContractsErrorBody]:
        """This endpoint allows you to create a new contract on a dataset. The contract is initialized with a template
        containing the dataset identifier and an empty columns list. Use the publish endpoint to replace this with your
        full contract YAML.

        Provide either ``datasetId`` or ``datasetQualifiedName`` in the request body to identify the target dataset.
        Exactly one must be supplied. If both are supplied, the request is rejected with a 400 error.

        ## Authorization

        Only users with **Manage contracts** permission can create contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiGetContractResponse],
            error_mapper=post_api_v1_contracts_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_contracts_actions_create_skeleton(
        self,
        body: PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1ContractsActionsCreateSkeletonErrorBody]:
        """Triggers skeleton contract generation for a single dataset based on its schema.

        The dataset must be connected to a Soda Runner and must not already have a published contract.

        Provide either ``datasetId`` (UUID) or ``datasetQualifiedName`` (e.g. ``my_datasource/my_schema/my_table``).
        Exactly one must be supplied.

        Returns ``202 Accepted`` with a ``Location`` header pointing to the status endpoint. Use the status endpoint to
        monitor the progress of the skeleton generation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts/actions/createSkeleton"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_contracts_actions_create_skeleton_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_contracts_actions_generate(
        self,
        body: PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1ContractsActionsGenerateErrorBody]:
        """Triggers AI-powered contract generation for one or more datasets. The contract generation runs
        asynchronously.

        Each dataset must be connected to a Soda Runner and must not already have a contract. If any dataset is not
        eligible, the request is rejected with a ``400`` response listing the ineligible datasets and reasons.

        Provide ``datasetIds`` (list of UUIDs) and/or ``datasetQualifiedNames`` (list of qualified names, e.g.
        ``my_datasource/my_schema/my_table``). Both lists are additive. At least one must be non-empty.

        Returns ``202 Accepted`` with a ``Location`` header pointing to the status endpoint. Use the status endpoint to
        monitor the progress of the contract generation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts/actions/generate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_contracts_actions_generate_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_contracts_contract_id(
        self,
        contract_id: str,
        body: PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiGetContractResponse, PostApiV1ContractsContractIdErrorBody]:
        """This endpoint allows you to publish new YAML content for an existing contract.

        The ``contents`` field must contain valid Soda contract YAML. If the YAML is malformed or does not conform to
        the contract schema, the request is rejected with a 400 error.

        The ``dataset`` in the YAML must name the dataset that ``contractId`` belongs to. Contents naming a different
        dataset are rejected with a 400 error.

        ## Authorization

        Only users with **Manage contracts** permission can publish contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts/{contractId}"),
            path_params=[param[str]("contractId", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiGetContractResponse],
            error_mapper=post_api_v1_contracts_contract_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_contracts_contract_id_verify(
        self,
        contract_id: str,
        body: PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1ContractsContractIdVerifyErrorBody]:
        """This endpoint triggers a contract verification scan for the specified contract.

        The response, when successful, is ``201`` and contains headers ``Location`` and ``X-Soda-Scan-Id`` which
        identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get scan
        status**, **Get scan logs**, and **Cancel a scan** endpoints.

        Optionally, you can provide ``checkPaths`` to limit verification to specific checks within the contract. Note:
        ``checkPaths`` may not be available for all organizations.

        ## Authorization

        Only users with **Manage contracts** permission can verify contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts/{contractId}/verify"),
            path_params=[param[str]("contractId", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_contracts_contract_id_verify_error_mapper,
            request_options=request_options,
        )


class AsyncContractsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_contracts(
        self,
        *,
        dataset_id: str | None = None,
        dataset_qualified_name: str | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListContractsResponse, GetApiV1ContractsErrorBody]:
        """This endpoint allows you to list contracts in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``datasetId``: Optionally, use this parameter to list only the contracts for a specific dataset.

        - ``datasetQualifiedName``: Optionally, use this parameter instead of ``datasetId`` to identify the dataset by
            its qualified name. Do not supply both ``datasetId`` and ``datasetQualifiedName``.

        ## Authorization

        When filtering by dataset, only users with **View dataset** permission on the specified dataset can list its
        contracts. When no dataset filter is supplied, all contracts in the organization are returned.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            dataset_qualified_name: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts"),
            query_params=[
                param[str | None]("datasetId", dataset_id),
                param[str | None]("datasetQualifiedName", dataset_qualified_name),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListContractsResponse],
            error_mapper=get_api_v1_contracts_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_contracts_actions_create_skeleton_operation_id(
        self, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiCreateSkeletonContractStatusResponse, GetApiV1ContractsActionsCreateSkeletonOperationIdErrorBody
    ]:
        """Returns the status of a skeleton contract generation operation that was triggered via the **Generate skeleton
        contract** endpoint.

        The ``operationId`` is the last path segment of the ``Location`` header returned by the **Generate skeleton
        contract** response.

        The response includes the operation state, dataset information, and creation timestamp.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts/actions/createSkeleton/{operationId}"),
            path_params=[param[str]("operationId", operation_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiCreateSkeletonContractStatusResponse],
            error_mapper=get_api_v1_contracts_actions_create_skeleton_operation_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_contracts_actions_generate_operation_id(
        self, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGenerateContractStatusResponse, GetApiV1ContractsActionsGenerateOperationIdErrorBody]:
        """Returns the status of a contract generation operation that was triggered via the **Generate contracts**
        endpoint.

        The ``operationId`` is the last path segment of the ``Location`` header returned by the **Generate contracts**
        response.

        While the operation is ongoing, only the operation state is returned (``datasets`` will be ``null``). Once the
        operation reaches a terminal state (completed, failed, or canceled), the full per-dataset scan details are
        included.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts/actions/generate/{operationId}"),
            path_params=[param[str]("operationId", operation_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiGenerateContractStatusResponse],
            error_mapper=get_api_v1_contracts_actions_generate_operation_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_contracts_contract_id(
        self, contract_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetContractResponse, GetApiV1ContractsContractIdErrorBody]:
        """This endpoint allows you to retrieve a specific contract, including its YAML content.

        ## Authorization

        Only users with **View dataset** permission can view contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts/{contractId}"),
            path_params=[param[str]("contractId", contract_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiGetContractResponse],
            error_mapper=get_api_v1_contracts_contract_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_contracts_contract_id_versions(
        self,
        contract_id: str,
        *,
        created_before: RFC3339DateTime | None = None,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListContractVersionsResponse, GetApiV1ContractsContractIdVersionsErrorBody]:
        """This endpoint allows you to list versions of a specific contract.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``createdBefore``: Optionally, supply a UTC datetime value (ISO 8601, e.g. ``2024-01-15T10:30:00``) to only
            return versions created strictly before this timestamp. Use this for consistent pagination.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            created_before: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/contracts/{contractId}/versions"),
            path_params=[param[str]("contractId", contract_id)],
            query_params=[
                param[RFC3339DateTime | None]("createdBefore", created_before),
                param[int | None]("page", page),
                param[int | None]("size", size),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListContractVersionsResponse],
            error_mapper=get_api_v1_contracts_contract_id_versions_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_contracts(
        self,
        body: PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiGetContractResponse, PostApiV1ContractsErrorBody]:
        """This endpoint allows you to create a new contract on a dataset. The contract is initialized with a template
        containing the dataset identifier and an empty columns list. Use the publish endpoint to replace this with your
        full contract YAML.

        Provide either ``datasetId`` or ``datasetQualifiedName`` in the request body to identify the target dataset.
        Exactly one must be supplied. If both are supplied, the request is rejected with a 400 error.

        ## Authorization

        Only users with **Manage contracts** permission can create contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateContractRequestDto | PublicApiCreateContractRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiGetContractResponse],
            error_mapper=post_api_v1_contracts_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_contracts_actions_create_skeleton(
        self,
        body: PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1ContractsActionsCreateSkeletonErrorBody]:
        """Triggers skeleton contract generation for a single dataset based on its schema.

        The dataset must be connected to a Soda Runner and must not already have a published contract.

        Provide either ``datasetId`` (UUID) or ``datasetQualifiedName`` (e.g. ``my_datasource/my_schema/my_table``).
        Exactly one must be supplied.

        Returns ``202 Accepted`` with a ``Location`` header pointing to the status endpoint. Use the status endpoint to
        monitor the progress of the skeleton generation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts/actions/createSkeleton"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateSkeletonContractRequestDto | PublicApiCreateSkeletonContractRequestDtoDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_contracts_actions_create_skeleton_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_contracts_actions_generate(
        self,
        body: PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1ContractsActionsGenerateErrorBody]:
        """Triggers AI-powered contract generation for one or more datasets. The contract generation runs
        asynchronously.

        Each dataset must be connected to a Soda Runner and must not already have a contract. If any dataset is not
        eligible, the request is rejected with a ``400`` response listing the ineligible datasets and reasons.

        Provide ``datasetIds`` (list of UUIDs) and/or ``datasetQualifiedNames`` (list of qualified names, e.g.
        ``my_datasource/my_schema/my_table``). Both lists are additive. At least one must be non-empty.

        Returns ``202 Accepted`` with a ``Location`` header pointing to the status endpoint. Use the status endpoint to
        monitor the progress of the contract generation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts/actions/generate"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiGenerateContractRequestDto | PublicApiGenerateContractRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_contracts_actions_generate_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_contracts_contract_id(
        self,
        contract_id: str,
        body: PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiGetContractResponse, PostApiV1ContractsContractIdErrorBody]:
        """This endpoint allows you to publish new YAML content for an existing contract.

        The ``contents`` field must contain valid Soda contract YAML. If the YAML is malformed or does not conform to
        the contract schema, the request is rejected with a 400 error.

        The ``dataset`` in the YAML must name the dataset that ``contractId`` belongs to. Contents naming a different
        dataset are rejected with a 400 error.

        ## Authorization

        Only users with **Manage contracts** permission can publish contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts/{contractId}"),
            path_params=[param[str]("contractId", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiPublishContractRequestDto | PublicApiPublishContractRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiGetContractResponse],
            error_mapper=post_api_v1_contracts_contract_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_contracts_contract_id_verify(
        self,
        contract_id: str,
        body: PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1ContractsContractIdVerifyErrorBody]:
        """This endpoint triggers a contract verification scan for the specified contract.

        The response, when successful, is ``201`` and contains headers ``Location`` and ``X-Soda-Scan-Id`` which
        identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get scan
        status**, **Get scan logs**, and **Cancel a scan** endpoints.

        Optionally, you can provide ``checkPaths`` to limit verification to specific checks within the contract. Note:
        ``checkPaths`` may not be available for all organizations.

        ## Authorization

        Only users with **Manage contracts** permission can verify contracts.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Contracts``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            contract_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/contracts/{contractId}/verify"),
            path_params=[param[str]("contractId", contract_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiVerifyContractRequestDto | PublicApiVerifyContractRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_contracts_contract_id_verify_error_mapper,
            request_options=request_options,
        )
