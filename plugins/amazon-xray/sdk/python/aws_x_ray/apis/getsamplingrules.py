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
from ..errors.get_sampling_rules_error import GetSamplingRulesErrorBody, get_sampling_rules_error_mapper
from ..models.get_sampling_rules_request import GetSamplingRulesRequest, GetSamplingRulesRequestDict
from ..models.get_sampling_rules_result import GetSamplingRulesResult
from ..server.server import Server


class Getsamplingrules:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = GetsamplingrulesWithRawResponse(client, server, auth)

    def get_sampling_rules(
        self,
        *,
        body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetSamplingRulesResult:
        """Retrieves all sampling rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_sampling_rules(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> GetsamplingrulesWithRawResponse:
        return self._with_raw_response


class AsyncGetsamplingrules:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncGetsamplingrulesWithRawResponse(client, server, auth)

    async def get_sampling_rules(
        self,
        *,
        body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetSamplingRulesResult:
        """Retrieves all sampling rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_sampling_rules(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncGetsamplingrulesWithRawResponse:
        return self._with_raw_response


class GetsamplingrulesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_sampling_rules(
        self,
        *,
        body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSamplingRulesResult, GetSamplingRulesErrorBody]:
        """Retrieves all sampling rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/GetSamplingRules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetSamplingRulesRequest | GetSamplingRulesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSamplingRulesResult],
            error_mapper=get_sampling_rules_error_mapper,
            request_options=request_options,
        )


class AsyncGetsamplingrulesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_sampling_rules(
        self,
        *,
        body: GetSamplingRulesRequest | GetSamplingRulesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSamplingRulesResult, GetSamplingRulesErrorBody]:
        """Retrieves all sampling rules.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/GetSamplingRules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetSamplingRulesRequest | GetSamplingRulesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSamplingRulesResult],
            error_mapper=get_sampling_rules_error_mapper,
            request_options=request_options,
        )
