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
from ..errors.update_sampling_rule_error import UpdateSamplingRuleErrorBody, update_sampling_rule_error_mapper
from ..models.update_sampling_rule_request import UpdateSamplingRuleRequest, UpdateSamplingRuleRequestDict
from ..models.update_sampling_rule_result import UpdateSamplingRuleResult
from ..server.server import Server


class Updatesamplingrule:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UpdatesamplingruleWithRawResponse(client, server, auth)

    def update_sampling_rule(
        self,
        *,
        body: UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateSamplingRuleResult:
        """Modifies a sampling rule's configuration.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.update_sampling_rule(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> UpdatesamplingruleWithRawResponse:
        return self._with_raw_response


class AsyncUpdatesamplingrule:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUpdatesamplingruleWithRawResponse(client, server, auth)

    async def update_sampling_rule(
        self,
        *,
        body: UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateSamplingRuleResult:
        """Modifies a sampling rule's configuration.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.update_sampling_rule(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUpdatesamplingruleWithRawResponse:
        return self._with_raw_response


class UpdatesamplingruleWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def update_sampling_rule(
        self,
        *,
        body: UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateSamplingRuleResult, UpdateSamplingRuleErrorBody]:
        """Modifies a sampling rule's configuration.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UpdateSamplingRule"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateSamplingRuleResult],
            error_mapper=update_sampling_rule_error_mapper,
            request_options=request_options,
        )


class AsyncUpdatesamplingruleWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def update_sampling_rule(
        self,
        *,
        body: UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateSamplingRuleResult, UpdateSamplingRuleErrorBody]:
        """Modifies a sampling rule's configuration.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UpdateSamplingRule"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSamplingRuleRequest | UpdateSamplingRuleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateSamplingRuleResult],
            error_mapper=update_sampling_rule_error_mapper,
            request_options=request_options,
        )
