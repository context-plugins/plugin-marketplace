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
from ..errors.post_api_v1_screen_error import PostApiV1ScreenErrorBody, post_api_v1_screen_error_mapper
from ..models.api_v1_screen_request import ApiV1ScreenRequest, ApiV1ScreenRequestDict
from ..models.api_v1_screen_response import ApiV1ScreenResponse
from ..server.server import Server


class Screen:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScreenWithRawResponse(client, server, auth)

    def post_api_v1_screen(
        self,
        *,
        body: ApiV1ScreenRequest | ApiV1ScreenRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ScreenResponse:
        """Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets, special-category
        data and the organisation's own terms, and decides against what the AI register approves the model
        (``aiSystemId``) to receive: ``allow``, ``redact`` (send ``redactedText``), ``ask`` (a person decides through
        the approval in ``approval``; send the original only once it is approved) or ``deny``. Send ``text``, screened
        in memory and never stored, or ``counts``, what the SDK found on the caller's machine, so the text never leaves
        it. Every check is audited with counts and the verdict, never a value. On the Free plan the check is report-only
        (``mode: report_only``): it runs and is audited, ``verdict`` is always ``allow``, and ``wouldBe`` says what a
        paid plan would have done. A net, not a guarantee: names are not reliably found.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The verdict, and why

        Raises:
            ApiError: No AI system with that id in the organisation's register ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_screen(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ScreenWithRawResponse:
        return self._with_raw_response


class AsyncScreen:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScreenWithRawResponse(client, server, auth)

    async def post_api_v1_screen(
        self,
        *,
        body: ApiV1ScreenRequest | ApiV1ScreenRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ScreenResponse:
        """Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets, special-category
        data and the organisation's own terms, and decides against what the AI register approves the model
        (``aiSystemId``) to receive: ``allow``, ``redact`` (send ``redactedText``), ``ask`` (a person decides through
        the approval in ``approval``; send the original only once it is approved) or ``deny``. Send ``text``, screened
        in memory and never stored, or ``counts``, what the SDK found on the caller's machine, so the text never leaves
        it. Every check is audited with counts and the verdict, never a value. On the Free plan the check is report-only
        (``mode: report_only``): it runs and is audited, ``verdict`` is always ``allow``, and ``wouldBe`` says what a
        paid plan would have done. A net, not a guarantee: names are not reliably found.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The verdict, and why

        Raises:
            ApiError: No AI system with that id in the organisation's register ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_screen(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncScreenWithRawResponse:
        return self._with_raw_response


class ScreenWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_api_v1_screen(
        self,
        *,
        body: ApiV1ScreenRequest | ApiV1ScreenRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ScreenResponse, PostApiV1ScreenErrorBody]:
        """Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets, special-category
        data and the organisation's own terms, and decides against what the AI register approves the model
        (``aiSystemId``) to receive: ``allow``, ``redact`` (send ``redactedText``), ``ask`` (a person decides through
        the approval in ``approval``; send the original only once it is approved) or ``deny``. Send ``text``, screened
        in memory and never stored, or ``counts``, what the SDK found on the caller's machine, so the text never leaves
        it. Every check is audited with counts and the verdict, never a value. On the Free plan the check is report-only
        (``mode: report_only``): it runs and is audited, ``verdict`` is always ``allow``, and ``wouldBe`` says what a
        paid plan would have done. A net, not a guarantee: names are not reliably found.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/screen"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ScreenRequest | ApiV1ScreenRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ScreenResponse],
            error_mapper=post_api_v1_screen_error_mapper,
            request_options=request_options,
        )


class AsyncScreenWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_api_v1_screen(
        self,
        *,
        body: ApiV1ScreenRequest | ApiV1ScreenRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ScreenResponse, PostApiV1ScreenErrorBody]:
        """Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets, special-category
        data and the organisation's own terms, and decides against what the AI register approves the model
        (``aiSystemId``) to receive: ``allow``, ``redact`` (send ``redactedText``), ``ask`` (a person decides through
        the approval in ``approval``; send the original only once it is approved) or ``deny``. Send ``text``, screened
        in memory and never stored, or ``counts``, what the SDK found on the caller's machine, so the text never leaves
        it. Every check is audited with counts and the verdict, never a value. On the Free plan the check is report-only
        (``mode: report_only``): it runs and is audited, ``verdict`` is always ``allow``, and ``wouldBe`` says what a
        paid plan would have done. A net, not a guarantee: names are not reliably found.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/screen"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ScreenRequest | ApiV1ScreenRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ScreenResponse],
            error_mapper=post_api_v1_screen_error_mapper,
            request_options=request_options,
        )
