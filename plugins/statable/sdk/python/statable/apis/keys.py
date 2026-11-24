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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_api_key_error import CreateApiKeyErrorBody, create_api_key_error_mapper
from ..errors.list_api_key_events_error import ListApiKeyEventsErrorBody, list_api_key_events_error_mapper
from ..errors.list_api_keys_error import ListApiKeysErrorBody, list_api_keys_error_mapper
from ..errors.revoke_api_key_error import RevokeApiKeyErrorBody, revoke_api_key_error_mapper
from ..errors.rotate_api_key_error import RotateApiKeyErrorBody, rotate_api_key_error_mapper
from ..models.api_key_event_list import ApiKeyEventList
from ..models.api_key_list import ApiKeyList
from ..models.create_api_key_request import CreateApiKeyRequest, CreateApiKeyRequestDict
from ..models.created_api_key import CreatedApiKey
from ..server.server import Server


class Keys:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = KeysWithRawResponse(client, server, auth)

    def create_api_key(
        self,
        body: CreateApiKeyRequest | CreateApiKeyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreatedApiKey:
        """Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of the
        authenticating key's scopes (else 403 ``scope_escalation``), and a single-site key may only create keys locked
        to its own site (else 403 ``key_not_scoped``). ``expires_in_days`` defaults to 90 and is capped at 365 — unlike
        the dashboard, the API cannot mint a key that never expires. Max 10 active keys per account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created key, including the one-time raw token.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request (malformed body or a name outside
                1–100 characters), invalid_scope (scope not in the vocabulary), invalid_expiry (expires_in_days outside
                1–365), key_limit_reached (10 active keys already). Missing/malformed/invalid/expired/revoked bearer
                token (``unauthorized``). ``insufficient_scope`` (the key lacks ``keys:manage``), ``scope_escalation``
                (requested scopes exceed the authenticating key's scopes) or ``key_not_scoped`` (a single-site key tried
                to widen its site scope). ``write_disabled`` (the write surface is off) or ``unknown_site``
                (``website_id`` does not exist or the owner cannot reach it — deliberately indistinguishable). Hourly
                account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_api_key(body, request_options=request_options))

    def list_api_key_events(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiKeyEventList:
        """Returns the key's create / rotate / revoke events, newest first (revoked keys keep their trail).
        ``actor_key_id`` names the API key that performed the action, or null when it was done from the dashboard.

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The key's audit trail.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks ``keys:manage``), ``scope_escalation`` (requested scopes exceed the authenticating key's
                scopes) or ``key_not_scoped`` (a single-site key tried to widen its site scope). ``api_key_not_found`` —
                unknown, already revoked, or another account's key id (deliberately indistinguishable). Or
                ``write_disabled`` when the write surface is off. Hourly account (default 2000/h) or per-key (default
                600/h) limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers
                report the window that tripped (account on an account limit). Unexpected server error (``internal``).
                Report it with the ``request_id`` from the body or the X-Request-ID header: it is what lets the exact
                log entry be found, and without it a 500 can only be matched by guessing at a time window. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_api_key_events(id_, request_options=request_options))

    def list_api_keys(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiKeyList:
        """Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned here — the raw
        token exists only in the create and rotate responses.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The account's active keys.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks ``keys:manage``), ``scope_escalation`` (requested scopes exceed the authenticating key's
                scopes) or ``key_not_scoped`` (a single-site key tried to widen its site scope). ``write_disabled`` —
                the write surface is off (``API_WRITE_ENABLED=false``). 404 rather than 403 so a disabled surface is not
                advertised. Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``).
                Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped
                (account on an account limit). Unexpected server error (``internal``). Report it with the ``request_id``
                from the body or the X-Request-ID header: it is what lets the exact log entry be found, and without it a
                500 can only be matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_api_keys(request_options=request_options))

    def revoke_api_key(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409
        ``self_modification``).

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Revoked.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks ``keys:manage``), ``scope_escalation`` (requested scopes exceed the authenticating key's
                scopes) or ``key_not_scoped`` (a single-site key tried to widen its site scope). ``api_key_not_found`` —
                unknown, already revoked, or another account's key id (deliberately indistinguishable). Or
                ``write_disabled`` when the write surface is off. ``self_modification`` — a key may not rotate or revoke
                itself, so an agent cannot destroy the credential it is mid-flow with. Hourly account (default 2000/h)
                or per-key (default 600/h) limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The
                X-RateLimit-* headers report the window that tripped (account on an account limit). Unexpected server
                error (``internal``). Report it with the ``request_id`` from the body or the X-Request-ID header: it is
                what lets the exact log entry be found, and without it a 500 can only be matched by guessing at a time
                window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.revoke_api_key(id_, request_options=request_options))

    def rotate_api_key(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> CreatedApiKey:
        """Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and invalidates the old
        token immediately. The new token is returned exactly once. No request body. A key cannot rotate itself (409
        ``self_modification``).

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The rotated key, including the one-time raw token.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks ``keys:manage``), ``scope_escalation`` (requested scopes exceed the authenticating key's
                scopes) or ``key_not_scoped`` (a single-site key tried to widen its site scope). ``api_key_not_found`` —
                unknown, already revoked, or another account's key id (deliberately indistinguishable). Or
                ``write_disabled`` when the write surface is off. ``self_modification`` — a key may not rotate or revoke
                itself, so an agent cannot destroy the credential it is mid-flow with. Hourly account (default 2000/h)
                or per-key (default 600/h) limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The
                X-RateLimit-* headers report the window that tripped (account on an account limit). Unexpected server
                error (``internal``). Report it with the ``request_id`` from the body or the X-Request-ID header: it is
                what lets the exact log entry be found, and without it a 500 can only be matched by guessing at a time
                window. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.rotate_api_key(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> KeysWithRawResponse:
        return self._with_raw_response


class AsyncKeys:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncKeysWithRawResponse(client, server, auth)

    async def create_api_key(
        self,
        body: CreateApiKeyRequest | CreateApiKeyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreatedApiKey:
        """Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of the
        authenticating key's scopes (else 403 ``scope_escalation``), and a single-site key may only create keys locked
        to its own site (else 403 ``key_not_scoped``). ``expires_in_days`` defaults to 90 and is capped at 365 — unlike
        the dashboard, the API cannot mint a key that never expires. Max 10 active keys per account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created key, including the one-time raw token.

        Raises:
            ApiError: Invalid request. Branch on the stable ``code``: invalid_request (malformed body or a name outside
                1–100 characters), invalid_scope (scope not in the vocabulary), invalid_expiry (expires_in_days outside
                1–365), key_limit_reached (10 active keys already). Missing/malformed/invalid/expired/revoked bearer
                token (``unauthorized``). ``insufficient_scope`` (the key lacks ``keys:manage``), ``scope_escalation``
                (requested scopes exceed the authenticating key's scopes) or ``key_not_scoped`` (a single-site key tried
                to widen its site scope). ``write_disabled`` (the write surface is off) or ``unknown_site``
                (``website_id`` does not exist or the owner cannot reach it — deliberately indistinguishable). Hourly
                account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``). Retry after the
                ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped (account on an account
                limit). Unexpected server error (``internal``). Report it with the ``request_id`` from the body or the
                X-Request-ID header: it is what lets the exact log entry be found, and without it a 500 can only be
                matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_api_key(body, request_options=request_options))

    async def list_api_key_events(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiKeyEventList:
        """Returns the key's create / rotate / revoke events, newest first (revoked keys keep their trail).
        ``actor_key_id`` names the API key that performed the action, or null when it was done from the dashboard.

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The key's audit trail.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks ``keys:manage``), ``scope_escalation`` (requested scopes exceed the authenticating key's
                scopes) or ``key_not_scoped`` (a single-site key tried to widen its site scope). ``api_key_not_found`` —
                unknown, already revoked, or another account's key id (deliberately indistinguishable). Or
                ``write_disabled`` when the write surface is off. Hourly account (default 2000/h) or per-key (default
                600/h) limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers
                report the window that tripped (account on an account limit). Unexpected server error (``internal``).
                Report it with the ``request_id`` from the body or the X-Request-ID header: it is what lets the exact
                log entry be found, and without it a 500 can only be matched by guessing at a time window. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_api_key_events(id_, request_options=request_options))

    async def list_api_keys(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiKeyList:
        """Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned here — the raw
        token exists only in the create and rotate responses.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The account's active keys.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks ``keys:manage``), ``scope_escalation`` (requested scopes exceed the authenticating key's
                scopes) or ``key_not_scoped`` (a single-site key tried to widen its site scope). ``write_disabled`` —
                the write surface is off (``API_WRITE_ENABLED=false``). 404 rather than 403 so a disabled surface is not
                advertised. Hourly account (default 2000/h) or per-key (default 600/h) limit hit (``rate_limited``).
                Retry after the ``Retry-After`` seconds. The X-RateLimit-* headers report the window that tripped
                (account on an account limit). Unexpected server error (``internal``). Report it with the ``request_id``
                from the body or the X-Request-ID header: it is what lets the exact log entry be found, and without it a
                500 can only be matched by guessing at a time window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_api_keys(request_options=request_options))

    async def revoke_api_key(self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409
        ``self_modification``).

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Revoked.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks ``keys:manage``), ``scope_escalation`` (requested scopes exceed the authenticating key's
                scopes) or ``key_not_scoped`` (a single-site key tried to widen its site scope). ``api_key_not_found`` —
                unknown, already revoked, or another account's key id (deliberately indistinguishable). Or
                ``write_disabled`` when the write surface is off. ``self_modification`` — a key may not rotate or revoke
                itself, so an agent cannot destroy the credential it is mid-flow with. Hourly account (default 2000/h)
                or per-key (default 600/h) limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The
                X-RateLimit-* headers report the window that tripped (account on an account limit). Unexpected server
                error (``internal``). Report it with the ``request_id`` from the body or the X-Request-ID header: it is
                what lets the exact log entry be found, and without it a 500 can only be matched by guessing at a time
                window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.revoke_api_key(id_, request_options=request_options))

    async def rotate_api_key(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CreatedApiKey:
        """Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and invalidates the old
        token immediately. The new token is returned exactly once. No request body. A key cannot rotate itself (409
        ``self_modification``).

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The rotated key, including the one-time raw token.

        Raises:
            ApiError: Missing/malformed/invalid/expired/revoked bearer token (``unauthorized``). ``insufficient_scope``
                (the key lacks ``keys:manage``), ``scope_escalation`` (requested scopes exceed the authenticating key's
                scopes) or ``key_not_scoped`` (a single-site key tried to widen its site scope). ``api_key_not_found`` —
                unknown, already revoked, or another account's key id (deliberately indistinguishable). Or
                ``write_disabled`` when the write surface is off. ``self_modification`` — a key may not rotate or revoke
                itself, so an agent cannot destroy the credential it is mid-flow with. Hourly account (default 2000/h)
                or per-key (default 600/h) limit hit (``rate_limited``). Retry after the ``Retry-After`` seconds. The
                X-RateLimit-* headers report the window that tripped (account on an account limit). Unexpected server
                error (``internal``). Report it with the ``request_id`` from the body or the X-Request-ID header: it is
                what lets the exact log entry be found, and without it a 500 can only be matched by guessing at a time
                window. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.rotate_api_key(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncKeysWithRawResponse:
        return self._with_raw_response


class KeysWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_api_key(
        self,
        body: CreateApiKeyRequest | CreateApiKeyRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreatedApiKey, CreateApiKeyErrorBody]:
        """Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of the
        authenticating key's scopes (else 403 ``scope_escalation``), and a single-site key may only create keys locked
        to its own site (else 403 ``key_not_scoped``). ``expires_in_days`` defaults to 90 and is capped at 365 — unlike
        the dashboard, the API cannot mint a key that never expires. Max 10 active keys per account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/keys"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateApiKeyRequest | CreateApiKeyRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreatedApiKey],
            error_mapper=create_api_key_error_mapper,
            request_options=request_options,
        )

    def list_api_key_events(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKeyEventList, ListApiKeyEventsErrorBody]:
        """Returns the key's create / rotate / revoke events, newest first (revoked keys keep their trail).
        ``actor_key_id`` names the API key that performed the action, or null when it was done from the dashboard.

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/keys/{id}/events"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiKeyEventList],
            error_mapper=list_api_key_events_error_mapper,
            request_options=request_options,
        )

    def list_api_keys(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKeyList, ListApiKeysErrorBody]:
        """Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned here — the raw
        token exists only in the create and rotate responses.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/keys"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiKeyList],
            error_mapper=list_api_keys_error_mapper,
            request_options=request_options,
        )

    def revoke_api_key(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RevokeApiKeyErrorBody]:
        """Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409
        ``self_modification``).

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/keys/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=revoke_api_key_error_mapper,
            request_options=request_options,
        )

    def rotate_api_key(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreatedApiKey, RotateApiKeyErrorBody]:
        """Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and invalidates the old
        token immediately. The new token is returned exactly once. No request body. A key cannot rotate itself (409
        ``self_modification``).

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/keys/{id}/rotate"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreatedApiKey],
            error_mapper=rotate_api_key_error_mapper,
            request_options=request_options,
        )


class AsyncKeysWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_api_key(
        self,
        body: CreateApiKeyRequest | CreateApiKeyRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreatedApiKey, CreateApiKeyErrorBody]:
        """Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of the
        authenticating key's scopes (else 403 ``scope_escalation``), and a single-site key may only create keys locked
        to its own site (else 403 ``key_not_scoped``). ``expires_in_days`` defaults to 90 and is capped at 365 — unlike
        the dashboard, the API cannot mint a key that never expires. Max 10 active keys per account.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/keys"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateApiKeyRequest | CreateApiKeyRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreatedApiKey],
            error_mapper=create_api_key_error_mapper,
            request_options=request_options,
        )

    async def list_api_key_events(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKeyEventList, ListApiKeyEventsErrorBody]:
        """Returns the key's create / rotate / revoke events, newest first (revoked keys keep their trail).
        ``actor_key_id`` names the API key that performed the action, or null when it was done from the dashboard.

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/keys/{id}/events"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiKeyEventList],
            error_mapper=list_api_key_events_error_mapper,
            request_options=request_options,
        )

    async def list_api_keys(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKeyList, ListApiKeysErrorBody]:
        """Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned here — the raw
        token exists only in the create and rotate responses.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/keys"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiKeyList],
            error_mapper=list_api_keys_error_mapper,
            request_options=request_options,
        )

    async def revoke_api_key(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RevokeApiKeyErrorBody]:
        """Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409
        ``self_modification``).

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/keys/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=revoke_api_key_error_mapper,
            request_options=request_options,
        )

    async def rotate_api_key(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CreatedApiKey, RotateApiKeyErrorBody]:
        """Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and invalidates the old
        token immediately. The new token is returned exactly once. No request body. A key cannot rotate itself (409
        ``self_modification``).

        Args:
            id_: Numeric API key id (from GET /keys).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/keys/{id}/rotate"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreatedApiKey],
            error_mapper=rotate_api_key_error_mapper,
            request_options=request_options,
        )
