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
from ..errors.create_sampling_rule_error import CreateSamplingRuleErrorBody, create_sampling_rule_error_mapper
from ..models.create_sampling_rule_request import CreateSamplingRuleRequest, CreateSamplingRuleRequestDict
from ..models.create_sampling_rule_result import CreateSamplingRuleResult
from ..server.server import Server


class Createsamplingrule:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CreatesamplingruleWithRawResponse(client, server, auth)

    def create_sampling_rule(
        self,
        *,
        body: CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateSamplingRuleResult:
        """Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with
        GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the
        service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to
        X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace
        quota that the service can use instead of borrowing from the reservoir.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException; RuleLimitExceededException ThrottledException ``error`` is
                ``InvalidRequestException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.create_sampling_rule(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CreatesamplingruleWithRawResponse:
        return self._with_raw_response


class AsyncCreatesamplingrule:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCreatesamplingruleWithRawResponse(client, server, auth)

    async def create_sampling_rule(
        self,
        *,
        body: CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateSamplingRuleResult:
        """Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with
        GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the
        service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to
        X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace
        quota that the service can use instead of borrowing from the reservoir.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException; RuleLimitExceededException ThrottledException ``error`` is
                ``InvalidRequestException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.create_sampling_rule(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCreatesamplingruleWithRawResponse:
        return self._with_raw_response


class CreatesamplingruleWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_sampling_rule(
        self,
        *,
        body: CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSamplingRuleResult, CreateSamplingRuleErrorBody]:
        """Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with
        GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the
        service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to
        X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace
        quota that the service can use instead of borrowing from the reservoir.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/CreateSamplingRule"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateSamplingRuleResult],
            error_mapper=create_sampling_rule_error_mapper,
            request_options=request_options,
        )


class AsyncCreatesamplingruleWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_sampling_rule(
        self,
        *,
        body: CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateSamplingRuleResult, CreateSamplingRuleErrorBody]:
        """Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with
        GetSamplingRules, and evaluate each rule in ascending order of priority for each request. If a rule matches, the
        service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to
        X-Ray with GetSamplingTargets to get updated versions of each in-use rule. The updated rule contains a trace
        quota that the service can use instead of borrowing from the reservoir.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/CreateSamplingRule"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSamplingRuleRequest | CreateSamplingRuleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateSamplingRuleResult],
            error_mapper=create_sampling_rule_error_mapper,
            request_options=request_options,
        )
