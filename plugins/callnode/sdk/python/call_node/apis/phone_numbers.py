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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_number_error import GetNumberErrorBody, get_number_error_mapper
from ..errors.list_numbers_error import ListNumbersErrorBody, list_numbers_error_mapper
from ..errors.purchase_number_error import PurchaseNumberErrorBody, purchase_number_error_mapper
from ..errors.release_number_error import ReleaseNumberErrorBody, release_number_error_mapper
from ..errors.search_available_numbers_error import (
    SearchAvailableNumbersErrorBody,
    search_available_numbers_error_mapper,
)
from ..errors.update_number_error import UpdateNumberErrorBody, update_number_error_mapper
from ..models.api_v1_numbers_available_response import ApiV1NumbersAvailableResponse
from ..models.api_v1_numbers_request import ApiV1NumbersRequest, ApiV1NumbersRequestDict
from ..models.api_v1_numbers_response import ApiV1NumbersResponse
from ..models.api_v1_numbers_response1 import ApiV1NumbersResponse1
from ..models.api_v1_numbers_response3 import ApiV1NumbersResponse3
from ..models.enums.prefix import PrefixOrStr
from ..models.enums.purchase_source1 import PurchaseSource1OrStr
from ..models.enums.type3 import Type3, Type3OrStr
from ..models.purchase_number_request import PurchaseNumberRequest, PurchaseNumberRequestDict
from ..models.purchase_number_response import PurchaseNumberResponse
from ..server.server import Server


class PhoneNumbers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PhoneNumbersWithRawResponse(client, server, auth)

    def get_number(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1NumbersResponse1:
        """Send a ``GET`` request.

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The number and its webhook configuration.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_number(id_, request_options=request_options))

    def list_numbers(
        self,
        *,
        status: str | None = None,
        type_: Type3OrStr | None = None,
        purchase_source: PurchaseSource1OrStr | None = None,
        tag: str | None = None,
        q: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1NumbersResponse:
        """Your numbers, newest first. Every filter is applied server-side and they combine (AND).

        Args:
            status: Filter by status, e.g. ``active``.
            type_: Value sent with the request.
            purchase_source: Numbers bought via the dashboard (``web``) or this API (``api``).
            tag: Numbers carrying this exact tag (as stored; up to 24 characters).
            q: Substring match on the number's digits, the friendly name (case-insensitive), or a tag.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Your numbers, newest first.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_numbers(
                status=status,
                type_=type_,
                purchase_source=purchase_source,
                tag=tag,
                q=q,
                request_options=request_options,
            ),
        )

    def purchase_number(
        self,
        body: PurchaseNumberRequest | PurchaseNumberRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PurchaseNumberResponse:
        """Purchases a number found via search and bills your wallet for the first month at your plan's rate (no setup
        fee; an included Pro Bundle number costs nothing). Voice and messaging webhooks can be provisioned in the same
        call, so the number is fully wired the moment it activates — no dashboard visit needed.

        ``type`` is optional and derived from the number itself (8NN prefixes are toll-free). Purchasing is idempotent
        on the number: re-purchasing a number you already own returns ``200`` with the existing record instead of
        billing twice. A number you previously released is automatically restored from the recycle bin rather than
        re-ordered.

        A2P messaging registration provisions asynchronously after purchase — the number's ``messaging.ready`` flag
        flips to ``true`` when it can send SMS/MMS.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Number purchased, billed, and configured.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. Insufficient wallet balance (``insufficient_balance``). The body includes
                ``required``, ``current``, and ``needed`` amounts. The number is not available for purchase
                (``number_unavailable``). The carrier order failed (``provider_error``). Nothing was billed. ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.purchase_number(body, request_options=request_options))

    def release_number(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1NumbersResponse3:
        """Releases the number and stops its billing. Released numbers are parked in a recycle bin tied to your account
        — re-purchasing the same number later restores it (with fresh billing) instead of losing it forever.

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Released. ``restorable`` tells you whether it can be re-purchased later.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.release_number(id_, request_options=request_options))

    def search_available_numbers(
        self,
        *,
        type_: Type3OrStr | None = Type3.LOCAL,
        area_code: str | None = None,
        prefix: PrefixOrStr | None = None,
        vanity: str | None = None,
        quantity: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1NumbersAvailableResponse:
        """Searches live carrier inventory for numbers you can purchase right now. Local searches require ``areaCode``;
        toll-free searches accept an optional ``prefix`` (800–888) or a ``vanity`` word. The ``pricing`` block reflects
        what **your** account would pay today — Pro Bundle discounts and included-number slots are applied
        automatically.

        Args:
            type_: Value sent with the request.
            area_code: 3-digit area code. Required when ``type`` is ``local``.
            prefix: Toll-free prefix filter. 800 and 822 are usually exhausted.
            vanity: Toll-free vanity word, 4–7 letters or digits (e.g. NEWCAR). Takes precedence over ``prefix``.
            quantity: How many candidates to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching inventory plus your current pricing. An empty ``numbers`` array means no inventory in that area —
            try another area code or prefix.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. The carrier search is temporarily unavailable (``search_failed``).
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.search_available_numbers(
                type_=type_,
                area_code=area_code,
                prefix=prefix,
                vanity=vanity,
                quantity=quantity,
                request_options=request_options,
            ),
        )

    def update_number(
        self,
        id_: str,
        body: ApiV1NumbersRequest | ApiV1NumbersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1NumbersResponse1:
        """Provisions or updates the voice webhook (your AI agent endpoint), the messaging webhook, their
        authentication, and the friendly name. Only the fields you send change; webhook secrets are write-only and never
        echoed back (responses report ``valueSet: true`` instead).

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated number.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. No such resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_number(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PhoneNumbersWithRawResponse:
        return self._with_raw_response


class AsyncPhoneNumbers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPhoneNumbersWithRawResponse(client, server, auth)

    async def get_number(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1NumbersResponse1:
        """Send a ``GET`` request.

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The number and its webhook configuration.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_number(id_, request_options=request_options))

    async def list_numbers(
        self,
        *,
        status: str | None = None,
        type_: Type3OrStr | None = None,
        purchase_source: PurchaseSource1OrStr | None = None,
        tag: str | None = None,
        q: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1NumbersResponse:
        """Your numbers, newest first. Every filter is applied server-side and they combine (AND).

        Args:
            status: Filter by status, e.g. ``active``.
            type_: Value sent with the request.
            purchase_source: Numbers bought via the dashboard (``web``) or this API (``api``).
            tag: Numbers carrying this exact tag (as stored; up to 24 characters).
            q: Substring match on the number's digits, the friendly name (case-insensitive), or a tag.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Your numbers, newest first.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. ``error``
                is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_numbers(
                status=status,
                type_=type_,
                purchase_source=purchase_source,
                tag=tag,
                q=q,
                request_options=request_options,
            ),
        )

    async def purchase_number(
        self,
        body: PurchaseNumberRequest | PurchaseNumberRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PurchaseNumberResponse:
        """Purchases a number found via search and bills your wallet for the first month at your plan's rate (no setup
        fee; an included Pro Bundle number costs nothing). Voice and messaging webhooks can be provisioned in the same
        call, so the number is fully wired the moment it activates — no dashboard visit needed.

        ``type`` is optional and derived from the number itself (8NN prefixes are toll-free). Purchasing is idempotent
        on the number: re-purchasing a number you already own returns ``200`` with the existing record instead of
        billing twice. A number you previously released is automatically restored from the recycle bin rather than
        re-ordered.

        A2P messaging registration provisions asynchronously after purchase — the number's ``messaging.ready`` flag
        flips to ``true`` when it can send SMS/MMS.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Number purchased, billed, and configured.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. Insufficient wallet balance (``insufficient_balance``). The body includes
                ``required``, ``current``, and ``needed`` amounts. The number is not available for purchase
                (``number_unavailable``). The carrier order failed (``provider_error``). Nothing was billed. ``error``
                is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.purchase_number(body, request_options=request_options))

    async def release_number(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1NumbersResponse3:
        """Releases the number and stops its billing. Released numbers are parked in a recycle bin tied to your account
        — re-purchasing the same number later restores it (with fresh billing) instead of losing it forever.

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Released. ``restorable`` tells you whether it can be re-purchased later.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.release_number(id_, request_options=request_options))

    async def search_available_numbers(
        self,
        *,
        type_: Type3OrStr | None = Type3.LOCAL,
        area_code: str | None = None,
        prefix: PrefixOrStr | None = None,
        vanity: str | None = None,
        quantity: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1NumbersAvailableResponse:
        """Searches live carrier inventory for numbers you can purchase right now. Local searches require ``areaCode``;
        toll-free searches accept an optional ``prefix`` (800–888) or a ``vanity`` word. The ``pricing`` block reflects
        what **your** account would pay today — Pro Bundle discounts and included-number slots are applied
        automatically.

        Args:
            type_: Value sent with the request.
            area_code: 3-digit area code. Required when ``type`` is ``local``.
            prefix: Toll-free prefix filter. 800 and 822 are usually exhausted.
            vanity: Toll-free vanity word, 4–7 letters or digits (e.g. NEWCAR). Takes precedence over ``prefix``.
            quantity: How many candidates to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching inventory plus your current pricing. An empty ``numbers`` array means no inventory in that area —
            try another area code or prefix.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. The carrier search is temporarily unavailable (``search_failed``).
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.search_available_numbers(
                type_=type_,
                area_code=area_code,
                prefix=prefix,
                vanity=vanity,
                quantity=quantity,
                request_options=request_options,
            ),
        )

    async def update_number(
        self,
        id_: str,
        body: ApiV1NumbersRequest | ApiV1NumbersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1NumbersResponse1:
        """Provisions or updates the voice webhook (your AI agent endpoint), the messaging webhook, their
        authentication, and the friendly name. Only the fields you send change; webhook secrets are write-only and never
        echoed back (responses report ``valueSet: true`` instead).

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated number.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. No such resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_number(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPhoneNumbersWithRawResponse:
        return self._with_raw_response


class PhoneNumbersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_number(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1NumbersResponse1, GetNumberErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/numbers/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1NumbersResponse1],
            error_mapper=get_number_error_mapper,
            request_options=request_options,
        )

    def list_numbers(
        self,
        *,
        status: str | None = None,
        type_: Type3OrStr | None = None,
        purchase_source: PurchaseSource1OrStr | None = None,
        tag: str | None = None,
        q: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1NumbersResponse, ListNumbersErrorBody]:
        """Your numbers, newest first. Every filter is applied server-side and they combine (AND).

        Args:
            status: Filter by status, e.g. ``active``.
            type_: Value sent with the request.
            purchase_source: Numbers bought via the dashboard (``web``) or this API (``api``).
            tag: Numbers carrying this exact tag (as stored; up to 24 characters).
            q: Substring match on the number's digits, the friendly name (case-insensitive), or a tag.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/numbers"),
            query_params=[
                param[str | None]("status", status),
                param[Type3OrStr | None]("type", type_),
                param[PurchaseSource1OrStr | None]("purchaseSource", purchase_source),
                param[str | None]("tag", tag),
                param[str | None]("q", q),
            ],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1NumbersResponse],
            error_mapper=list_numbers_error_mapper,
            request_options=request_options,
        )

    def purchase_number(
        self,
        body: PurchaseNumberRequest | PurchaseNumberRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseNumberResponse, PurchaseNumberErrorBody]:
        """Purchases a number found via search and bills your wallet for the first month at your plan's rate (no setup
        fee; an included Pro Bundle number costs nothing). Voice and messaging webhooks can be provisioned in the same
        call, so the number is fully wired the moment it activates — no dashboard visit needed.

        ``type`` is optional and derived from the number itself (8NN prefixes are toll-free). Purchasing is idempotent
        on the number: re-purchasing a number you already own returns ``200`` with the existing record instead of
        billing twice. A number you previously released is automatically restored from the recycle bin rather than
        re-ordered.

        A2P messaging registration provisions asynchronously after purchase — the number's ``messaging.ready`` flag
        flips to ``true`` when it can send SMS/MMS.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/numbers"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PurchaseNumberRequest | PurchaseNumberRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[PurchaseNumberResponse],
            error_mapper=purchase_number_error_mapper,
            request_options=request_options,
        )

    def release_number(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1NumbersResponse3, ReleaseNumberErrorBody]:
        """Releases the number and stops its billing. Released numbers are parked in a recycle bin tied to your account
        — re-purchasing the same number later restores it (with fresh billing) instead of losing it forever.

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/numbers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1NumbersResponse3],
            error_mapper=release_number_error_mapper,
            request_options=request_options,
        )

    def search_available_numbers(
        self,
        *,
        type_: Type3OrStr | None = Type3.LOCAL,
        area_code: str | None = None,
        prefix: PrefixOrStr | None = None,
        vanity: str | None = None,
        quantity: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1NumbersAvailableResponse, SearchAvailableNumbersErrorBody]:
        """Searches live carrier inventory for numbers you can purchase right now. Local searches require ``areaCode``;
        toll-free searches accept an optional ``prefix`` (800–888) or a ``vanity`` word. The ``pricing`` block reflects
        what **your** account would pay today — Pro Bundle discounts and included-number slots are applied
        automatically.

        Args:
            type_: Value sent with the request.
            area_code: 3-digit area code. Required when ``type`` is ``local``.
            prefix: Toll-free prefix filter. 800 and 822 are usually exhausted.
            vanity: Toll-free vanity word, 4–7 letters or digits (e.g. NEWCAR). Takes precedence over ``prefix``.
            quantity: How many candidates to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/numbers/available"),
            query_params=[
                param[Type3OrStr | None]("type", type_),
                param[str | None]("areaCode", area_code),
                param[PrefixOrStr | None]("prefix", prefix),
                param[str | None]("vanity", vanity),
                param[int | None]("quantity", quantity),
            ],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1NumbersAvailableResponse],
            error_mapper=search_available_numbers_error_mapper,
            request_options=request_options,
        )

    def update_number(
        self,
        id_: str,
        body: ApiV1NumbersRequest | ApiV1NumbersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1NumbersResponse1, UpdateNumberErrorBody]:
        """Provisions or updates the voice webhook (your AI agent endpoint), the messaging webhook, their
        authentication, and the friendly name. Only the fields you send change; webhook secrets are write-only and never
        echoed back (responses report ``valueSet: true`` instead).

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/numbers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1NumbersRequest | ApiV1NumbersRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[ApiV1NumbersResponse1],
            error_mapper=update_number_error_mapper,
            request_options=request_options,
        )


class AsyncPhoneNumbersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_number(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1NumbersResponse1, GetNumberErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/numbers/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1NumbersResponse1],
            error_mapper=get_number_error_mapper,
            request_options=request_options,
        )

    async def list_numbers(
        self,
        *,
        status: str | None = None,
        type_: Type3OrStr | None = None,
        purchase_source: PurchaseSource1OrStr | None = None,
        tag: str | None = None,
        q: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1NumbersResponse, ListNumbersErrorBody]:
        """Your numbers, newest first. Every filter is applied server-side and they combine (AND).

        Args:
            status: Filter by status, e.g. ``active``.
            type_: Value sent with the request.
            purchase_source: Numbers bought via the dashboard (``web``) or this API (``api``).
            tag: Numbers carrying this exact tag (as stored; up to 24 characters).
            q: Substring match on the number's digits, the friendly name (case-insensitive), or a tag.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/numbers"),
            query_params=[
                param[str | None]("status", status),
                param[Type3OrStr | None]("type", type_),
                param[PurchaseSource1OrStr | None]("purchaseSource", purchase_source),
                param[str | None]("tag", tag),
                param[str | None]("q", q),
            ],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1NumbersResponse],
            error_mapper=list_numbers_error_mapper,
            request_options=request_options,
        )

    async def purchase_number(
        self,
        body: PurchaseNumberRequest | PurchaseNumberRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseNumberResponse, PurchaseNumberErrorBody]:
        """Purchases a number found via search and bills your wallet for the first month at your plan's rate (no setup
        fee; an included Pro Bundle number costs nothing). Voice and messaging webhooks can be provisioned in the same
        call, so the number is fully wired the moment it activates — no dashboard visit needed.

        ``type`` is optional and derived from the number itself (8NN prefixes are toll-free). Purchasing is idempotent
        on the number: re-purchasing a number you already own returns ``200`` with the existing record instead of
        billing twice. A number you previously released is automatically restored from the recycle bin rather than
        re-ordered.

        A2P messaging registration provisions asynchronously after purchase — the number's ``messaging.ready`` flag
        flips to ``true`` when it can send SMS/MMS.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/numbers"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PurchaseNumberRequest | PurchaseNumberRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[PurchaseNumberResponse],
            error_mapper=purchase_number_error_mapper,
            request_options=request_options,
        )

    async def release_number(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1NumbersResponse3, ReleaseNumberErrorBody]:
        """Releases the number and stops its billing. Released numbers are parked in a recycle bin tied to your account
        — re-purchasing the same number later restores it (with fresh billing) instead of losing it forever.

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/numbers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1NumbersResponse3],
            error_mapper=release_number_error_mapper,
            request_options=request_options,
        )

    async def search_available_numbers(
        self,
        *,
        type_: Type3OrStr | None = Type3.LOCAL,
        area_code: str | None = None,
        prefix: PrefixOrStr | None = None,
        vanity: str | None = None,
        quantity: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1NumbersAvailableResponse, SearchAvailableNumbersErrorBody]:
        """Searches live carrier inventory for numbers you can purchase right now. Local searches require ``areaCode``;
        toll-free searches accept an optional ``prefix`` (800–888) or a ``vanity`` word. The ``pricing`` block reflects
        what **your** account would pay today — Pro Bundle discounts and included-number slots are applied
        automatically.

        Args:
            type_: Value sent with the request.
            area_code: 3-digit area code. Required when ``type`` is ``local``.
            prefix: Toll-free prefix filter. 800 and 822 are usually exhausted.
            vanity: Toll-free vanity word, 4–7 letters or digits (e.g. NEWCAR). Takes precedence over ``prefix``.
            quantity: How many candidates to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/numbers/available"),
            query_params=[
                param[Type3OrStr | None]("type", type_),
                param[str | None]("areaCode", area_code),
                param[PrefixOrStr | None]("prefix", prefix),
                param[str | None]("vanity", vanity),
                param[int | None]("quantity", quantity),
            ],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1NumbersAvailableResponse],
            error_mapper=search_available_numbers_error_mapper,
            request_options=request_options,
        )

    async def update_number(
        self,
        id_: str,
        body: ApiV1NumbersRequest | ApiV1NumbersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1NumbersResponse1, UpdateNumberErrorBody]:
        """Provisions or updates the voice webhook (your AI agent endpoint), the messaging webhook, their
        authentication, and the friendly name. Only the fields you send change; webhook secrets are write-only and never
        echoed back (responses report ``valueSet: true`` instead).

        Args:
            id_: The number's ``id``, or the E.164 number itself (URL-encode the ``+``, e.g. ``%2B18285551234``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/numbers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1NumbersRequest | ApiV1NumbersRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[ApiV1NumbersResponse1],
            error_mapper=update_number_error_mapper,
            request_options=request_options,
        )
