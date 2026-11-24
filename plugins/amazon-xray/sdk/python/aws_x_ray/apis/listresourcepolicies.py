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
from ..errors.list_resource_policies_error import ListResourcePoliciesErrorBody, list_resource_policies_error_mapper
from ..models.list_resource_policies_request import ListResourcePoliciesRequest, ListResourcePoliciesRequestDict
from ..models.list_resource_policies_result import ListResourcePoliciesResult
from ..server.server import Server


class Listresourcepolicies:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ListresourcepoliciesWithRawResponse(client, server, auth)

    def list_resource_policies(
        self,
        *,
        body: ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResourcePoliciesResult:
        """Returns the list of resource policies in the target Amazon Web Services account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.list_resource_policies(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ListresourcepoliciesWithRawResponse:
        return self._with_raw_response


class AsyncListresourcepolicies:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncListresourcepoliciesWithRawResponse(client, server, auth)

    async def list_resource_policies(
        self,
        *,
        body: ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResourcePoliciesResult:
        """Returns the list of resource policies in the target Amazon Web Services account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.list_resource_policies(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncListresourcepoliciesWithRawResponse:
        return self._with_raw_response


class ListresourcepoliciesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_resource_policies(
        self,
        *,
        body: ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResourcePoliciesResult, ListResourcePoliciesErrorBody]:
        """Returns the list of resource policies in the target Amazon Web Services account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ListResourcePolicies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListResourcePoliciesResult],
            error_mapper=list_resource_policies_error_mapper,
            request_options=request_options,
        )


class AsyncListresourcepoliciesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_resource_policies(
        self,
        *,
        body: ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResourcePoliciesResult, ListResourcePoliciesErrorBody]:
        """Returns the list of resource policies in the target Amazon Web Services account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ListResourcePolicies"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListResourcePoliciesRequest | ListResourcePoliciesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListResourcePoliciesResult],
            error_mapper=list_resource_policies_error_mapper,
            request_options=request_options,
        )
