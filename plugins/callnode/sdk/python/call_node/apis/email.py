from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_email_domain_error import CreateEmailDomainErrorBody, create_email_domain_error_mapper
from ..errors.delete_email_domain_error import DeleteEmailDomainErrorBody, delete_email_domain_error_mapper
from ..errors.get_email_domain_error import GetEmailDomainErrorBody, get_email_domain_error_mapper
from ..errors.get_email_message_error import GetEmailMessageErrorBody, get_email_message_error_mapper
from ..errors.list_email_domains_error import ListEmailDomainsErrorBody, list_email_domains_error_mapper
from ..errors.list_email_messages_error import ListEmailMessagesErrorBody, list_email_messages_error_mapper
from ..errors.send_email_error import SendEmailErrorBody, send_email_error_mapper
from ..errors.verify_email_domain_error import VerifyEmailDomainErrorBody, verify_email_domain_error_mapper
from ..models.api_v1_email_domains_request import ApiV1EmailDomainsRequest, ApiV1EmailDomainsRequestDict
from ..models.api_v1_email_domains_response import ApiV1EmailDomainsResponse
from ..models.api_v1_email_messages_response import ApiV1EmailMessagesResponse
from ..models.email_domain import EmailDomain
from ..models.email_message import EmailMessage
from ..models.enums.status3 import Status3OrStr
from ..models.send_email_request import SendEmailRequest, SendEmailRequestDict
from ..server.server import Server


class Email:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EmailWithRawResponse(client, server, auth)

    def create_email_domain(
        self,
        body: ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EmailDomain:
        """Registers a domain you control and answers 201 with the DNS records to publish (DKIM TXT, SPF TXT,
        return-path CNAME). Adding a domain the account already holds replays it (200). Requires business verification
        and the Email API priced on your plan.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created, ``pending``, with the records to publish.

        Raises:
            ApiError: ``validation_error`` or ``domain_not_allowed``. Missing, unknown, or badly signed credentials —
                check the HMAC and the timestamp skew. ``account_not_verified`` or ``email_not_enabled``.
                ``domain_taken`` (registered on another account) or ``too_many_domains`` (10 per account). ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_email_domain(body, request_options=request_options))

    def delete_email_domain(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Messages already sent keep their history.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_email_domain(id_, request_options=request_options))

    def get_email_domain(
        self, id_: str, *, refresh: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> EmailDomain:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            refresh: When set, the status and the records' statuses are re-read from the sending infrastructure first,
                and the answer carries ``newDomainLimit``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_email_domain(id_, refresh=refresh, request_options=request_options))

    def get_email_message(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EmailMessage:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The message; ``events`` lists ``{ type, at, detail }`` in the order they occurred.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_email_message(id_, request_options=request_options))

    def list_email_domains(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1EmailDomainsResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Every sending domain on the account.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_email_domains(request_options=request_options))

    def list_email_messages(
        self,
        *,
        status: Status3OrStr | None = None,
        limit: int | None = 25,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1EmailMessagesResponse:
        """Newest first, keyset-paginated. Test keys list test messages only.

        Args:
            status: Value sent with the request.
            limit: Value sent with the request.
            cursor: The ``nextCursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of messages.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_email_messages(
                status=status, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    def send_email(
        self,
        body: SendEmailRequest | SendEmailRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EmailMessage:
        """Send one message to up to 50 recipients (to + cc + bcc) from an address on one of your active sending
        domains. Gates run in order: field validation, business verification, the From domain's status, idempotency, a
        per-recipient rate on your plan, and a balance of at least ``recipients × rate``. The message is handed to the
        sending infrastructure and answered 202 as ``sent``; the charge happens on acceptance. A ``cn_test_`` key runs
        every gate and then simulates. Bodies are not stored after the handoff.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted by the sending infrastructure; ``status`` is ``sent`` and moves on as delivery events arrive.
            ``billing`` says how the message was priced.

        Raises:
            ApiError: ``validation_error`` (an ``errors`` array names each problem: a missing or malformed field, a
                ``reply_to`` off the From domain, or, on a live send, a recipient on a reserved documentation domain
                such as example.com) or ``provider_rejected`` (the message as built was refused; nothing charged).
                Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew.
                ``insufficient_balance``: balance below recipients × rate; ``balance`` and ``required`` carry the
                amounts. ``account_not_verified``, ``email_not_enabled`` (no per-recipient rate on your plan),
                ``from_domain_not_owned`` or ``from_domain_not_verified`` (the domain is not active, or its records
                failed the check run before this send: ``verificationError`` carries the reason, and the next send after
                the record is back re-checks the domain). ``provider_rate_limited`` (retry after the ``retryAfter``
                hint, seconds) or ``new_domain_daily_limit`` (a domain registered less than 30 days ago has sent the
                allowance for today; ``retryAfter`` and ``resetsAt`` point at the reset, 00:00 UTC; nothing charged).
                ``provider_unavailable``: the sending infrastructure did not accept the handoff; the message is recorded
                as ``failed``, nothing was charged. ``email_unavailable``: email sending is not configured on the
                platform yet. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.send_email(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    def verify_email_domain(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> EmailDomain:
        """A real lookup against public DNS. Answers the domain with its new status; a failed check carries
        ``verificationError``.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain after the check (``active``, ``verifying`` or ``failed``).

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``verify_rate_limited``: wait a minute. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.verify_email_domain(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> EmailWithRawResponse:
        return self._with_raw_response


class AsyncEmail:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEmailWithRawResponse(client, server, auth)

    async def create_email_domain(
        self,
        body: ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EmailDomain:
        """Registers a domain you control and answers 201 with the DNS records to publish (DKIM TXT, SPF TXT,
        return-path CNAME). Adding a domain the account already holds replays it (200). Requires business verification
        and the Email API priced on your plan.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created, ``pending``, with the records to publish.

        Raises:
            ApiError: ``validation_error`` or ``domain_not_allowed``. Missing, unknown, or badly signed credentials —
                check the HMAC and the timestamp skew. ``account_not_verified`` or ``email_not_enabled``.
                ``domain_taken`` (registered on another account) or ``too_many_domains`` (10 per account). ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_email_domain(body, request_options=request_options))

    async def delete_email_domain(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Messages already sent keep their history.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_email_domain(id_, request_options=request_options))

    async def get_email_domain(
        self, id_: str, *, refresh: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EmailDomain:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            refresh: When set, the status and the records' statuses are re-read from the sending infrastructure first,
                and the answer carries ``newDomainLimit``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_email_domain(id_, refresh=refresh, request_options=request_options)
        )

    async def get_email_message(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EmailMessage:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The message; ``events`` lists ``{ type, at, detail }`` in the order they occurred.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_email_message(id_, request_options=request_options))

    async def list_email_domains(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1EmailDomainsResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Every sending domain on the account.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_email_domains(request_options=request_options))

    async def list_email_messages(
        self,
        *,
        status: Status3OrStr | None = None,
        limit: int | None = 25,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1EmailMessagesResponse:
        """Newest first, keyset-paginated. Test keys list test messages only.

        Args:
            status: Value sent with the request.
            limit: Value sent with the request.
            cursor: The ``nextCursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of messages.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_email_messages(
                status=status, limit=limit, cursor=cursor, request_options=request_options
            ),
        )

    async def send_email(
        self,
        body: SendEmailRequest | SendEmailRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EmailMessage:
        """Send one message to up to 50 recipients (to + cc + bcc) from an address on one of your active sending
        domains. Gates run in order: field validation, business verification, the From domain's status, idempotency, a
        per-recipient rate on your plan, and a balance of at least ``recipients × rate``. The message is handed to the
        sending infrastructure and answered 202 as ``sent``; the charge happens on acceptance. A ``cn_test_`` key runs
        every gate and then simulates. Bodies are not stored after the handoff.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted by the sending infrastructure; ``status`` is ``sent`` and moves on as delivery events arrive.
            ``billing`` says how the message was priced.

        Raises:
            ApiError: ``validation_error`` (an ``errors`` array names each problem: a missing or malformed field, a
                ``reply_to`` off the From domain, or, on a live send, a recipient on a reserved documentation domain
                such as example.com) or ``provider_rejected`` (the message as built was refused; nothing charged).
                Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew.
                ``insufficient_balance``: balance below recipients × rate; ``balance`` and ``required`` carry the
                amounts. ``account_not_verified``, ``email_not_enabled`` (no per-recipient rate on your plan),
                ``from_domain_not_owned`` or ``from_domain_not_verified`` (the domain is not active, or its records
                failed the check run before this send: ``verificationError`` carries the reason, and the next send after
                the record is back re-checks the domain). ``provider_rate_limited`` (retry after the ``retryAfter``
                hint, seconds) or ``new_domain_daily_limit`` (a domain registered less than 30 days ago has sent the
                allowance for today; ``retryAfter`` and ``resetsAt`` point at the reset, 00:00 UTC; nothing charged).
                ``provider_unavailable``: the sending infrastructure did not accept the handoff; the message is recorded
                as ``failed``, nothing was charged. ``email_unavailable``: email sending is not configured on the
                platform yet. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.send_email(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    async def verify_email_domain(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EmailDomain:
        """A real lookup against public DNS. Answers the domain with its new status; a failed check carries
        ``verificationError``.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The domain after the check (``active``, ``verifying`` or ``failed``).

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``verify_rate_limited``: wait a minute. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.verify_email_domain(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncEmailWithRawResponse:
        return self._with_raw_response


class EmailWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_email_domain(
        self,
        body: ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EmailDomain, CreateEmailDomainErrorBody]:
        """Registers a domain you control and answers 201 with the DNS records to publish (DKIM TXT, SPF TXT,
        return-path CNAME). Adding a domain the account already holds replays it (200). Requires business verification
        and the Email API priced on your plan.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/email/domains"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[EmailDomain],
            error_mapper=create_email_domain_error_mapper,
            request_options=request_options,
        )

    def delete_email_domain(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEmailDomainErrorBody]:
        """Messages already sent keep their history.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/email/domains/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=empty_response,
            error_mapper=delete_email_domain_error_mapper,
            request_options=request_options,
        )

    def get_email_domain(
        self, id_: str, *, refresh: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EmailDomain, GetEmailDomainErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            refresh: When set, the status and the records' statuses are re-read from the sending infrastructure first,
                and the answer carries ``newDomainLimit``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/email/domains/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("refresh", refresh)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[EmailDomain],
            error_mapper=get_email_domain_error_mapper,
            request_options=request_options,
        )

    def get_email_message(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EmailMessage, GetEmailMessageErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/email/messages/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[EmailMessage],
            error_mapper=get_email_message_error_mapper,
            request_options=request_options,
        )

    def list_email_domains(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1EmailDomainsResponse, ListEmailDomainsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/email/domains"),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1EmailDomainsResponse],
            error_mapper=list_email_domains_error_mapper,
            request_options=request_options,
        )

    def list_email_messages(
        self,
        *,
        status: Status3OrStr | None = None,
        limit: int | None = 25,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EmailMessagesResponse, ListEmailMessagesErrorBody]:
        """Newest first, keyset-paginated. Test keys list test messages only.

        Args:
            status: Value sent with the request.
            limit: Value sent with the request.
            cursor: The ``nextCursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/email/messages"),
            query_params=[
                param[Status3OrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1EmailMessagesResponse],
            error_mapper=list_email_messages_error_mapper,
            request_options=request_options,
        )

    def send_email(
        self,
        body: SendEmailRequest | SendEmailRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EmailMessage, SendEmailErrorBody]:
        """Send one message to up to 50 recipients (to + cc + bcc) from an address on one of your active sending
        domains. Gates run in order: field validation, business verification, the From domain's status, idempotency, a
        per-recipient rate on your plan, and a balance of at least ``recipients × rate``. The message is handed to the
        sending infrastructure and answered 202 as ``sent``; the charge happens on acceptance. A ``cn_test_`` key runs
        every gate and then simulates. Bodies are not stored after the handoff.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/email/messages"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[SendEmailRequest | SendEmailRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[EmailMessage],
            error_mapper=send_email_error_mapper,
            request_options=request_options,
        )

    def verify_email_domain(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EmailDomain, VerifyEmailDomainErrorBody]:
        """A real lookup against public DNS. Answers the domain with its new status; a failed check carries
        ``verificationError``.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/email/domains/{id}/verify"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[EmailDomain],
            error_mapper=verify_email_domain_error_mapper,
            request_options=request_options,
        )


class AsyncEmailWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_email_domain(
        self,
        body: ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EmailDomain, CreateEmailDomainErrorBody]:
        """Registers a domain you control and answers 201 with the DNS records to publish (DKIM TXT, SPF TXT,
        return-path CNAME). Adding a domain the account already holds replays it (200). Requires business verification
        and the Email API priced on your plan.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/email/domains"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1EmailDomainsRequest | ApiV1EmailDomainsRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[EmailDomain],
            error_mapper=create_email_domain_error_mapper,
            request_options=request_options,
        )

    async def delete_email_domain(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteEmailDomainErrorBody]:
        """Messages already sent keep their history.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/email/domains/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_empty_response,
            error_mapper=delete_email_domain_error_mapper,
            request_options=request_options,
        )

    async def get_email_domain(
        self, id_: str, *, refresh: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EmailDomain, GetEmailDomainErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            refresh: When set, the status and the records' statuses are re-read from the sending infrastructure first,
                and the answer carries ``newDomainLimit``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/email/domains/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[str | None]("refresh", refresh)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[EmailDomain],
            error_mapper=get_email_domain_error_mapper,
            request_options=request_options,
        )

    async def get_email_message(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EmailMessage, GetEmailMessageErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/email/messages/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[EmailMessage],
            error_mapper=get_email_message_error_mapper,
            request_options=request_options,
        )

    async def list_email_domains(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1EmailDomainsResponse, ListEmailDomainsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/email/domains"),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1EmailDomainsResponse],
            error_mapper=list_email_domains_error_mapper,
            request_options=request_options,
        )

    async def list_email_messages(
        self,
        *,
        status: Status3OrStr | None = None,
        limit: int | None = 25,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1EmailMessagesResponse, ListEmailMessagesErrorBody]:
        """Newest first, keyset-paginated. Test keys list test messages only.

        Args:
            status: Value sent with the request.
            limit: Value sent with the request.
            cursor: The ``nextCursor`` of the previous page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/email/messages"),
            query_params=[
                param[Status3OrStr | None]("status", status),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1EmailMessagesResponse],
            error_mapper=list_email_messages_error_mapper,
            request_options=request_options,
        )

    async def send_email(
        self,
        body: SendEmailRequest | SendEmailRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EmailMessage, SendEmailErrorBody]:
        """Send one message to up to 50 recipients (to + cc + bcc) from an address on one of your active sending
        domains. Gates run in order: field validation, business verification, the From domain's status, idempotency, a
        per-recipient rate on your plan, and a balance of at least ``recipients × rate``. The message is handed to the
        sending infrastructure and answered 202 as ``sent``; the charge happens on acceptance. A ``cn_test_`` key runs
        every gate and then simulates. Bodies are not stored after the handoff.

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/email/messages"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[SendEmailRequest | SendEmailRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[EmailMessage],
            error_mapper=send_email_error_mapper,
            request_options=request_options,
        )

    async def verify_email_domain(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EmailDomain, VerifyEmailDomainErrorBody]:
        """A real lookup against public DNS. Answers the domain with its new status; a failed check carries
        ``verificationError``.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/email/domains/{id}/verify"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[EmailDomain],
            error_mapper=verify_email_domain_error_mapper,
            request_options=request_options,
        )
