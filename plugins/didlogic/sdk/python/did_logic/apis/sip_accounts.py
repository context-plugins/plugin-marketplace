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
from ..errors.sipaccounts_allowed_ips_create_error import (
    SipaccountsAllowedIpsCreateErrorBody,
    sipaccounts_allowed_ips_create_error_mapper,
)
from ..errors.sipaccounts_allowed_ips_destroy_error import (
    SipaccountsAllowedIpsDestroyErrorBody,
    sipaccounts_allowed_ips_destroy_error_mapper,
)
from ..errors.sipaccounts_allowed_ips_index_error import (
    SipaccountsAllowedIpsIndexErrorBody,
    sipaccounts_allowed_ips_index_error_mapper,
)
from ..errors.sipaccounts_create_error import SipaccountsCreateErrorBody, sipaccounts_create_error_mapper
from ..errors.sipaccounts_destroy_error import SipaccountsDestroyErrorBody, sipaccounts_destroy_error_mapper
from ..errors.sipaccounts_index_error import SipaccountsIndexErrorBody, sipaccounts_index_error_mapper
from ..errors.sipaccounts_show_error import SipaccountsShowErrorBody, sipaccounts_show_error_mapper
from ..errors.sipaccounts_update_error import SipaccountsUpdateErrorBody, sipaccounts_update_error_mapper
from ..models.api_v1_sipaccounts_allowed_ips_request import (
    ApiV1SipaccountsAllowedIpsRequest,
    ApiV1SipaccountsAllowedIpsRequestDict,
)
from ..models.api_v1_sipaccounts_allowed_ips_response import ApiV1SipaccountsAllowedIpsResponse
from ..models.api_v1_sipaccounts_allowed_ips_response1 import ApiV1SipaccountsAllowedIpsResponse1
from ..models.api_v1_sipaccounts_request import ApiV1SipaccountsRequest, ApiV1SipaccountsRequestDict
from ..models.api_v1_sipaccounts_request1 import ApiV1SipaccountsRequest1, ApiV1SipaccountsRequest1Dict
from ..models.api_v1_sipaccounts_response import ApiV1SipaccountsResponse
from ..models.api_v1_sipaccounts_response2 import ApiV1SipaccountsResponse2
from ..models.api_v1_sipaccounts_response4 import ApiV1SipaccountsResponse4
from ..models.api_v1_sipaccounts_response5 import ApiV1SipaccountsResponse5
from ..server.server import Server


class SipAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SipAccountsWithRawResponse(client, server, auth)

    def sipaccounts_allowed_ips_create(
        self,
        sipaccount_id: str,
        body: ApiV1SipaccountsAllowedIpsRequest | ApiV1SipaccountsAllowedIpsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SipaccountsAllowedIpsResponse1:
        """Add IP address to SIP account whitelist.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully adds IP to whitelist

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope when neither the SIP
                account name nor id matches an account you own Returns 422 error when IP address format is invalid
                ``error`` is ``ApiV1SipaccountsAllowedIps403Error1 | Error | RawError``."""
        return unwrap(
            self._with_raw_response.sipaccounts_allowed_ips_create(sipaccount_id, body, request_options=request_options)
        )

    def sipaccounts_allowed_ips_destroy(
        self, sipaccount_id: str, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Remove IP address from SIP account whitelist.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            ip: IP address to remove, from sipaccounts_allowed_ips_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully removes IP from whitelist

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope when neither the SIP
                account name nor id matches an account you own ``error`` is ``ApiV1SipaccountsAllowedIps403Error1 |
                Error | RawError``."""
        return unwrap(
            self._with_raw_response.sipaccounts_allowed_ips_destroy(sipaccount_id, ip, request_options=request_options)
        )

    def sipaccounts_allowed_ips_index(
        self, sipaccount_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1SipaccountsAllowedIpsResponse:
        """Retrieve list of IP addresses allowed to authenticate this SIP account.

        ``allowed_ips`` feeds sipaccounts_allowed_ips_destroy as ``ip``.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns list of allowed IP addresses

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope when neither the SIP
                account name nor id matches an account you own ``error`` is ``ApiV1SipaccountsAllowedIps403Error1 |
                Error | RawError``."""
        return unwrap(
            self._with_raw_response.sipaccounts_allowed_ips_index(sipaccount_id, request_options=request_options)
        )

    def sipaccounts_create(
        self,
        body: ApiV1SipaccountsRequest | ApiV1SipaccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SipaccountsResponse2:
        """Create a new SIP account (trunk) for making/receiving calls.

        ``sipaccount.id`` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
        sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy; each also
        takes ``sipaccount.name`` in its place. ``sipaccount.name`` feeds call_price_show, calls_show and
        click2call_create as the SIP account to price, filter by or ring.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully creates SIP account and returns credentials

        Raises:
            ApiError: Returns 403 error when SIP account creation is disabled ``error`` is ``ApiV1SipaccountsResponse11
                | RawError``."""
        return unwrap(self._with_raw_response.sipaccounts_create(body, request_options=request_options))

    def sipaccounts_destroy(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete a SIP account.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deletes SIP account

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the SIP account name nor id matches an account you
                own. ``error`` is ``ApiV1Sipaccounts403Error1 | Error | RawError``."""
        return unwrap(self._with_raw_response.sipaccounts_destroy(id_, request_options=request_options))

    def sipaccounts_index(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1SipaccountsResponse:
        """Retrieve list of SIP accounts (trunks) configured for the authenticated user.

        **SIP Accounts** allow making/receiving calls through the platform using SIP protocol.

        **Returned Information:**
        - Account credentials and settings
        - Call routing configuration
        - Usage limits and restrictions
        - Allowed IP addresses (if configured)

        Technical accounts the platform manages for you — the Webphone account and each SDK token's account (labelled
        ``SDK Instance: ``) — are listed too, but cannot be fetched by id, updated or deleted through this API.

        ``sipaccounts[].id`` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
        sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy; each also
        takes ``sipaccounts[].name`` in its place. ``sipaccounts[].name`` feeds call_price_show, calls_show and
        click2call_create as the SIP account to price, filter by or ring. Full record: sipaccounts_show.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns list of SIP accounts with configuration details

        Raises:
            ApiError: Returns 403 error when SIP accounts are disabled for this user ``error`` is
                ``ApiV1SipaccountsResponse11 | RawError``."""
        return unwrap(self._with_raw_response.sipaccounts_index(request_options=request_options))

    def sipaccounts_show(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1SipaccountsResponse4:
        """Retrieve details of a specific SIP account.

        Rows: sipaccounts_index. See also: sipaccounts_allowed_ips_index, to manage the allowed IPs.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns SIP account configuration and settings

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the SIP account name nor id matches an account you
                own. ``error`` is ``ApiV1Sipaccounts403Error1 | Error | RawError``."""
        return unwrap(self._with_raw_response.sipaccounts_show(id_, request_options=request_options))

    def sipaccounts_update(
        self,
        id_: str,
        body: ApiV1SipaccountsRequest1 | ApiV1SipaccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1SipaccountsResponse5:
        """Update SIP account settings.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully updates SIP account settings

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the SIP account name nor id matches an account you
                own. ``error`` is ``ApiV1Sipaccounts403Error1 | Error | RawError``."""
        return unwrap(self._with_raw_response.sipaccounts_update(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SipAccountsWithRawResponse:
        return self._with_raw_response


class AsyncSipAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSipAccountsWithRawResponse(client, server, auth)

    async def sipaccounts_allowed_ips_create(
        self,
        sipaccount_id: str,
        body: ApiV1SipaccountsAllowedIpsRequest | ApiV1SipaccountsAllowedIpsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SipaccountsAllowedIpsResponse1:
        """Add IP address to SIP account whitelist.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully adds IP to whitelist

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope when neither the SIP
                account name nor id matches an account you own Returns 422 error when IP address format is invalid
                ``error`` is ``ApiV1SipaccountsAllowedIps403Error1 | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.sipaccounts_allowed_ips_create(
                sipaccount_id, body, request_options=request_options
            ),
        )

    async def sipaccounts_allowed_ips_destroy(
        self, sipaccount_id: str, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Remove IP address from SIP account whitelist.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            ip: IP address to remove, from sipaccounts_allowed_ips_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully removes IP from whitelist

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope when neither the SIP
                account name nor id matches an account you own ``error`` is ``ApiV1SipaccountsAllowedIps403Error1 |
                Error | RawError``."""
        return unwrap(
            await self._with_raw_response.sipaccounts_allowed_ips_destroy(
                sipaccount_id, ip, request_options=request_options
            ),
        )

    async def sipaccounts_allowed_ips_index(
        self, sipaccount_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1SipaccountsAllowedIpsResponse:
        """Retrieve list of IP addresses allowed to authenticate this SIP account.

        ``allowed_ips`` feeds sipaccounts_allowed_ips_destroy as ``ip``.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns list of allowed IP addresses

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope when neither the SIP
                account name nor id matches an account you own ``error`` is ``ApiV1SipaccountsAllowedIps403Error1 |
                Error | RawError``."""
        return unwrap(
            await self._with_raw_response.sipaccounts_allowed_ips_index(sipaccount_id, request_options=request_options)
        )

    async def sipaccounts_create(
        self,
        body: ApiV1SipaccountsRequest | ApiV1SipaccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SipaccountsResponse2:
        """Create a new SIP account (trunk) for making/receiving calls.

        ``sipaccount.id`` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
        sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy; each also
        takes ``sipaccount.name`` in its place. ``sipaccount.name`` feeds call_price_show, calls_show and
        click2call_create as the SIP account to price, filter by or ring.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully creates SIP account and returns credentials

        Raises:
            ApiError: Returns 403 error when SIP account creation is disabled ``error`` is ``ApiV1SipaccountsResponse11
                | RawError``."""
        return unwrap(await self._with_raw_response.sipaccounts_create(body, request_options=request_options))

    async def sipaccounts_destroy(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Delete a SIP account.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully deletes SIP account

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the SIP account name nor id matches an account you
                own. ``error`` is ``ApiV1Sipaccounts403Error1 | Error | RawError``."""
        return unwrap(await self._with_raw_response.sipaccounts_destroy(id_, request_options=request_options))

    async def sipaccounts_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1SipaccountsResponse:
        """Retrieve list of SIP accounts (trunks) configured for the authenticated user.

        **SIP Accounts** allow making/receiving calls through the platform using SIP protocol.

        **Returned Information:**
        - Account credentials and settings
        - Call routing configuration
        - Usage limits and restrictions
        - Allowed IP addresses (if configured)

        Technical accounts the platform manages for you — the Webphone account and each SDK token's account (labelled
        ``SDK Instance: ``) — are listed too, but cannot be fetched by id, updated or deleted through this API.

        ``sipaccounts[].id`` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
        sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy; each also
        takes ``sipaccounts[].name`` in its place. ``sipaccounts[].name`` feeds call_price_show, calls_show and
        click2call_create as the SIP account to price, filter by or ring. Full record: sipaccounts_show.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns list of SIP accounts with configuration details

        Raises:
            ApiError: Returns 403 error when SIP accounts are disabled for this user ``error`` is
                ``ApiV1SipaccountsResponse11 | RawError``."""
        return unwrap(await self._with_raw_response.sipaccounts_index(request_options=request_options))

    async def sipaccounts_show(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1SipaccountsResponse4:
        """Retrieve details of a specific SIP account.

        Rows: sipaccounts_index. See also: sipaccounts_allowed_ips_index, to manage the allowed IPs.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns SIP account configuration and settings

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the SIP account name nor id matches an account you
                own. ``error`` is ``ApiV1Sipaccounts403Error1 | Error | RawError``."""
        return unwrap(await self._with_raw_response.sipaccounts_show(id_, request_options=request_options))

    async def sipaccounts_update(
        self,
        id_: str,
        body: ApiV1SipaccountsRequest1 | ApiV1SipaccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1SipaccountsResponse5:
        """Update SIP account settings.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully updates SIP account settings

        Raises:
            ApiError: Returns 403 error when API token is incorrect Returns the 404 error envelope
                {"errors":{"base":["data not found"]}} when neither the SIP account name nor id matches an account you
                own. ``error`` is ``ApiV1Sipaccounts403Error1 | Error | RawError``."""
        return unwrap(await self._with_raw_response.sipaccounts_update(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSipAccountsWithRawResponse:
        return self._with_raw_response


class SipAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sipaccounts_allowed_ips_create(
        self,
        sipaccount_id: str,
        body: ApiV1SipaccountsAllowedIpsRequest | ApiV1SipaccountsAllowedIpsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SipaccountsAllowedIpsResponse1, SipaccountsAllowedIpsCreateErrorBody]:
        """Add IP address to SIP account whitelist.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            path_params=[param[str]("sipaccount_id", sipaccount_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SipaccountsAllowedIpsRequest | ApiV1SipaccountsAllowedIpsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SipaccountsAllowedIpsResponse1],
            error_mapper=sipaccounts_allowed_ips_create_error_mapper,
            request_options=request_options,
        )

    def sipaccounts_allowed_ips_destroy(
        self, sipaccount_id: str, ip: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SipaccountsAllowedIpsDestroyErrorBody]:
        """Remove IP address from SIP account whitelist.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            ip: IP address to remove, from sipaccounts_allowed_ips_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            path_params=[param[str]("sipaccount_id", sipaccount_id)],
            query_params=[param[str]("ip", ip)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=sipaccounts_allowed_ips_destroy_error_mapper,
            request_options=request_options,
        )

    def sipaccounts_allowed_ips_index(
        self, sipaccount_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SipaccountsAllowedIpsResponse, SipaccountsAllowedIpsIndexErrorBody]:
        """Retrieve list of IP addresses allowed to authenticate this SIP account.

        ``allowed_ips`` feeds sipaccounts_allowed_ips_destroy as ``ip``.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            path_params=[param[str]("sipaccount_id", sipaccount_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SipaccountsAllowedIpsResponse],
            error_mapper=sipaccounts_allowed_ips_index_error_mapper,
            request_options=request_options,
        )

    def sipaccounts_create(
        self,
        body: ApiV1SipaccountsRequest | ApiV1SipaccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SipaccountsResponse2, SipaccountsCreateErrorBody]:
        """Create a new SIP account (trunk) for making/receiving calls.

        ``sipaccount.id`` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
        sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy; each also
        takes ``sipaccount.name`` in its place. ``sipaccount.name`` feeds call_price_show, calls_show and
        click2call_create as the SIP account to price, filter by or ring.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sipaccounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SipaccountsRequest | ApiV1SipaccountsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SipaccountsResponse2],
            error_mapper=sipaccounts_create_error_mapper,
            request_options=request_options,
        )

    def sipaccounts_destroy(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, SipaccountsDestroyErrorBody]:
        """Delete a SIP account.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/sipaccounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=sipaccounts_destroy_error_mapper,
            request_options=request_options,
        )

    def sipaccounts_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SipaccountsResponse, SipaccountsIndexErrorBody]:
        """Retrieve list of SIP accounts (trunks) configured for the authenticated user.

        **SIP Accounts** allow making/receiving calls through the platform using SIP protocol.

        **Returned Information:**
        - Account credentials and settings
        - Call routing configuration
        - Usage limits and restrictions
        - Allowed IP addresses (if configured)

        Technical accounts the platform manages for you — the Webphone account and each SDK token's account (labelled
        ``SDK Instance: ``) — are listed too, but cannot be fetched by id, updated or deleted through this API.

        ``sipaccounts[].id`` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
        sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy; each also
        takes ``sipaccounts[].name`` in its place. ``sipaccounts[].name`` feeds call_price_show, calls_show and
        click2call_create as the SIP account to price, filter by or ring. Full record: sipaccounts_show.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sipaccounts"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SipaccountsResponse],
            error_mapper=sipaccounts_index_error_mapper,
            request_options=request_options,
        )

    def sipaccounts_show(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SipaccountsResponse4, SipaccountsShowErrorBody]:
        """Retrieve details of a specific SIP account.

        Rows: sipaccounts_index. See also: sipaccounts_allowed_ips_index, to manage the allowed IPs.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sipaccounts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SipaccountsResponse4],
            error_mapper=sipaccounts_show_error_mapper,
            request_options=request_options,
        )

    def sipaccounts_update(
        self,
        id_: str,
        body: ApiV1SipaccountsRequest1 | ApiV1SipaccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SipaccountsResponse5, SipaccountsUpdateErrorBody]:
        """Update SIP account settings.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/sipaccounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SipaccountsRequest1 | ApiV1SipaccountsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1SipaccountsResponse5],
            error_mapper=sipaccounts_update_error_mapper,
            request_options=request_options,
        )


class AsyncSipAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sipaccounts_allowed_ips_create(
        self,
        sipaccount_id: str,
        body: ApiV1SipaccountsAllowedIpsRequest | ApiV1SipaccountsAllowedIpsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SipaccountsAllowedIpsResponse1, SipaccountsAllowedIpsCreateErrorBody]:
        """Add IP address to SIP account whitelist.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            path_params=[param[str]("sipaccount_id", sipaccount_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SipaccountsAllowedIpsRequest | ApiV1SipaccountsAllowedIpsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SipaccountsAllowedIpsResponse1],
            error_mapper=sipaccounts_allowed_ips_create_error_mapper,
            request_options=request_options,
        )

    async def sipaccounts_allowed_ips_destroy(
        self, sipaccount_id: str, ip: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SipaccountsAllowedIpsDestroyErrorBody]:
        """Remove IP address from SIP account whitelist.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            ip: IP address to remove, from sipaccounts_allowed_ips_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            path_params=[param[str]("sipaccount_id", sipaccount_id)],
            query_params=[param[str]("ip", ip)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=sipaccounts_allowed_ips_destroy_error_mapper,
            request_options=request_options,
        )

    async def sipaccounts_allowed_ips_index(
        self, sipaccount_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SipaccountsAllowedIpsResponse, SipaccountsAllowedIpsIndexErrorBody]:
        """Retrieve list of IP addresses allowed to authenticate this SIP account.

        ``allowed_ips`` feeds sipaccounts_allowed_ips_destroy as ``ip``.

        Args:
            sipaccount_id: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sipaccounts/{sipaccount_id}/allowed_ips"),
            path_params=[param[str]("sipaccount_id", sipaccount_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SipaccountsAllowedIpsResponse],
            error_mapper=sipaccounts_allowed_ips_index_error_mapper,
            request_options=request_options,
        )

    async def sipaccounts_create(
        self,
        body: ApiV1SipaccountsRequest | ApiV1SipaccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SipaccountsResponse2, SipaccountsCreateErrorBody]:
        """Create a new SIP account (trunk) for making/receiving calls.

        ``sipaccount.id`` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
        sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy; each also
        takes ``sipaccount.name`` in its place. ``sipaccount.name`` feeds call_price_show, calls_show and
        click2call_create as the SIP account to price, filter by or ring.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/sipaccounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SipaccountsRequest | ApiV1SipaccountsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SipaccountsResponse2],
            error_mapper=sipaccounts_create_error_mapper,
            request_options=request_options,
        )

    async def sipaccounts_destroy(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, SipaccountsDestroyErrorBody]:
        """Delete a SIP account.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/sipaccounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=sipaccounts_destroy_error_mapper,
            request_options=request_options,
        )

    async def sipaccounts_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SipaccountsResponse, SipaccountsIndexErrorBody]:
        """Retrieve list of SIP accounts (trunks) configured for the authenticated user.

        **SIP Accounts** allow making/receiving calls through the platform using SIP protocol.

        **Returned Information:**
        - Account credentials and settings
        - Call routing configuration
        - Usage limits and restrictions
        - Allowed IP addresses (if configured)

        Technical accounts the platform manages for you — the Webphone account and each SDK token's account (labelled
        ``SDK Instance: ``) — are listed too, but cannot be fetched by id, updated or deleted through this API.

        ``sipaccounts[].id`` feeds sipaccounts_show, sipaccounts_update, sipaccounts_destroy,
        sipaccounts_allowed_ips_index, sipaccounts_allowed_ips_create and sipaccounts_allowed_ips_destroy; each also
        takes ``sipaccounts[].name`` in its place. ``sipaccounts[].name`` feeds call_price_show, calls_show and
        click2call_create as the SIP account to price, filter by or ring. Full record: sipaccounts_show.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sipaccounts"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SipaccountsResponse],
            error_mapper=sipaccounts_index_error_mapper,
            request_options=request_options,
        )

    async def sipaccounts_show(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1SipaccountsResponse4, SipaccountsShowErrorBody]:
        """Retrieve details of a specific SIP account.

        Rows: sipaccounts_index. See also: sipaccounts_allowed_ips_index, to manage the allowed IPs.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/sipaccounts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SipaccountsResponse4],
            error_mapper=sipaccounts_show_error_mapper,
            request_options=request_options,
        )

    async def sipaccounts_update(
        self,
        id_: str,
        body: ApiV1SipaccountsRequest1 | ApiV1SipaccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1SipaccountsResponse5, SipaccountsUpdateErrorBody]:
        """Update SIP account settings.

        Args:
            id_: SIP account name or id from sipaccounts_index, sipaccounts_create: the account **name** (e.g.
                ``01234``, which may start with ``0``) or the numeric **id** (e.g. ``73``). Both resolve the same
                account.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/sipaccounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1SipaccountsRequest1 | ApiV1SipaccountsRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1SipaccountsResponse5],
            error_mapper=sipaccounts_update_error_mapper,
            request_options=request_options,
        )
