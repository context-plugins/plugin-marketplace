from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.bulk_check_emails_error import BulkCheckEmailsErrorBody, bulk_check_emails_error_mapper
from ..models.enums.catch_all import CatchAllOrInt
from ..models.enums.format import FormatOrInt
from ..models.enums.smtp import SmtpOrInt
from ..models.unions.bulk_check_response import BulkCheckResponse
from ..server.server import Server


class BulkCheck:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BulkCheckWithRawResponse(client, server, auth)

    def bulk_check_emails(
        self,
        access_key: str,
        emails: str,
        *,
        smtp: SmtpOrInt | None = None,
        catch_all: CatchAllOrInt | None = None,
        format_: FormatOrInt | None = None,
        callback: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BulkCheckResponse:
        """Bulk validation accepts a comma-separated list of email addresses in the ``emails`` query parameter (e.g.
        ``emails=a@x.com,b@y.com,…``).

        Args:
            access_key: Mailboxlayer API Access Key (required for all requests).
            emails: Comma-separated list of email addresses for bulk validation (e.g. ``a@example.com,b@x.com``). Bulk
                limits depend on plan (Pro+ up to 25, Enterprise+ up to 100).
            smtp: Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may
                speed up responses but disables the ``smtp_check`` verdict.
            catch_all: Enable catch-all mailbox detection by setting ``catch_all=1``. Disabled by default because check
                is heavier and may increase response time. If not requested, the ``catch_all`` response value will
                typically be ``null``. Some plans restrict catch-all detection.
            format_: Set to 1 for human-prettified JSON output (useful for debugging; increases payload size).
            callback: JSONP callback function name; wrapper will be returned if specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of validation results (one per requested email). Service-level errors (empty ``emails``, plan/bulk
            restrictions, bulk size over the plan limit) are also returned here with HTTP 200 and a ``success:false``
            ApiError body.

        Raises:
            ApiError: Unauthorized Forbidden Not Found Request-validation error — a required query parameter is missing
                or malformed (for example no ``emails`` supplied). Returned with HTTP 422 and FastAPI's validation body.
                Too Many Requests Internal Server Error Service Unavailable ``error`` is ``ApiErrorModel |
                RequestValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_check_emails(
                access_key,
                emails,
                smtp=smtp,
                catch_all=catch_all,
                format_=format_,
                callback=callback,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> BulkCheckWithRawResponse:
        return self._with_raw_response


class AsyncBulkCheck:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBulkCheckWithRawResponse(client, server, auth)

    async def bulk_check_emails(
        self,
        access_key: str,
        emails: str,
        *,
        smtp: SmtpOrInt | None = None,
        catch_all: CatchAllOrInt | None = None,
        format_: FormatOrInt | None = None,
        callback: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BulkCheckResponse:
        """Bulk validation accepts a comma-separated list of email addresses in the ``emails`` query parameter (e.g.
        ``emails=a@x.com,b@y.com,…``).

        Args:
            access_key: Mailboxlayer API Access Key (required for all requests).
            emails: Comma-separated list of email addresses for bulk validation (e.g. ``a@example.com,b@x.com``). Bulk
                limits depend on plan (Pro+ up to 25, Enterprise+ up to 100).
            smtp: Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may
                speed up responses but disables the ``smtp_check`` verdict.
            catch_all: Enable catch-all mailbox detection by setting ``catch_all=1``. Disabled by default because check
                is heavier and may increase response time. If not requested, the ``catch_all`` response value will
                typically be ``null``. Some plans restrict catch-all detection.
            format_: Set to 1 for human-prettified JSON output (useful for debugging; increases payload size).
            callback: JSONP callback function name; wrapper will be returned if specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of validation results (one per requested email). Service-level errors (empty ``emails``, plan/bulk
            restrictions, bulk size over the plan limit) are also returned here with HTTP 200 and a ``success:false``
            ApiError body.

        Raises:
            ApiError: Unauthorized Forbidden Not Found Request-validation error — a required query parameter is missing
                or malformed (for example no ``emails`` supplied). Returned with HTTP 422 and FastAPI's validation body.
                Too Many Requests Internal Server Error Service Unavailable ``error`` is ``ApiErrorModel |
                RequestValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_check_emails(
                access_key,
                emails,
                smtp=smtp,
                catch_all=catch_all,
                format_=format_,
                callback=callback,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBulkCheckWithRawResponse:
        return self._with_raw_response


class BulkCheckWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_check_emails(
        self,
        access_key: str,
        emails: str,
        *,
        smtp: SmtpOrInt | None = None,
        catch_all: CatchAllOrInt | None = None,
        format_: FormatOrInt | None = None,
        callback: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkCheckResponse, BulkCheckEmailsErrorBody]:
        """Bulk validation accepts a comma-separated list of email addresses in the ``emails`` query parameter (e.g.
        ``emails=a@x.com,b@y.com,…``).

        Args:
            access_key: Mailboxlayer API Access Key (required for all requests).
            emails: Comma-separated list of email addresses for bulk validation (e.g. ``a@example.com,b@x.com``). Bulk
                limits depend on plan (Pro+ up to 25, Enterprise+ up to 100).
            smtp: Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may
                speed up responses but disables the ``smtp_check`` verdict.
            catch_all: Enable catch-all mailbox detection by setting ``catch_all=1``. Disabled by default because check
                is heavier and may increase response time. If not requested, the ``catch_all`` response value will
                typically be ``null``. Some plans restrict catch-all detection.
            format_: Set to 1 for human-prettified JSON output (useful for debugging; increases payload size).
            callback: JSONP callback function name; wrapper will be returned if specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk_check"),
            query_params=[
                param[str]("access_key", access_key),
                param[str]("emails", emails),
                param[SmtpOrInt | None]("smtp", smtp),
                param[CatchAllOrInt | None]("catch_all", catch_all),
                param[FormatOrInt | None]("format", format_),
                param[str | None]("callback", callback),
            ],
            auth_scheme=self._auth.access_key_query,
            decoder=json_decoder[BulkCheckResponse],
            error_mapper=bulk_check_emails_error_mapper,
            request_options=request_options,
        )


class AsyncBulkCheckWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_check_emails(
        self,
        access_key: str,
        emails: str,
        *,
        smtp: SmtpOrInt | None = None,
        catch_all: CatchAllOrInt | None = None,
        format_: FormatOrInt | None = None,
        callback: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BulkCheckResponse, BulkCheckEmailsErrorBody]:
        """Bulk validation accepts a comma-separated list of email addresses in the ``emails`` query parameter (e.g.
        ``emails=a@x.com,b@y.com,…``).

        Args:
            access_key: Mailboxlayer API Access Key (required for all requests).
            emails: Comma-separated list of email addresses for bulk validation (e.g. ``a@example.com,b@x.com``). Bulk
                limits depend on plan (Pro+ up to 25, Enterprise+ up to 100).
            smtp: Enable (1) or disable (0) the SMTP check. SMTP verification is active by default. Turning it off may
                speed up responses but disables the ``smtp_check`` verdict.
            catch_all: Enable catch-all mailbox detection by setting ``catch_all=1``. Disabled by default because check
                is heavier and may increase response time. If not requested, the ``catch_all`` response value will
                typically be ``null``. Some plans restrict catch-all detection.
            format_: Set to 1 for human-prettified JSON output (useful for debugging; increases payload size).
            callback: JSONP callback function name; wrapper will be returned if specified.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bulk_check"),
            query_params=[
                param[str]("access_key", access_key),
                param[str]("emails", emails),
                param[SmtpOrInt | None]("smtp", smtp),
                param[CatchAllOrInt | None]("catch_all", catch_all),
                param[FormatOrInt | None]("format", format_),
                param[str | None]("callback", callback),
            ],
            auth_scheme=self._auth.access_key_query,
            decoder=async_json_decoder[BulkCheckResponse],
            error_mapper=bulk_check_emails_error_mapper,
            request_options=request_options,
        )
