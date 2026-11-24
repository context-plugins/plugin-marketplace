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
from ..errors.delete_sampling_rule_error import DeleteSamplingRuleErrorBody, delete_sampling_rule_error_mapper
from ..models.delete_sampling_rule_request import DeleteSamplingRuleRequest, DeleteSamplingRuleRequestDict
from ..models.delete_sampling_rule_result import DeleteSamplingRuleResult
from ..server.server import Server


class Deletesamplingrule:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DeletesamplingruleWithRawResponse(client, server, auth)

    def delete_sampling_rule(
        self,
        *,
        body: DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DeleteSamplingRuleResult:
        """Deletes a sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.delete_sampling_rule(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> DeletesamplingruleWithRawResponse:
        return self._with_raw_response


class AsyncDeletesamplingrule:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDeletesamplingruleWithRawResponse(client, server, auth)

    async def delete_sampling_rule(
        self,
        *,
        body: DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DeleteSamplingRuleResult:
        """Deletes a sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.delete_sampling_rule(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDeletesamplingruleWithRawResponse:
        return self._with_raw_response


class DeletesamplingruleWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_sampling_rule(
        self,
        *,
        body: DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteSamplingRuleResult, DeleteSamplingRuleErrorBody]:
        """Deletes a sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeleteSamplingRule"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DeleteSamplingRuleResult],
            error_mapper=delete_sampling_rule_error_mapper,
            request_options=request_options,
        )


class AsyncDeletesamplingruleWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_sampling_rule(
        self,
        *,
        body: DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DeleteSamplingRuleResult, DeleteSamplingRuleErrorBody]:
        """Deletes a sampling rule.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/DeleteSamplingRule"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DeleteSamplingRuleRequest | DeleteSamplingRuleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DeleteSamplingRuleResult],
            error_mapper=delete_sampling_rule_error_mapper,
            request_options=request_options,
        )
