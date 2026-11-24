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
from ..errors.api_key_usage_error import ApiKeyUsageErrorBody, api_key_usage_error_mapper
from ..errors.create_api_key_error import CreateApiKeyErrorBody, create_api_key_error_mapper
from ..errors.delete_api_key_error import DeleteApiKeyErrorBody, delete_api_key_error_mapper
from ..errors.list_api_keys_error import ListApiKeysErrorBody, list_api_keys_error_mapper
from ..errors.rotate_api_key_error import RotateApiKeyErrorBody, rotate_api_key_error_mapper
from ..models.api_key import ApiKey
from ..models.api_key_usage import ApiKeyUsage
from ..models.create_api_key import CreateApiKey, CreateApiKeyDict
from ..server.server import Server


class ApiKeys:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ApiKeysWithRawResponse(client, server, auth)

    def api_key_usage(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiKeyUsage:
        """Returns how many requests authenticated with this key over the trailing 30 days. Pair with ``last_used`` /
        ``last_used_ip`` from the list endpoint to audit a credential before revoking or rotating it.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage over the trailing 30-day window

        Raises:
            ApiError: Missing or invalid session / key No key with this id belongs to you ``error`` is ``ApiErrorBody |
                RawError``."""
        return unwrap(self._with_raw_response.api_key_usage(id_, request_options=request_options))

    def create_api_key(
        self, body: CreateApiKey | CreateApiKeyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiKey:
        """Generates a new workspace-scoped API key. The full ``key_value`` is returned **only** in this response —
        Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key immediately on the client side. If
        you lose it, rotate the key.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key created. ``key_value`` is shown in full here for the only time.

        Raises:
            ApiError: Missing or invalid session / key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.create_api_key(body, request_options=request_options))

    def delete_api_key(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on their next
        call.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key deleted (idempotent — succeeds even if already absent)

        Raises:
            ApiError: Missing or invalid session / key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.delete_api_key(id_, request_options=request_options))

    def list_api_keys(self, *, request_options: RequestOptionsOrDict | None = None) -> list[ApiKey]:
        """Returns all API keys belonging to the calling user. ``key_value`` is ``null`` on every entry — only the
        display ``key_prefix`` is recoverable after creation. To get a fresh raw value for a key, rotate it: ``POST
        /api/keys/{id}/rotate``.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All API keys for the calling user

        Raises:
            ApiError: Missing or invalid session / key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.list_api_keys(request_options=request_options))

    def rotate_api_key(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiKey:
        """Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and expiry; the old
        secret stops authenticating the moment this call returns; the new secret is in ``key_value`` — shown only in
        this response. Prefer this over delete-and-recreate: the key's identity survives and there is no window with
        zero valid credentials. ``last_used`` resets to ``null`` because the new secret has never been used.

        Accepts either a session cookie or an existing API key as auth. A key can rotate itself.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key rotated. ``key_value`` holds the NEW secret, shown in full here for the only time.

        Raises:
            ApiError: Missing or invalid session / key No key with this id belongs to you ``error`` is ``ApiErrorBody |
                RawError``."""
        return unwrap(self._with_raw_response.rotate_api_key(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> ApiKeysWithRawResponse:
        return self._with_raw_response


class AsyncApiKeys:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncApiKeysWithRawResponse(client, server, auth)

    async def api_key_usage(self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiKeyUsage:
        """Returns how many requests authenticated with this key over the trailing 30 days. Pair with ``last_used`` /
        ``last_used_ip`` from the list endpoint to audit a credential before revoking or rotating it.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage over the trailing 30-day window

        Raises:
            ApiError: Missing or invalid session / key No key with this id belongs to you ``error`` is ``ApiErrorBody |
                RawError``."""
        return unwrap(await self._with_raw_response.api_key_usage(id_, request_options=request_options))

    async def create_api_key(
        self, body: CreateApiKey | CreateApiKeyDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiKey:
        """Generates a new workspace-scoped API key. The full ``key_value`` is returned **only** in this response —
        Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key immediately on the client side. If
        you lose it, rotate the key.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key created. ``key_value`` is shown in full here for the only time.

        Raises:
            ApiError: Missing or invalid session / key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.create_api_key(body, request_options=request_options))

    async def delete_api_key(self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on their next
        call.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key deleted (idempotent — succeeds even if already absent)

        Raises:
            ApiError: Missing or invalid session / key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.delete_api_key(id_, request_options=request_options))

    async def list_api_keys(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[ApiKey]:
        """Returns all API keys belonging to the calling user. ``key_value`` is ``null`` on every entry — only the
        display ``key_prefix`` is recoverable after creation. To get a fresh raw value for a key, rotate it: ``POST
        /api/keys/{id}/rotate``.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All API keys for the calling user

        Raises:
            ApiError: Missing or invalid session / key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.list_api_keys(request_options=request_options))

    async def rotate_api_key(self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiKey:
        """Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and expiry; the old
        secret stops authenticating the moment this call returns; the new secret is in ``key_value`` — shown only in
        this response. Prefer this over delete-and-recreate: the key's identity survives and there is no window with
        zero valid credentials. ``last_used`` resets to ``null`` because the new secret has never been used.

        Accepts either a session cookie or an existing API key as auth. A key can rotate itself.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key rotated. ``key_value`` holds the NEW secret, shown in full here for the only time.

        Raises:
            ApiError: Missing or invalid session / key No key with this id belongs to you ``error`` is ``ApiErrorBody |
                RawError``."""
        return unwrap(await self._with_raw_response.rotate_api_key(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncApiKeysWithRawResponse:
        return self._with_raw_response


class ApiKeysWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def api_key_usage(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKeyUsage, ApiKeyUsageErrorBody]:
        """Returns how many requests authenticated with this key over the trailing 30 days. Pair with ``last_used`` /
        ``last_used_ip`` from the list endpoint to audit a credential before revoking or rotating it.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/keys/{id}/usage"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiKeyUsage],
            error_mapper=api_key_usage_error_mapper,
            request_options=request_options,
        )

    def create_api_key(
        self, body: CreateApiKey | CreateApiKeyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKey, CreateApiKeyErrorBody]:
        """Generates a new workspace-scoped API key. The full ``key_value`` is returned **only** in this response —
        Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key immediately on the client side. If
        you lose it, rotate the key.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/keys"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateApiKey | CreateApiKeyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiKey],
            error_mapper=create_api_key_error_mapper,
            request_options=request_options,
        )

    def delete_api_key(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiKeyErrorBody]:
        """Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on their next
        call.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/keys/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_api_key_error_mapper,
            request_options=request_options,
        )

    def list_api_keys(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[ApiKey], ListApiKeysErrorBody]:
        """Returns all API keys belonging to the calling user. ``key_value`` is ``null`` on every entry — only the
        display ``key_prefix`` is recoverable after creation. To get a fresh raw value for a key, rotate it: ``POST
        /api/keys/{id}/rotate``.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/keys"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[list[ApiKey]],
            error_mapper=list_api_keys_error_mapper,
            request_options=request_options,
        )

    def rotate_api_key(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKey, RotateApiKeyErrorBody]:
        """Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and expiry; the old
        secret stops authenticating the moment this call returns; the new secret is in ``key_value`` — shown only in
        this response. Prefer this over delete-and-recreate: the key's identity survives and there is no window with
        zero valid credentials. ``last_used`` resets to ``null`` because the new secret has never been used.

        Accepts either a session cookie or an existing API key as auth. A key can rotate itself.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/keys/{id}/rotate"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiKey],
            error_mapper=rotate_api_key_error_mapper,
            request_options=request_options,
        )


class AsyncApiKeysWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def api_key_usage(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKeyUsage, ApiKeyUsageErrorBody]:
        """Returns how many requests authenticated with this key over the trailing 30 days. Pair with ``last_used`` /
        ``last_used_ip`` from the list endpoint to audit a credential before revoking or rotating it.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/keys/{id}/usage"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiKeyUsage],
            error_mapper=api_key_usage_error_mapper,
            request_options=request_options,
        )

    async def create_api_key(
        self, body: CreateApiKey | CreateApiKeyDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKey, CreateApiKeyErrorBody]:
        """Generates a new workspace-scoped API key. The full ``key_value`` is returned **only** in this response —
        Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key immediately on the client side. If
        you lose it, rotate the key.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/keys"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateApiKey | CreateApiKeyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiKey],
            error_mapper=create_api_key_error_mapper,
            request_options=request_options,
        )

    async def delete_api_key(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteApiKeyErrorBody]:
        """Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on their next
        call.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/keys/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_api_key_error_mapper,
            request_options=request_options,
        )

    async def list_api_keys(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[ApiKey], ListApiKeysErrorBody]:
        """Returns all API keys belonging to the calling user. ``key_value`` is ``null`` on every entry — only the
        display ``key_prefix`` is recoverable after creation. To get a fresh raw value for a key, rotate it: ``POST
        /api/keys/{id}/rotate``.

        Accepts either a session cookie or an existing API key as auth.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/keys"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[list[ApiKey]],
            error_mapper=list_api_keys_error_mapper,
            request_options=request_options,
        )

    async def rotate_api_key(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiKey, RotateApiKeyErrorBody]:
        """Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and expiry; the old
        secret stops authenticating the moment this call returns; the new secret is in ``key_value`` — shown only in
        this response. Prefer this over delete-and-recreate: the key's identity survives and there is no window with
        zero valid credentials. ``last_used`` resets to ``null`` because the new secret has never been used.

        Accepts either a session cookie or an existing API key as auth. A key can rotate itself.

        Args:
            id_: API key ID (from the ``id`` field on create / list)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/keys/{id}/rotate"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiKey],
            error_mapper=rotate_api_key_error_mapper,
            request_options=request_options,
        )
