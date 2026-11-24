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
from ..errors.put_resource_policy_error import PutResourcePolicyErrorBody, put_resource_policy_error_mapper
from ..models.put_resource_policy_request import PutResourcePolicyRequest, PutResourcePolicyRequestDict
from ..models.put_resource_policy_result import PutResourcePolicyResult
from ..server.server import Server


class Putresourcepolicy:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PutresourcepolicyWithRawResponse(client, server, auth)

    def put_resource_policy(
        self,
        *,
        body: PutResourcePolicyRequest | PutResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutResourcePolicyResult:
        """Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access
        X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web
        Services account can have a maximum of 5 resource policies, and each policy name must be unique within that
        account. The maximum size of each resource policy is 5KB.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidPolicyRevisionIdException; LockoutPreventionException; MalformedPolicyDocumentException;
                PolicyCountLimitExceededException; PolicySizeLimitExceededException ThrottledException ``error`` is
                ``InvalidPolicyRevisionIdException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.put_resource_policy(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> PutresourcepolicyWithRawResponse:
        return self._with_raw_response


class AsyncPutresourcepolicy:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPutresourcepolicyWithRawResponse(client, server, auth)

    async def put_resource_policy(
        self,
        *,
        body: PutResourcePolicyRequest | PutResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutResourcePolicyResult:
        """Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access
        X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web
        Services account can have a maximum of 5 resource policies, and each policy name must be unique within that
        account. The maximum size of each resource policy is 5KB.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidPolicyRevisionIdException; LockoutPreventionException; MalformedPolicyDocumentException;
                PolicyCountLimitExceededException; PolicySizeLimitExceededException ThrottledException ``error`` is
                ``InvalidPolicyRevisionIdException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.put_resource_policy(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPutresourcepolicyWithRawResponse:
        return self._with_raw_response


class PutresourcepolicyWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def put_resource_policy(
        self,
        *,
        body: PutResourcePolicyRequest | PutResourcePolicyRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutResourcePolicyResult, PutResourcePolicyErrorBody]:
        """Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access
        X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web
        Services account can have a maximum of 5 resource policies, and each policy name must be unique within that
        account. The maximum size of each resource policy is 5KB.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/PutResourcePolicy"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutResourcePolicyRequest | PutResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutResourcePolicyResult],
            error_mapper=put_resource_policy_error_mapper,
            request_options=request_options,
        )


class AsyncPutresourcepolicyWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def put_resource_policy(
        self,
        *,
        body: PutResourcePolicyRequest | PutResourcePolicyRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutResourcePolicyResult, PutResourcePolicyErrorBody]:
        """Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access
        X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web
        Services account can have a maximum of 5 resource policies, and each policy name must be unique within that
        account. The maximum size of each resource policy is 5KB.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/PutResourcePolicy"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PutResourcePolicyRequest | PutResourcePolicyRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutResourcePolicyResult],
            error_mapper=put_resource_policy_error_mapper,
            request_options=request_options,
        )
