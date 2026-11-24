from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_account_role_error import CreateAccountRoleErrorBody, create_account_role_error_mapper
from ..errors.delete_account_role_error import DeleteAccountRoleErrorBody, delete_account_role_error_mapper
from ..errors.get_aws_account_error import GetAwsAccountErrorBody, get_aws_account_error_mapper
from ..errors.get_cloud_connect_supported_features_error import (
    GetCloudConnectSupportedFeaturesErrorBody,
    get_cloud_connect_supported_features_error_mapper,
)
from ..errors.update_aws_feature_error import UpdateAwsFeatureErrorBody, update_aws_feature_error_mapper
from ..models.aws_account_response import AwsAccountResponse
from ..models.core_v1_cloudconnect_aws_accounts_request import (
    CoreV1CloudconnectAwsAccountsRequest,
    CoreV1CloudconnectAwsAccountsRequestDict,
)
from ..models.core_v1_cloudconnect_aws_accounts_request1 import (
    CoreV1CloudconnectAwsAccountsRequest1,
    CoreV1CloudconnectAwsAccountsRequest1Dict,
)
from ..models.supported_features_response import SupportedFeaturesResponse
from ..server.server import Server


class CloudConnect:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CloudConnectWithRawResponse(client, server, auth)

    def create_account_role(
        self,
        body: CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AwsAccountResponse:
        """Creates or updates a CloudConnect document for an AWS account. Unlike the CloudFormation variant, this
        endpoint does not update Firestore channel documents or require a CloudFormation stack ID.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Role created/updated successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Conflict - Account already exists. Internal Server Error - Something went wrong with the DoiT API
                server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_account_role(body, request_options=request_options))

    def delete_account_role(self, account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes a CloudConnect document for an AWS account.

        Args:
            account_id: The AWS account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Role deleted successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_account_role(account_id, request_options=request_options))

    def get_aws_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AwsAccountResponse:
        """Returns the current state of an AWS account including role, supported features, and optional S3 bucket
        configuration.

        Args:
            account_id: The AWS account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Account details returned successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - No CloudConnect document found for this account. Internal Server Error - Something went wrong
                with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_aws_account(account_id, request_options=request_options))

    def get_cloud_connect_supported_features(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SupportedFeaturesResponse:
        """Returns the list of supported features and their permission status for a cloud account connected via
        CloudConnect. The account must belong to the authenticated customer. Supports AWS and Azure accounts.

        Args:
            account_id: The cloud provider account ID (AWS account ID or Azure tenant ID).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Supported features returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - No CloudConnect document found for this account. Internal Server Error - Something went wrong
                with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_cloud_connect_supported_features(account_id, request_options=request_options)
        )

    def update_aws_feature(
        self,
        account_id: str,
        body: CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AwsAccountResponse:
        """Updates an AWS feature for an existing CloudConnect account. Unlike the CloudFormation variant, this endpoint
        does not update Firestore channel documents, require a CloudFormation stack ID, or handle StackSet member role
        ARNs.

        Args:
            account_id: The AWS account ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Feature updated successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.update_aws_feature(account_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CloudConnectWithRawResponse:
        return self._with_raw_response


class AsyncCloudConnect:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCloudConnectWithRawResponse(client, server, auth)

    async def create_account_role(
        self,
        body: CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AwsAccountResponse:
        """Creates or updates a CloudConnect document for an AWS account. Unlike the CloudFormation variant, this
        endpoint does not update Firestore channel documents or require a CloudFormation stack ID.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Role created/updated successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Conflict - Account already exists. Internal Server Error - Something went wrong with the DoiT API
                server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_account_role(body, request_options=request_options))

    async def delete_account_role(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a CloudConnect document for an AWS account.

        Args:
            account_id: The AWS account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Role deleted successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_account_role(account_id, request_options=request_options))

    async def get_aws_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AwsAccountResponse:
        """Returns the current state of an AWS account including role, supported features, and optional S3 bucket
        configuration.

        Args:
            account_id: The AWS account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Account details returned successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - No CloudConnect document found for this account. Internal Server Error - Something went wrong
                with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_aws_account(account_id, request_options=request_options))

    async def get_cloud_connect_supported_features(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SupportedFeaturesResponse:
        """Returns the list of supported features and their permission status for a cloud account connected via
        CloudConnect. The account must belong to the authenticated customer. Supports AWS and Azure accounts.

        Args:
            account_id: The cloud provider account ID (AWS account ID or Azure tenant ID).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Supported features returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - No CloudConnect document found for this account. Internal Server Error - Something went wrong
                with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cloud_connect_supported_features(
                account_id, request_options=request_options
            ),
        )

    async def update_aws_feature(
        self,
        account_id: str,
        body: CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AwsAccountResponse:
        """Updates an AWS feature for an existing CloudConnect account. Unlike the CloudFormation variant, this endpoint
        does not update Firestore channel documents, require a CloudFormation stack ID, or handle StackSet member role
        ARNs.

        Args:
            account_id: The AWS account ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Feature updated successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.update_aws_feature(account_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCloudConnectWithRawResponse:
        return self._with_raw_response


class CloudConnectWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_account_role(
        self,
        body: CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsAccountResponse, CreateAccountRoleErrorBody]:
        """Creates or updates a CloudConnect document for an AWS account. Unlike the CloudFormation variant, this
        endpoint does not update Firestore channel documents or require a CloudFormation stack ID.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/core/v1/cloudconnect/aws/accounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AwsAccountResponse],
            error_mapper=create_account_role_error_mapper,
            request_options=request_options,
        )

    def delete_account_role(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAccountRoleErrorBody]:
        """Deletes a CloudConnect document for an AWS account.

        Args:
            account_id: The AWS account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            path_params=[param[str]("accountID", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_account_role_error_mapper,
            request_options=request_options,
        )

    def get_aws_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AwsAccountResponse, GetAwsAccountErrorBody]:
        """Returns the current state of an AWS account including role, supported features, and optional S3 bucket
        configuration.

        Args:
            account_id: The AWS account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            path_params=[param[str]("accountID", account_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AwsAccountResponse],
            error_mapper=get_aws_account_error_mapper,
            request_options=request_options,
        )

    def get_cloud_connect_supported_features(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SupportedFeaturesResponse, GetCloudConnectSupportedFeaturesErrorBody]:
        """Returns the list of supported features and their permission status for a cloud account connected via
        CloudConnect. The account must belong to the authenticated customer. Supports AWS and Azure accounts.

        Args:
            account_id: The cloud provider account ID (AWS account ID or Azure tenant ID).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/cloudconnect/supportedFeatures/{accountID}"),
            path_params=[param[str]("accountID", account_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[SupportedFeaturesResponse],
            error_mapper=get_cloud_connect_supported_features_error_mapper,
            request_options=request_options,
        )

    def update_aws_feature(
        self,
        account_id: str,
        body: CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsAccountResponse, UpdateAwsFeatureErrorBody]:
        """Updates an AWS feature for an existing CloudConnect account. Unlike the CloudFormation variant, this endpoint
        does not update Firestore channel documents, require a CloudFormation stack ID, or handle StackSet member role
        ARNs.

        Args:
            account_id: The AWS account ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            path_params=[param[str]("accountID", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AwsAccountResponse],
            error_mapper=update_aws_feature_error_mapper,
            request_options=request_options,
        )


class AsyncCloudConnectWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_account_role(
        self,
        body: CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsAccountResponse, CreateAccountRoleErrorBody]:
        """Creates or updates a CloudConnect document for an AWS account. Unlike the CloudFormation variant, this
        endpoint does not update Firestore channel documents or require a CloudFormation stack ID.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/core/v1/cloudconnect/aws/accounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CoreV1CloudconnectAwsAccountsRequest | CoreV1CloudconnectAwsAccountsRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AwsAccountResponse],
            error_mapper=create_account_role_error_mapper,
            request_options=request_options,
        )

    async def delete_account_role(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAccountRoleErrorBody]:
        """Deletes a CloudConnect document for an AWS account.

        Args:
            account_id: The AWS account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            path_params=[param[str]("accountID", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_account_role_error_mapper,
            request_options=request_options,
        )

    async def get_aws_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AwsAccountResponse, GetAwsAccountErrorBody]:
        """Returns the current state of an AWS account including role, supported features, and optional S3 bucket
        configuration.

        Args:
            account_id: The AWS account ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            path_params=[param[str]("accountID", account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AwsAccountResponse],
            error_mapper=get_aws_account_error_mapper,
            request_options=request_options,
        )

    async def get_cloud_connect_supported_features(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SupportedFeaturesResponse, GetCloudConnectSupportedFeaturesErrorBody]:
        """Returns the list of supported features and their permission status for a cloud account connected via
        CloudConnect. The account must belong to the authenticated customer. Supports AWS and Azure accounts.

        Args:
            account_id: The cloud provider account ID (AWS account ID or Azure tenant ID).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/core/v1/cloudconnect/supportedFeatures/{accountID}"),
            path_params=[param[str]("accountID", account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[SupportedFeaturesResponse],
            error_mapper=get_cloud_connect_supported_features_error_mapper,
            request_options=request_options,
        )

    async def update_aws_feature(
        self,
        account_id: str,
        body: CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AwsAccountResponse, UpdateAwsFeatureErrorBody]:
        """Updates an AWS feature for an existing CloudConnect account. Unlike the CloudFormation variant, this endpoint
        does not update Firestore channel documents, require a CloudFormation stack ID, or handle StackSet member role
        ARNs.

        Args:
            account_id: The AWS account ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/core/v1/cloudconnect/aws/accounts/{accountID}"),
            path_params=[param[str]("accountID", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CoreV1CloudconnectAwsAccountsRequest1 | CoreV1CloudconnectAwsAccountsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AwsAccountResponse],
            error_mapper=update_aws_feature_error_mapper,
            request_options=request_options,
        )
