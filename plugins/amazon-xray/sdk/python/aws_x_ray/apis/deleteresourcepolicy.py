from __future__ import annotations

from typing import Any
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
from ..errors.delete_resource_policy_error import DeleteResourcePolicyErrorBody, delete_resource_policy_error_mapper
from ..models.delete_resource_policy_request import DeleteResourcePolicyRequest, DeleteResourcePolicyRequestDict
from ..server.server import Server


class Deleteresourcepolicy:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DeleteresourcepolicyWithRawResponse(client, server, auth)

    def delete_resource_policy(
        self,
        *,
        body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a resource policy from the target Amazon Web Services account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidPolicyRevisionIdException; InvalidRequestException ThrottledException ``error`` is
                ``InvalidPolicyRevisionIdException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.delete_resource_policy(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> DeleteresourcepolicyWithRawResponse:
        return self._with_raw_response


class AsyncDeleteresourcepolicy:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDeleteresourcepolicyWithRawResponse(client, server, auth)

    async def delete_resource_policy(
        self,
        *,
        body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Deletes a resource policy from the target Amazon Web Services account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidPolicyRevisionIdException; InvalidRequestException ThrottledException ``error`` is
                ``InvalidPolicyRevisionIdException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.delete_resource_policy(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDeleteresourcepolicyWithRawResponse:
        return self._with_raw_response


class DeleteresourcepolicyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_resource_policy(
        self,
        *,
        body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteResourcePolicyErrorBody]:
        """Deletes a resource policy from the target Amazon Web Services account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeleteResourcePolicy"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_resource_policy_error_mapper,
            request_options=request_options,
        )


class AsyncDeleteresourcepolicyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_resource_policy(
        self,
        *,
        body: DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteResourcePolicyErrorBody]:
        """Deletes a resource policy from the target Amazon Web Services account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeleteResourcePolicy"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteResourcePolicyRequest | DeleteResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_resource_policy_error_mapper,
            request_options=request_options,
        )
