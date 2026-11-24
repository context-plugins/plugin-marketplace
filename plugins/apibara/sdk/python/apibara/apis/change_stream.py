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
from ..errors.list_vehicle_changes_error import ListVehicleChangesErrorBody, list_vehicle_changes_error_mapper
from ..models.enums.event_type import EventTypeOrStr
from ..models.enums.platform import PlatformOrStr
from ..models.unions.include_record1 import IncludeRecord1, IncludeRecord1Dict
from ..models.vehicle_changes_response import VehicleChangesResponse
from ..server.server import Server


class ChangeStream:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChangeStreamWithRawResponse(client, server, auth)

    def list_vehicle_changes(
        self,
        *,
        after: int | None = 0,
        limit: int | None = 100,
        platform: PlatformOrStr | None = None,
        event_type: EventTypeOrStr | None = None,
        terminal: bool | None = None,
        lot_number: str | None = None,
        vin: str | None = None,
        include_record: IncludeRecord1 | IncludeRecord1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VehicleChangesResponse:
        """Read material Copart and IAAI changes in monotonically increasing sequence order. Persist meta.next_cursor
        only after your local transaction succeeds, then pass it back as after on the next request. Sequence gaps are
        valid. Non-material technical null/zero initialization noise is filtered. If a cursor falls outside the retained
        window, the API returns HTTP 410 cursor_expired instead of silently skipping events. New reserve.changed events
        carry pricing.seller_reserve.* fields when a source-observed reserve status or inferred threshold changes.
        Reserve Off alone does not establish a numerical reserve.

        Args:
            after: Return events with sequence greater than this checkpoint. Start with 0 for the oldest retained event.
            limit: Value sent with the request.
            platform: Value sent with the request.
            event_type: Value sent with the request.
            terminal: Value sent with the request.
            lot_number: Value sent with the request.
            vin: Value sent with the request.
            include_record: Optional current-record hydration. true/all adds the current full normalized vehicle record
                to every event where available; created adds it only to lot.created. Sync Center incremental feeds use
                created to stay self-contained without duplicating large media payloads on every bid/status event.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sequence-ordered change events.

        Raises:
            ApiError: The requested checkpoint has expired from the retained replay window. Unauthorized. Invalid query
                parameters. ``error`` is ``ApiErrorModel | ChangeCursorExpiredResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_vehicle_changes(
                after=after,
                limit=limit,
                platform=platform,
                event_type=event_type,
                terminal=terminal,
                lot_number=lot_number,
                vin=vin,
                include_record=include_record,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ChangeStreamWithRawResponse:
        return self._with_raw_response


class AsyncChangeStream:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChangeStreamWithRawResponse(client, server, auth)

    async def list_vehicle_changes(
        self,
        *,
        after: int | None = 0,
        limit: int | None = 100,
        platform: PlatformOrStr | None = None,
        event_type: EventTypeOrStr | None = None,
        terminal: bool | None = None,
        lot_number: str | None = None,
        vin: str | None = None,
        include_record: IncludeRecord1 | IncludeRecord1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VehicleChangesResponse:
        """Read material Copart and IAAI changes in monotonically increasing sequence order. Persist meta.next_cursor
        only after your local transaction succeeds, then pass it back as after on the next request. Sequence gaps are
        valid. Non-material technical null/zero initialization noise is filtered. If a cursor falls outside the retained
        window, the API returns HTTP 410 cursor_expired instead of silently skipping events. New reserve.changed events
        carry pricing.seller_reserve.* fields when a source-observed reserve status or inferred threshold changes.
        Reserve Off alone does not establish a numerical reserve.

        Args:
            after: Return events with sequence greater than this checkpoint. Start with 0 for the oldest retained event.
            limit: Value sent with the request.
            platform: Value sent with the request.
            event_type: Value sent with the request.
            terminal: Value sent with the request.
            lot_number: Value sent with the request.
            vin: Value sent with the request.
            include_record: Optional current-record hydration. true/all adds the current full normalized vehicle record
                to every event where available; created adds it only to lot.created. Sync Center incremental feeds use
                created to stay self-contained without duplicating large media payloads on every bid/status event.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sequence-ordered change events.

        Raises:
            ApiError: The requested checkpoint has expired from the retained replay window. Unauthorized. Invalid query
                parameters. ``error`` is ``ApiErrorModel | ChangeCursorExpiredResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_vehicle_changes(
                after=after,
                limit=limit,
                platform=platform,
                event_type=event_type,
                terminal=terminal,
                lot_number=lot_number,
                vin=vin,
                include_record=include_record,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncChangeStreamWithRawResponse:
        return self._with_raw_response


class ChangeStreamWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_vehicle_changes(
        self,
        *,
        after: int | None = 0,
        limit: int | None = 100,
        platform: PlatformOrStr | None = None,
        event_type: EventTypeOrStr | None = None,
        terminal: bool | None = None,
        lot_number: str | None = None,
        vin: str | None = None,
        include_record: IncludeRecord1 | IncludeRecord1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VehicleChangesResponse, ListVehicleChangesErrorBody]:
        """Read material Copart and IAAI changes in monotonically increasing sequence order. Persist meta.next_cursor
        only after your local transaction succeeds, then pass it back as after on the next request. Sequence gaps are
        valid. Non-material technical null/zero initialization noise is filtered. If a cursor falls outside the retained
        window, the API returns HTTP 410 cursor_expired instead of silently skipping events. New reserve.changed events
        carry pricing.seller_reserve.* fields when a source-observed reserve status or inferred threshold changes.
        Reserve Off alone does not establish a numerical reserve.

        Args:
            after: Return events with sequence greater than this checkpoint. Start with 0 for the oldest retained event.
            limit: Value sent with the request.
            platform: Value sent with the request.
            event_type: Value sent with the request.
            terminal: Value sent with the request.
            lot_number: Value sent with the request.
            vin: Value sent with the request.
            include_record: Optional current-record hydration. true/all adds the current full normalized vehicle record
                to every event where available; created adds it only to lot.created. Sync Center incremental feeds use
                created to stay self-contained without duplicating large media payloads on every bid/status event.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/changes"),
            query_params=[
                param[int | None]("after", after),
                param[int | None]("limit", limit),
                param[PlatformOrStr | None]("platform", platform),
                param[EventTypeOrStr | None]("event_type", event_type),
                param[bool | None]("terminal", terminal),
                param[str | None]("lot_number", lot_number),
                param[str | None]("vin", vin),
                param[IncludeRecord1 | IncludeRecord1Dict | None]("include_record", include_record),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[VehicleChangesResponse],
            error_mapper=list_vehicle_changes_error_mapper,
            request_options=request_options,
        )


class AsyncChangeStreamWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_vehicle_changes(
        self,
        *,
        after: int | None = 0,
        limit: int | None = 100,
        platform: PlatformOrStr | None = None,
        event_type: EventTypeOrStr | None = None,
        terminal: bool | None = None,
        lot_number: str | None = None,
        vin: str | None = None,
        include_record: IncludeRecord1 | IncludeRecord1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VehicleChangesResponse, ListVehicleChangesErrorBody]:
        """Read material Copart and IAAI changes in monotonically increasing sequence order. Persist meta.next_cursor
        only after your local transaction succeeds, then pass it back as after on the next request. Sequence gaps are
        valid. Non-material technical null/zero initialization noise is filtered. If a cursor falls outside the retained
        window, the API returns HTTP 410 cursor_expired instead of silently skipping events. New reserve.changed events
        carry pricing.seller_reserve.* fields when a source-observed reserve status or inferred threshold changes.
        Reserve Off alone does not establish a numerical reserve.

        Args:
            after: Return events with sequence greater than this checkpoint. Start with 0 for the oldest retained event.
            limit: Value sent with the request.
            platform: Value sent with the request.
            event_type: Value sent with the request.
            terminal: Value sent with the request.
            lot_number: Value sent with the request.
            vin: Value sent with the request.
            include_record: Optional current-record hydration. true/all adds the current full normalized vehicle record
                to every event where available; created adds it only to lot.created. Sync Center incremental feeds use
                created to stay self-contained without duplicating large media payloads on every bid/status event.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/changes"),
            query_params=[
                param[int | None]("after", after),
                param[int | None]("limit", limit),
                param[PlatformOrStr | None]("platform", platform),
                param[EventTypeOrStr | None]("event_type", event_type),
                param[bool | None]("terminal", terminal),
                param[str | None]("lot_number", lot_number),
                param[str | None]("vin", vin),
                param[IncludeRecord1 | IncludeRecord1Dict | None]("include_record", include_record),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[VehicleChangesResponse],
            error_mapper=list_vehicle_changes_error_mapper,
            request_options=request_options,
        )
