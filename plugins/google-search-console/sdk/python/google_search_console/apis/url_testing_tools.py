from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.searchconsole_url_testing_tools_mobile_friendly_test_run_error import (
    SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody,
    searchconsole_url_testing_tools_mobile_friendly_test_run_error_mapper,
)
from ..models.run_mobile_friendly_test_request import RunMobileFriendlyTestRequest, RunMobileFriendlyTestRequestDict
from ..models.run_mobile_friendly_test_response import RunMobileFriendlyTestResponse
from ..server.server import Server


class UrlTestingTools:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UrlTestingToolsWithRawResponse(client, server, auth)

    def searchconsole_url_testing_tools_mobile_friendly_test_run(
        self,
        body: RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RunMobileFriendlyTestResponse:
        """Runs Mobile-Friendly Test for a given URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            self._with_raw_response.searchconsole_url_testing_tools_mobile_friendly_test_run(
                body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> UrlTestingToolsWithRawResponse:
        return self._with_raw_response


class AsyncUrlTestingTools:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUrlTestingToolsWithRawResponse(client, server, auth)

    async def searchconsole_url_testing_tools_mobile_friendly_test_run(
        self,
        body: RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RunMobileFriendlyTestResponse:
        """Runs Mobile-Friendly Test for a given URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Client error (google.rpc.Status: INVALID_ARGUMENT, PERMISSION_DENIED, NOT_FOUND ...) ``error`` is
                ``GoogleRpcError | RawError``."""
        return unwrap(
            await self._with_raw_response.searchconsole_url_testing_tools_mobile_friendly_test_run(
                body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUrlTestingToolsWithRawResponse:
        return self._with_raw_response


class UrlTestingToolsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def searchconsole_url_testing_tools_mobile_friendly_test_run(
        self,
        body: RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RunMobileFriendlyTestResponse, SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody]:
        """Runs Mobile-Friendly Test for a given URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urlTestingTools/mobileFriendlyTest:run"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[RunMobileFriendlyTestResponse],
            error_mapper=searchconsole_url_testing_tools_mobile_friendly_test_run_error_mapper,
            request_options=request_options,
        )


class AsyncUrlTestingToolsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def searchconsole_url_testing_tools_mobile_friendly_test_run(
        self,
        body: RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RunMobileFriendlyTestResponse, SearchconsoleUrlTestingToolsMobileFriendlyTestRunErrorBody]:
        """Runs Mobile-Friendly Test for a given URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/urlTestingTools/mobileFriendlyTest:run"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RunMobileFriendlyTestRequest | RunMobileFriendlyTestRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[RunMobileFriendlyTestResponse],
            error_mapper=searchconsole_url_testing_tools_mobile_friendly_test_run_error_mapper,
            request_options=request_options,
        )
