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
from ..errors.search_endpoints_error import SearchEndpointsErrorBody, search_endpoints_error_mapper
from ..models.endpoints_search_response import EndpointsSearchResponse
from ..models.enums.debug_state import DebugStateOrStr
from ..models.enums.fallback_mode import FallbackModeOrStr
from ..models.enums.order import OrderOrStr
from ..models.enums.status import StatusOrStr
from ..server.server import Server


class Endpoints:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EndpointsWithRawResponse(client, server, auth)

    def search_endpoints(
        self,
        *,
        id_: str | None = None,
        email_id: str | None = None,
        device_name: str | None = None,
        user_id: str | None = None,
        os_version: str | None = None,
        status: list[StatusOrStr] | None = None,
        debug_state: list[DebugStateOrStr] | None = None,
        fallback_mode: FallbackModeOrStr | None = None,
        location_id: str | None = None,
        agent_version: str | None = None,
        first: int | None = 50,
        after: str | None = None,
        order: OrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EndpointsSearchResponse:
        """Use this API to get a list of all endpoints, or search for those matching a query parameter.

        Note:
        - To return a list of all endpoints do not include any additional parameter.
        - Only one of the optional parameters is allowed to be specified per request.
        - Results are returned in pages using cursor based pagination and ordered by the ``lastSeen`` property.

        Args:
            id_: Broad search query across endpoints by device, user and email identities that contain this string
                (case-insensitive)
            email_id: Search by email ids that contain this string (case-insensitive)
            device_name: Search by device names that contain this string (case-insensitive)
            user_id: Search by user ids that contain this string (case-insensitive). ``userId`` for OIDC users is
                usually their email address.
            os_version: Filter by this exact device OS version string
            status: Filter by this exact set of status'
            debug_state: Filter by this exact set of debug states. 0 means not in debug 1 means debug request sent to
                endpoint 2 means debug request acknowledged by endpoint
            fallback_mode: Filter by the fallback mode
            location_id: Filter by this exact location id - with an underscore separating the case sensitive city and
                country values e.g. "City_Country"
            agent_version: Filter by this exact agent version
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            order: The direction of the sort by the ``lastSeen`` property. The default is to sort by descending
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.search_endpoints(
                id_=id_,
                email_id=email_id,
                device_name=device_name,
                user_id=user_id,
                os_version=os_version,
                status=status,
                debug_state=debug_state,
                fallback_mode=fallback_mode,
                location_id=location_id,
                agent_version=agent_version,
                first=first,
                after=after,
                order=order,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> EndpointsWithRawResponse:
        return self._with_raw_response


class AsyncEndpoints:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEndpointsWithRawResponse(client, server, auth)

    async def search_endpoints(
        self,
        *,
        id_: str | None = None,
        email_id: str | None = None,
        device_name: str | None = None,
        user_id: str | None = None,
        os_version: str | None = None,
        status: list[StatusOrStr] | None = None,
        debug_state: list[DebugStateOrStr] | None = None,
        fallback_mode: FallbackModeOrStr | None = None,
        location_id: str | None = None,
        agent_version: str | None = None,
        first: int | None = 50,
        after: str | None = None,
        order: OrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EndpointsSearchResponse:
        """Use this API to get a list of all endpoints, or search for those matching a query parameter.

        Note:
        - To return a list of all endpoints do not include any additional parameter.
        - Only one of the optional parameters is allowed to be specified per request.
        - Results are returned in pages using cursor based pagination and ordered by the ``lastSeen`` property.

        Args:
            id_: Broad search query across endpoints by device, user and email identities that contain this string
                (case-insensitive)
            email_id: Search by email ids that contain this string (case-insensitive)
            device_name: Search by device names that contain this string (case-insensitive)
            user_id: Search by user ids that contain this string (case-insensitive). ``userId`` for OIDC users is
                usually their email address.
            os_version: Filter by this exact device OS version string
            status: Filter by this exact set of status'
            debug_state: Filter by this exact set of debug states. 0 means not in debug 1 means debug request sent to
                endpoint 2 means debug request acknowledged by endpoint
            fallback_mode: Filter by the fallback mode
            location_id: Filter by this exact location id - with an underscore separating the case sensitive city and
                country values e.g. "City_Country"
            agent_version: Filter by this exact agent version
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            order: The direction of the sort by the ``lastSeen`` property. The default is to sort by descending
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.search_endpoints(
                id_=id_,
                email_id=email_id,
                device_name=device_name,
                user_id=user_id,
                os_version=os_version,
                status=status,
                debug_state=debug_state,
                fallback_mode=fallback_mode,
                location_id=location_id,
                agent_version=agent_version,
                first=first,
                after=after,
                order=order,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEndpointsWithRawResponse:
        return self._with_raw_response


class EndpointsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_endpoints(
        self,
        *,
        id_: str | None = None,
        email_id: str | None = None,
        device_name: str | None = None,
        user_id: str | None = None,
        os_version: str | None = None,
        status: list[StatusOrStr] | None = None,
        debug_state: list[DebugStateOrStr] | None = None,
        fallback_mode: FallbackModeOrStr | None = None,
        location_id: str | None = None,
        agent_version: str | None = None,
        first: int | None = 50,
        after: str | None = None,
        order: OrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EndpointsSearchResponse, SearchEndpointsErrorBody]:
        """Use this API to get a list of all endpoints, or search for those matching a query parameter.

        Note:
        - To return a list of all endpoints do not include any additional parameter.
        - Only one of the optional parameters is allowed to be specified per request.
        - Results are returned in pages using cursor based pagination and ordered by the ``lastSeen`` property.

        Args:
            id_: Broad search query across endpoints by device, user and email identities that contain this string
                (case-insensitive)
            email_id: Search by email ids that contain this string (case-insensitive)
            device_name: Search by device names that contain this string (case-insensitive)
            user_id: Search by user ids that contain this string (case-insensitive). ``userId`` for OIDC users is
                usually their email address.
            os_version: Filter by this exact device OS version string
            status: Filter by this exact set of status'
            debug_state: Filter by this exact set of debug states. 0 means not in debug 1 means debug request sent to
                endpoint 2 means debug request acknowledged by endpoint
            fallback_mode: Filter by the fallback mode
            location_id: Filter by this exact location id - with an underscore separating the case sensitive city and
                country values e.g. "City_Country"
            agent_version: Filter by this exact agent version
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            order: The direction of the sort by the ``lastSeen`` property. The default is to sort by descending
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/endpoints/search"),
            query_params=[
                param[str | None]("id", id_),
                param[str | None]("emailId", email_id),
                param[str | None]("deviceName", device_name),
                param[str | None]("userId", user_id),
                param[str | None]("osVersion", os_version),
                param[list[StatusOrStr] | None]("status", status),
                param[list[DebugStateOrStr] | None]("debugState", debug_state),
                param[FallbackModeOrStr | None]("fallbackMode", fallback_mode),
                param[str | None]("locationId", location_id),
                param[str | None]("agentVersion", agent_version),
                param[int | None]("first", first),
                param[str | None]("after", after),
                param[OrderOrStr | None]("order", order),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[EndpointsSearchResponse],
            error_mapper=search_endpoints_error_mapper,
            request_options=request_options,
        )


class AsyncEndpointsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_endpoints(
        self,
        *,
        id_: str | None = None,
        email_id: str | None = None,
        device_name: str | None = None,
        user_id: str | None = None,
        os_version: str | None = None,
        status: list[StatusOrStr] | None = None,
        debug_state: list[DebugStateOrStr] | None = None,
        fallback_mode: FallbackModeOrStr | None = None,
        location_id: str | None = None,
        agent_version: str | None = None,
        first: int | None = 50,
        after: str | None = None,
        order: OrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EndpointsSearchResponse, SearchEndpointsErrorBody]:
        """Use this API to get a list of all endpoints, or search for those matching a query parameter.

        Note:
        - To return a list of all endpoints do not include any additional parameter.
        - Only one of the optional parameters is allowed to be specified per request.
        - Results are returned in pages using cursor based pagination and ordered by the ``lastSeen`` property.

        Args:
            id_: Broad search query across endpoints by device, user and email identities that contain this string
                (case-insensitive)
            email_id: Search by email ids that contain this string (case-insensitive)
            device_name: Search by device names that contain this string (case-insensitive)
            user_id: Search by user ids that contain this string (case-insensitive). ``userId`` for OIDC users is
                usually their email address.
            os_version: Filter by this exact device OS version string
            status: Filter by this exact set of status'
            debug_state: Filter by this exact set of debug states. 0 means not in debug 1 means debug request sent to
                endpoint 2 means debug request acknowledged by endpoint
            fallback_mode: Filter by the fallback mode
            location_id: Filter by this exact location id - with an underscore separating the case sensitive city and
                country values e.g. "City_Country"
            agent_version: Filter by this exact agent version
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            order: The direction of the sort by the ``lastSeen`` property. The default is to sort by descending
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/endpoints/search"),
            query_params=[
                param[str | None]("id", id_),
                param[str | None]("emailId", email_id),
                param[str | None]("deviceName", device_name),
                param[str | None]("userId", user_id),
                param[str | None]("osVersion", os_version),
                param[list[StatusOrStr] | None]("status", status),
                param[list[DebugStateOrStr] | None]("debugState", debug_state),
                param[FallbackModeOrStr | None]("fallbackMode", fallback_mode),
                param[str | None]("locationId", location_id),
                param[str | None]("agentVersion", agent_version),
                param[int | None]("first", first),
                param[str | None]("after", after),
                param[OrderOrStr | None]("order", order),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[EndpointsSearchResponse],
            error_mapper=search_endpoints_error_mapper,
            request_options=request_options,
        )
