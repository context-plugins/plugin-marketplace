from __future__ import annotations

from uuid import UUID, uuid4

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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.cancel_payout_link_error import CancelPayoutLinkErrorBody, cancel_payout_link_error_mapper
from ..errors.create_payout_link_error import CreatePayoutLinkErrorBody, create_payout_link_error_mapper
from ..errors.fetch_payout_link_error import FetchPayoutLinkErrorBody, fetch_payout_link_error_mapper
from ..errors.list_payout_links_error import ListPayoutLinksErrorBody, list_payout_links_error_mapper
from ..models.payout_link import PayoutLink
from ..models.payout_links_request import PayoutLinksRequest, PayoutLinksRequestDict
from ..models.payout_links_response import PayoutLinksResponse
from ..server.server import Server


class XPayoutLinks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = XPayoutLinksWithRawResponse(client, server, auth)

    def cancel_payout_link(
        self, payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PayoutLink:
        """Cancel a payout link that is in ``issued`` or ``pending`` state.

        Args:
            payout_link_id: Unique identifier of the payout link to cancel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout link cancelled

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.cancel_payout_link(payout_link_id, request_options=request_options))

    def create_payout_link(
        self, body: PayoutLinksRequest | PayoutLinksRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> PayoutLink:
        """Send a payout link to a contact when fund account details are unavailable. expire_by must be at least 15
        minutes in the future.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout link created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_payout_link(body, request_options=request_options))

    def fetch_payout_link(
        self, payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PayoutLink:
        """Fetch details of a specific payout link by its ID.

        Args:
            payout_link_id: Unique identifier of the payout link (e.g. ``poutlk_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout link details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_payout_link(payout_link_id, request_options=request_options))

    def list_payout_links(
        self,
        *,
        contact_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PayoutLinksResponse:
        """List all payout links. Filter by contact ID, status, or date range.

        Args:
            contact_id: Filter payout links by the contact ID of the recipient.
            from_: Unix timestamp. Only payout links created from this timestamp onwards are returned.
            to: Unix timestamp. Only payout links created before this timestamp are returned.
            count: Number of payout links to return. Default: 10.
            skip: Number of payout links to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payout links

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_payout_links(
                contact_id=contact_id, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> XPayoutLinksWithRawResponse:
        return self._with_raw_response


class AsyncXPayoutLinks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncXPayoutLinksWithRawResponse(client, server, auth)

    async def cancel_payout_link(
        self, payout_link_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PayoutLink:
        """Cancel a payout link that is in ``issued`` or ``pending`` state.

        Args:
            payout_link_id: Unique identifier of the payout link to cancel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout link cancelled

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.cancel_payout_link(payout_link_id, request_options=request_options))

    async def create_payout_link(
        self,
        body: PayoutLinksRequest | PayoutLinksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PayoutLink:
        """Send a payout link to a contact when fund account details are unavailable. expire_by must be at least 15
        minutes in the future.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout link created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_payout_link(body, request_options=request_options))

    async def fetch_payout_link(
        self, payout_link_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PayoutLink:
        """Fetch details of a specific payout link by its ID.

        Args:
            payout_link_id: Unique identifier of the payout link (e.g. ``poutlk_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout link details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_payout_link(payout_link_id, request_options=request_options))

    async def list_payout_links(
        self,
        *,
        contact_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PayoutLinksResponse:
        """List all payout links. Filter by contact ID, status, or date range.

        Args:
            contact_id: Filter payout links by the contact ID of the recipient.
            from_: Unix timestamp. Only payout links created from this timestamp onwards are returned.
            to: Unix timestamp. Only payout links created before this timestamp are returned.
            count: Number of payout links to return. Default: 10.
            skip: Number of payout links to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payout links

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_payout_links(
                contact_id=contact_id, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncXPayoutLinksWithRawResponse:
        return self._with_raw_response


class XPayoutLinksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_payout_link(
        self, payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutLink, CancelPayoutLinkErrorBody]:
        """Cancel a payout link that is in ``issued`` or ``pending`` state.

        Args:
            payout_link_id: Unique identifier of the payout link to cancel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payout-links/{payout_link_id}/cancel"),
            path_params=[param[str]("payout_link_id", payout_link_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PayoutLink],
            error_mapper=cancel_payout_link_error_mapper,
            request_options=request_options,
        )

    def create_payout_link(
        self, body: PayoutLinksRequest | PayoutLinksRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutLink, CreatePayoutLinkErrorBody]:
        """Send a payout link to a contact when fund account details are unavailable. expire_by must be at least 15
        minutes in the future.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payout-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PayoutLinksRequest | PayoutLinksRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PayoutLink],
            error_mapper=create_payout_link_error_mapper,
            request_options=request_options,
        )

    def fetch_payout_link(
        self, payout_link_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutLink, FetchPayoutLinkErrorBody]:
        """Fetch details of a specific payout link by its ID.

        Args:
            payout_link_id: Unique identifier of the payout link (e.g. ``poutlk_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payout-links/{payout_link_id}"),
            path_params=[param[str]("payout_link_id", payout_link_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PayoutLink],
            error_mapper=fetch_payout_link_error_mapper,
            request_options=request_options,
        )

    def list_payout_links(
        self,
        *,
        contact_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutLinksResponse, ListPayoutLinksErrorBody]:
        """List all payout links. Filter by contact ID, status, or date range.

        Args:
            contact_id: Filter payout links by the contact ID of the recipient.
            from_: Unix timestamp. Only payout links created from this timestamp onwards are returned.
            to: Unix timestamp. Only payout links created before this timestamp are returned.
            count: Number of payout links to return. Default: 10.
            skip: Number of payout links to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payout-links"),
            query_params=[
                param[str | None]("contact_id", contact_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PayoutLinksResponse],
            error_mapper=list_payout_links_error_mapper,
            request_options=request_options,
        )


class AsyncXPayoutLinksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_payout_link(
        self, payout_link_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutLink, CancelPayoutLinkErrorBody]:
        """Cancel a payout link that is in ``issued`` or ``pending`` state.

        Args:
            payout_link_id: Unique identifier of the payout link to cancel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payout-links/{payout_link_id}/cancel"),
            path_params=[param[str]("payout_link_id", payout_link_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PayoutLink],
            error_mapper=cancel_payout_link_error_mapper,
            request_options=request_options,
        )

    async def create_payout_link(
        self,
        body: PayoutLinksRequest | PayoutLinksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutLink, CreatePayoutLinkErrorBody]:
        """Send a payout link to a contact when fund account details are unavailable. expire_by must be at least 15
        minutes in the future.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payout-links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PayoutLinksRequest | PayoutLinksRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PayoutLink],
            error_mapper=create_payout_link_error_mapper,
            request_options=request_options,
        )

    async def fetch_payout_link(
        self, payout_link_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutLink, FetchPayoutLinkErrorBody]:
        """Fetch details of a specific payout link by its ID.

        Args:
            payout_link_id: Unique identifier of the payout link (e.g. ``poutlk_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payout-links/{payout_link_id}"),
            path_params=[param[str]("payout_link_id", payout_link_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PayoutLink],
            error_mapper=fetch_payout_link_error_mapper,
            request_options=request_options,
        )

    async def list_payout_links(
        self,
        *,
        contact_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutLinksResponse, ListPayoutLinksErrorBody]:
        """List all payout links. Filter by contact ID, status, or date range.

        Args:
            contact_id: Filter payout links by the contact ID of the recipient.
            from_: Unix timestamp. Only payout links created from this timestamp onwards are returned.
            to: Unix timestamp. Only payout links created before this timestamp are returned.
            count: Number of payout links to return. Default: 10.
            skip: Number of payout links to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payout-links"),
            query_params=[
                param[str | None]("contact_id", contact_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PayoutLinksResponse],
            error_mapper=list_payout_links_error_mapper,
            request_options=request_options,
        )
