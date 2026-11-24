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
from ..errors.get_sampling_targets_error import GetSamplingTargetsErrorBody, get_sampling_targets_error_mapper
from ..models.get_sampling_targets_result import GetSamplingTargetsResult
from ..models.sampling_targets_request import SamplingTargetsRequest, SamplingTargetsRequestDict
from ..server.server import Server


class Samplingtargets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SamplingtargetsWithRawResponse(client, server, auth)

    def get_sampling_targets(
        self,
        *,
        body: SamplingTargetsRequest | SamplingTargetsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetSamplingTargetsResult:
        """Requests a sampling quota for rules that the service is using to sample requests.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_sampling_targets(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> SamplingtargetsWithRawResponse:
        return self._with_raw_response


class AsyncSamplingtargets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSamplingtargetsWithRawResponse(client, server, auth)

    async def get_sampling_targets(
        self,
        *,
        body: SamplingTargetsRequest | SamplingTargetsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetSamplingTargetsResult:
        """Requests a sampling quota for rules that the service is using to sample requests.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_sampling_targets(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSamplingtargetsWithRawResponse:
        return self._with_raw_response


class SamplingtargetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_sampling_targets(
        self,
        *,
        body: SamplingTargetsRequest | SamplingTargetsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSamplingTargetsResult, GetSamplingTargetsErrorBody]:
        """Requests a sampling quota for rules that the service is using to sample requests.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/SamplingTargets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SamplingTargetsRequest | SamplingTargetsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSamplingTargetsResult],
            error_mapper=get_sampling_targets_error_mapper,
            request_options=request_options,
        )


class AsyncSamplingtargetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_sampling_targets(
        self,
        *,
        body: SamplingTargetsRequest | SamplingTargetsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetSamplingTargetsResult, GetSamplingTargetsErrorBody]:
        """Requests a sampling quota for rules that the service is using to sample requests.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/SamplingTargets"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SamplingTargetsRequest | SamplingTargetsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSamplingTargetsResult],
            error_mapper=get_sampling_targets_error_mapper,
            request_options=request_options,
        )
