from __future__ import annotations

from typing import Any

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.delete_watchlist_krs_by_krs_error import (
    DeleteWatchlistKrsByKrsErrorBody,
    delete_watchlist_krs_by_krs_error_mapper,
)
from ..errors.get_watchlist_error import GetWatchlistErrorBody, get_watchlist_error_mapper
from ..errors.post_watchlist_krs_by_krs_error import (
    PostWatchlistKrsByKrsErrorBody,
    post_watchlist_krs_by_krs_error_mapper,
)
from ..models.watchlist_add_response import WatchlistAddResponse
from ..server.server import Server


class Watchlist:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WatchlistWithRawResponse(client, server, auth)

    def delete_watchlist_krs_by_krs(
        self,
        krs: str,
        *,
        dry_run: bool | None = False,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Removes a KRS company from the watchlist of the user linked to the API key. Reverses ``POST
        /watchlist/krs/{krs}``; the company can be added again at any time. Idempotent: ``removed: false`` when the
        company was not on the list. Use ``dry_run=true`` to see the outcome (``would_remove``) without writing.

        Args:
            krs: Value sent with the request.
            dry_run: When ``true``, the request is validated (key, KRS, plan limits) and the response says what would
                happen (``would_add`` / ``would_remove``), but nothing is written and no webhook fires.
            idempotency_key: Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by
                KRS, so repeating the same request — with or without this header — never creates a duplicate entry. The
                key is echoed back in the ``Idempotency-Key`` response header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removal result.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. API key is not linked to a user
                account. Resource not found. Rate limit (120 requests per minute per key) or monthly quota exceeded.
                ``Retry-After`` says how many seconds to wait before retrying. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_watchlist_krs_by_krs(
                krs, dry_run=dry_run, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    def get_watchlist(
        self, *, limit: int | None = 20, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Lists companies on the watchlist of the **user account linked to the API key**. Requires ``user_id`` on the
        key.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Watchlist page.

        Raises:
            ApiError: Missing, invalid, or revoked API key. API key is not linked to a user account. Rate limit (120
                requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait
                before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_watchlist(limit=limit, offset=offset, request_options=request_options)
        )

    def post_watchlist_krs_by_krs(
        self,
        krs: str,
        *,
        dry_run: bool | None = False,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WatchlistAddResponse:
        """Adds a company to the **watchlist of the user account linked to the API key**.

        The company is identified by **KRS** (Polish court registry number). Digits only; leading zeros are optional
        (normalized to 10 digits server-side).

        **Create-or-keep in one call, keyed by KRS:** if the company is already on the watchlist, the response returns
        ``already_following: true`` and no duplicate entry is created, so the call is safe to retry.
        ``already_following`` tells which branch ran.

        **Reversible:** ``DELETE /watchlist/krs/{krs}`` removes the entry at any time. Use ``dry_run=true`` to check the
        plan limit and the outcome without writing.

        Requires an API key associated with a Compabase portal user account (``user_id`` on the key).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            dry_run: When ``true``, the request is validated (key, KRS, plan limits) and the response says what would
                happen (``would_add`` / ``would_remove``), but nothing is written and no webhook fires.
            idempotency_key: Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by
                KRS, so repeating the same request — with or without this header — never creates a duplicate entry. The
                key is echoed back in the ``Idempotency-Key`` response header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company added to watchlist (or already followed).

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. API key is not linked to a user
                account. Resource not found. Rate limit (120 requests per minute per key) or monthly quota exceeded.
                ``Retry-After`` says how many seconds to wait before retrying. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.post_watchlist_krs_by_krs(
                krs, dry_run=dry_run, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WatchlistWithRawResponse:
        return self._with_raw_response


class AsyncWatchlist:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWatchlistWithRawResponse(client, server, auth)

    async def delete_watchlist_krs_by_krs(
        self,
        krs: str,
        *,
        dry_run: bool | None = False,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Removes a KRS company from the watchlist of the user linked to the API key. Reverses ``POST
        /watchlist/krs/{krs}``; the company can be added again at any time. Idempotent: ``removed: false`` when the
        company was not on the list. Use ``dry_run=true`` to see the outcome (``would_remove``) without writing.

        Args:
            krs: Value sent with the request.
            dry_run: When ``true``, the request is validated (key, KRS, plan limits) and the response says what would
                happen (``would_add`` / ``would_remove``), but nothing is written and no webhook fires.
            idempotency_key: Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by
                KRS, so repeating the same request — with or without this header — never creates a duplicate entry. The
                key is echoed back in the ``Idempotency-Key`` response header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removal result.

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. API key is not linked to a user
                account. Resource not found. Rate limit (120 requests per minute per key) or monthly quota exceeded.
                ``Retry-After`` says how many seconds to wait before retrying. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_watchlist_krs_by_krs(
                krs, dry_run=dry_run, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    async def get_watchlist(
        self,
        *,
        limit: int | None = 20,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Lists companies on the watchlist of the **user account linked to the API key**. Requires ``user_id`` on the
        key.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Watchlist page.

        Raises:
            ApiError: Missing, invalid, or revoked API key. API key is not linked to a user account. Rate limit (120
                requests per minute per key) or monthly quota exceeded. ``Retry-After`` says how many seconds to wait
                before retrying. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_watchlist(limit=limit, offset=offset, request_options=request_options)
        )

    async def post_watchlist_krs_by_krs(
        self,
        krs: str,
        *,
        dry_run: bool | None = False,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WatchlistAddResponse:
        """Adds a company to the **watchlist of the user account linked to the API key**.

        The company is identified by **KRS** (Polish court registry number). Digits only; leading zeros are optional
        (normalized to 10 digits server-side).

        **Create-or-keep in one call, keyed by KRS:** if the company is already on the watchlist, the response returns
        ``already_following: true`` and no duplicate entry is created, so the call is safe to retry.
        ``already_following`` tells which branch ran.

        **Reversible:** ``DELETE /watchlist/krs/{krs}`` removes the entry at any time. Use ``dry_run=true`` to check the
        plan limit and the outcome without writing.

        Requires an API key associated with a Compabase portal user account (``user_id`` on the key).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            dry_run: When ``true``, the request is validated (key, KRS, plan limits) and the response says what would
                happen (``would_add`` / ``would_remove``), but nothing is written and no webhook fires.
            idempotency_key: Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by
                KRS, so repeating the same request — with or without this header — never creates a duplicate entry. The
                key is echoed back in the ``Idempotency-Key`` response header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company added to watchlist (or already followed).

        Raises:
            ApiError: Invalid request parameters. Missing, invalid, or revoked API key. API key is not linked to a user
                account. Resource not found. Rate limit (120 requests per minute per key) or monthly quota exceeded.
                ``Retry-After`` says how many seconds to wait before retrying. ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.post_watchlist_krs_by_krs(
                krs, dry_run=dry_run, idempotency_key=idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWatchlistWithRawResponse:
        return self._with_raw_response


class WatchlistWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_watchlist_krs_by_krs(
        self,
        krs: str,
        *,
        dry_run: bool | None = False,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteWatchlistKrsByKrsErrorBody]:
        """Removes a KRS company from the watchlist of the user linked to the API key. Reverses ``POST
        /watchlist/krs/{krs}``; the company can be added again at any time. Idempotent: ``removed: false`` when the
        company was not on the list. Use ``dry_run=true`` to see the outcome (``would_remove``) without writing.

        Args:
            krs: Value sent with the request.
            dry_run: When ``true``, the request is validated (key, KRS, plan limits) and the response says what would
                happen (``would_add`` / ``would_remove``), but nothing is written and no webhook fires.
            idempotency_key: Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by
                KRS, so repeating the same request — with or without this header — never creates a duplicate entry. The
                key is echoed back in the ``Idempotency-Key`` response header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/watchlist/krs/{krs}"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[bool | None]("dry_run", dry_run)],
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=delete_watchlist_krs_by_krs_error_mapper,
            request_options=request_options,
        )

    def get_watchlist(
        self, *, limit: int | None = 20, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetWatchlistErrorBody]:
        """Lists companies on the watchlist of the **user account linked to the API key**. Requires ``user_id`` on the
        key.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/watchlist"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[Any],
            error_mapper=get_watchlist_error_mapper,
            request_options=request_options,
        )

    def post_watchlist_krs_by_krs(
        self,
        krs: str,
        *,
        dry_run: bool | None = False,
        idempotency_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistAddResponse, PostWatchlistKrsByKrsErrorBody]:
        """Adds a company to the **watchlist of the user account linked to the API key**.

        The company is identified by **KRS** (Polish court registry number). Digits only; leading zeros are optional
        (normalized to 10 digits server-side).

        **Create-or-keep in one call, keyed by KRS:** if the company is already on the watchlist, the response returns
        ``already_following: true`` and no duplicate entry is created, so the call is safe to retry.
        ``already_following`` tells which branch ran.

        **Reversible:** ``DELETE /watchlist/krs/{krs}`` removes the entry at any time. Use ``dry_run=true`` to check the
        plan limit and the outcome without writing.

        Requires an API key associated with a Compabase portal user account (``user_id`` on the key).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            dry_run: When ``true``, the request is validated (key, KRS, plan limits) and the response says what would
                happen (``would_add`` / ``would_remove``), but nothing is written and no webhook fires.
            idempotency_key: Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by
                KRS, so repeating the same request — with or without this header — never creates a duplicate entry. The
                key is echoed back in the ``Idempotency-Key`` response header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/watchlist/krs/{krs}"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[bool | None]("dry_run", dry_run)],
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[WatchlistAddResponse],
            error_mapper=post_watchlist_krs_by_krs_error_mapper,
            request_options=request_options,
        )


class AsyncWatchlistWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_watchlist_krs_by_krs(
        self,
        krs: str,
        *,
        dry_run: bool | None = False,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteWatchlistKrsByKrsErrorBody]:
        """Removes a KRS company from the watchlist of the user linked to the API key. Reverses ``POST
        /watchlist/krs/{krs}``; the company can be added again at any time. Idempotent: ``removed: false`` when the
        company was not on the list. Use ``dry_run=true`` to see the outcome (``would_remove``) without writing.

        Args:
            krs: Value sent with the request.
            dry_run: When ``true``, the request is validated (key, KRS, plan limits) and the response says what would
                happen (``would_add`` / ``would_remove``), but nothing is written and no webhook fires.
            idempotency_key: Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by
                KRS, so repeating the same request — with or without this header — never creates a duplicate entry. The
                key is echoed back in the ``Idempotency-Key`` response header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/watchlist/krs/{krs}"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[bool | None]("dry_run", dry_run)],
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=delete_watchlist_krs_by_krs_error_mapper,
            request_options=request_options,
        )

    async def get_watchlist(
        self,
        *,
        limit: int | None = 20,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetWatchlistErrorBody]:
        """Lists companies on the watchlist of the **user account linked to the API key**. Requires ``user_id`` on the
        key.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/watchlist"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[Any],
            error_mapper=get_watchlist_error_mapper,
            request_options=request_options,
        )

    async def post_watchlist_krs_by_krs(
        self,
        krs: str,
        *,
        dry_run: bool | None = False,
        idempotency_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistAddResponse, PostWatchlistKrsByKrsErrorBody]:
        """Adds a company to the **watchlist of the user account linked to the API key**.

        The company is identified by **KRS** (Polish court registry number). Digits only; leading zeros are optional
        (normalized to 10 digits server-side).

        **Create-or-keep in one call, keyed by KRS:** if the company is already on the watchlist, the response returns
        ``already_following: true`` and no duplicate entry is created, so the call is safe to retry.
        ``already_following`` tells which branch ran.

        **Reversible:** ``DELETE /watchlist/krs/{krs}`` removes the entry at any time. Use ``dry_run=true`` to check the
        plan limit and the outcome without writing.

        Requires an API key associated with a Compabase portal user account (``user_id`` on the key).

        Args:
            krs: KRS input is normalized by stripping non-digits and left-padding to 10 digits. After normalization, KRS
                must contain exactly 10 digits; otherwise request fails with ``400 INVALID_KRS``.
            dry_run: When ``true``, the request is validated (key, KRS, plan limits) and the response says what would
                happen (``would_add`` / ``would_remove``), but nothing is written and no webhook fires.
            idempotency_key: Optional idempotency key (1-255 characters, e.g. a UUID). Watchlist writes are keyed by
                KRS, so repeating the same request — with or without this header — never creates a duplicate entry. The
                key is echoed back in the ``Idempotency-Key`` response header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/watchlist/krs/{krs}"),
            path_params=[param[str]("krs", krs)],
            query_params=[param[bool | None]("dry_run", dry_run)],
            headers=[param[str | None]("Idempotency-Key", idempotency_key)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[WatchlistAddResponse],
            error_mapper=post_watchlist_krs_by_krs_error_mapper,
            request_options=request_options,
        )
