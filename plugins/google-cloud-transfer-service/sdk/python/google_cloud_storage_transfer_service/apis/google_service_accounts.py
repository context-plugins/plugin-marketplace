from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.storagetransfer_google_service_accounts_get_error import (
    StoragetransferGoogleServiceAccountsGetErrorBody,
    storagetransfer_google_service_accounts_get_error_mapper,
)
from ..models.google_service_account import GoogleServiceAccount
from ..server.server import Server


class GoogleServiceAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GoogleServiceAccountsWithRawResponse(client, server, auth)

    def storagetransfer_google_service_accounts_get(
        self, project_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GoogleServiceAccount:
        """Returns the Google service account that is used by Storage Transfer Service to access buckets in the project
        where transfers run or in other projects. Each Google service account is associated with one Google Cloud
        project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to
        Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be
        used by Storage Transfer Service.

        Args:
            project_id: Required. The ID of the Google Cloud project that the Google service account is associated with.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.storagetransfer_google_service_accounts_get(
                project_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> GoogleServiceAccountsWithRawResponse:
        return self._with_raw_response


class AsyncGoogleServiceAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGoogleServiceAccountsWithRawResponse(client, server, auth)

    async def storagetransfer_google_service_accounts_get(
        self, project_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GoogleServiceAccount:
        """Returns the Google service account that is used by Storage Transfer Service to access buckets in the project
        where transfers run or in other projects. Each Google service account is associated with one Google Cloud
        project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to
        Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be
        used by Storage Transfer Service.

        Args:
            project_id: Required. The ID of the Google Cloud project that the Google service account is associated with.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.storagetransfer_google_service_accounts_get(
                project_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncGoogleServiceAccountsWithRawResponse:
        return self._with_raw_response


class GoogleServiceAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def storagetransfer_google_service_accounts_get(
        self, project_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleServiceAccount, StoragetransferGoogleServiceAccountsGetErrorBody]:
        """Returns the Google service account that is used by Storage Transfer Service to access buckets in the project
        where transfers run or in other projects. Each Google service account is associated with one Google Cloud
        project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to
        Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be
        used by Storage Transfer Service.

        Args:
            project_id: Required. The ID of the Google Cloud project that the Google service account is associated with.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/googleServiceAccounts/{projectId}"),
            path_params=[param[str]("projectId", project_id)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=json_decoder[GoogleServiceAccount],
            error_mapper=storagetransfer_google_service_accounts_get_error_mapper,
            request_options=request_options,
        )


class AsyncGoogleServiceAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def storagetransfer_google_service_accounts_get(
        self, project_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GoogleServiceAccount, StoragetransferGoogleServiceAccountsGetErrorBody]:
        """Returns the Google service account that is used by Storage Transfer Service to access buckets in the project
        where transfers run or in other projects. Each Google service account is associated with one Google Cloud
        project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to
        Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be
        used by Storage Transfer Service.

        Args:
            project_id: Required. The ID of the Google Cloud project that the Google service account is associated with.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/googleServiceAccounts/{projectId}"),
            path_params=[param[str]("projectId", project_id)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.api_key),
            decoder=async_json_decoder[GoogleServiceAccount],
            error_mapper=storagetransfer_google_service_accounts_get_error_mapper,
            request_options=request_options,
        )
