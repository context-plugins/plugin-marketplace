from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_vehicle_details_error import GetVehicleDetailsErrorBody, get_vehicle_details_error_mapper
from ..errors.list_auction_vehicles_error import ListAuctionVehiclesErrorBody, list_auction_vehicles_error_mapper
from ..models.enums.auction_type import AuctionType, AuctionTypeOrInt
from ..models.enums.damage import DamageOrStr
from ..models.enums.drive_type import DriveTypeOrStr
from ..models.enums.fuel_type import FuelTypeOrStr
from ..models.enums.has_key import HasKeyOrStr
from ..models.enums.lot_status import LotStatus, LotStatusOrStr
from ..models.enums.lot_sub_status import LotSubStatus, LotSubStatusOrStr
from ..models.enums.platform import PlatformOrStr
from ..models.enums.seller_type import SellerTypeOrStr
from ..models.enums.transmission import TransmissionOrStr
from ..models.enums.units import Units, UnitsOrStr
from ..models.enums.upcoming import Upcoming, UpcomingOrStr
from ..models.unions.body_style import BodyStyle, BodyStyleDict
from ..models.unions.body_type import BodyType, BodyTypeDict
from ..models.unions.engine_type1 import EngineType1, EngineType1Dict
from ..models.unions.generation import Generation, GenerationDict
from ..models.unions.generation_id import GenerationId, GenerationIdDict
from ..models.unions.loc_state import LocState, LocStateDict
from ..models.unions.run_cond1 import RunCond1, RunCond1Dict
from ..models.unions.series import Series, SeriesDict
from ..models.unions.type1 import Type1, Type1Dict
from ..models.unions.vin_prefix import VinPrefix, VinPrefixDict
from ..models.vehicle_details_response import VehicleDetailsResponse
from ..models.vehicle_list_response import VehicleListResponse
from ..server.server import Server


class Vehicles:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VehiclesWithRawResponse(client, server, auth)

    def get_vehicle_details(
        self, slug_vin: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> VehicleDetailsResponse:
        """Get vehicle auction details by VIN or lot number. Use include=history,vin_lots to embed retained sale history
        and other known lots for the same VIN in one response. Full vehicle detail pricing.seller_reserve contains
        source-observed reserve status, optional confirmed price and inferred bid bounds. Unknown or ambiguous Reserve
        Off will not be presented as an exact reserve price.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            include: Optionally embed related detail-page data in the same response. Comma-separated values: history
                adds retained sale-history records across known Copart/IAAI lots for the VIN; vin_lots adds other known
                auction lots for the same VIN in summary form. Example: include=history,vin_lots.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vehicle auction details.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_vehicle_details(slug_vin, include=include, request_options=request_options)
        )

    def list_auction_vehicles(
        self,
        *,
        s: str | None = None,
        lot_status: LotStatusOrStr | None = LotStatus.ALL,
        lot_sub_status: LotSubStatusOrStr | None = LotSubStatus.OPEN,
        upcoming: UpcomingOrStr | None = Upcoming.ALL,
        auction_date_pending: bool | None = None,
        updated_within_minutes: int | None = None,
        price_min: float | None = None,
        price_max: float | None = None,
        year_from: int | None = None,
        year_to: int | None = None,
        auction_type: AuctionTypeOrInt | None = AuctionType.VALUE_0,
        platform: PlatformOrStr | None = None,
        type_: Type1 | Type1Dict | None = None,
        body_style: BodyStyle | BodyStyleDict | None = None,
        body_type: BodyType | BodyTypeDict | None = None,
        make: str | None = None,
        series: Series | SeriesDict | None = None,
        model: str | None = None,
        generation_id: GenerationId | GenerationIdDict | None = None,
        generation: Generation | GenerationDict | None = None,
        color: list[str] | None = None,
        vin_prefix: VinPrefix | VinPrefixDict | None = None,
        fuel_type: list[FuelTypeOrStr] | None = None,
        odometer_from: float | None = None,
        odometer_to: float | None = None,
        engine_size_from: float | None = None,
        engine_size_to: float | None = None,
        engine_type: EngineType1 | EngineType1Dict | None = None,
        transmission: list[TransmissionOrStr] | None = None,
        cylinders: list[int] | None = None,
        drive_type: list[DriveTypeOrStr] | None = None,
        run_cond: RunCond1 | RunCond1Dict | None = None,
        damage: list[DamageOrStr] | None = None,
        has_key: HasKeyOrStr | None = None,
        cursor: str | None = None,
        zip_: str | None = None,
        radius: float | None = None,
        units: UnitsOrStr | None = Units.MI,
        per_page: int | None = 20,
        include_total: bool | None = False,
        facility_id: str | None = None,
        loc_state: LocState | LocStateDict | None = None,
        office_name: str | None = None,
        auction_date_from: Date | None = None,
        auction_date_to: Date | None = None,
        today_only: bool | None = False,
        sale_document_pending: bool | None = False,
        sale_document_type: str | None = None,
        seller_type: SellerTypeOrStr | None = None,
        has_shipping_price: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VehicleListResponse:
        """Search and incrementally synchronize normalized Copart and IAAI inventory. Filters are cumulative. Applied
        filters are echoed in meta.applied_filters; unrecognized query keys are reported in meta.unknown_filters. Use
        include_total=true only when an exact reconciliation count is required.

        Args:
            s: Search by lot number, VIN, or vehicle title.
            lot_status: Lot status filter.
            lot_sub_status: Normalized lot sub-status. Open = active/open and not sold; Live = currently live when
                supported; Ended = ended/closed state. Open also includes imported active lots with an unassigned
                auction date. Their auction_at is null and auction_date_pending is true. Explicit date-range filters
                exclude unassigned dates.
            upcoming: Upcoming selector. all = no restriction; only = only upcoming eligible lots; without = exclude
                upcoming lots. This does not override Open/Sold state logic.
            auction_date_pending: true returns only source listings whose auction date is not yet assigned; false
                excludes date-pending lots.
            updated_within_minutes: Return records whose updated_at changed within the requested number of minutes.
                Designed for incremental synchronization; combine with cursor pagination and auction filters.
            price_min: Minimum price.
            price_max: Maximum price.
            year_from: Minimum vehicle year.
            year_to: Maximum vehicle year.
            auction_type: Numeric auction platform filter: 0 = all supported platforms, 1 = Copart, 2 = IAAI. Use either
                auction_type or platform in the same request.
            platform: Readable auction platform filter. Use copart or iaai. Use either platform or auction_type in the
                same request.
            type_: Vehicle type. Multiple values are OR-ed; query-array syntax such as type[]=COUPE&type[]=AUTOMOBILE is
                supported.
            body_style: Filter by vehicle_specs.body_style. Multiple values are OR-ed. Query-array syntax is supported,
                for example body_style[]=Coupe&body_style[]=Convertible. IAAI uses its VehicleClass value; Copart uses
                the source-backed Body Style field.
            body_type: Compatibility alias for body_style. Multiple values are OR-ed. Prefer body_style for new
                integrations.
            make: Vehicle make.
            series: Canonical vehicle series / model family. Examples: BMW Series 3, Mercedes-Benz C-Class, Toyota
                Camry, Audi A4, Ford F-150. Optional; can be combined with model and generation filters.
            model: Vehicle model.
            generation_id: Vehicle generation catalog ID. Use /vehicles/filters?make=BMW&model=X5 to discover valid IDs.
                Multiple IDs are supported.
            generation: Human-readable generation alias, for example F15, E70 or G05. generation_id is preferred for
                stable integrations.
            color: Vehicle color. Multiple values are supported.
            vin_prefix: Match VINs that start with any supplied prefix (OR). Supports comma-separated values
                vin_prefix=1,4,5 and array syntax vin_prefix[]=1&vin_prefix[]=4&vin_prefix[]=5. Prefixes consist of 1–3
                VIN letters/numbers; at most 20 unique prefixes. Combines with other filters, cursor, and include_total.
                Prefix does not guarantee manufacturing country.
            fuel_type: Normalized fuel type; Hybrid includes source values Hybrid, Electric and Gas Hybrid, Hybrid
                Engine, and Electric and Diesel Hybrid. Multiple values are supported.
            odometer_from: Minimum odometer value in miles. Vehicle responses also include the converted km value.
            odometer_to: Maximum odometer value in miles. Vehicle responses also include the converted km value.
            engine_size_from: Minimum engine size.
            engine_size_to: Maximum engine size.
            engine_type: Engine layout. I=inline, V=V engine, W=W engine, B/H=boxer/horizontally opposed. Scalar and
                repeated-array forms are supported.
            transmission: Transmission type. Multiple values are supported.
            cylinders: Number of cylinders. Multiple values are supported.
            drive_type: Drive type. Multiple values are supported.
            run_cond: Source-backed running-condition filter. Multiple values are OR-ed; use both Run & Drive Verified
                and RUNS AND DRIVES for a combined Copart + IAAI running-vehicle filter.
            damage: Damage type. Multiple values are supported.
            has_key: Filter vehicles by key availability.
            cursor: Cursor for pagination.
            zip_: ZIP code for location-based search.
            radius: Search radius around ZIP.
            units: Distance units.
            per_page: Records per vehicle-search page. Default 20. The effective maximum is plan-dependent; public plan
                entitlements can use maxima of 20, 30 or 40, while approved custom plans may differ. Use the active
                account entitlement as the runtime source of truth.
            include_total: When true, meta.total attempts an exact filtered count. For very large or expensive result
                sets the safety-bounded count may return null; cursor pagination remains available.
            facility_id: Auction facility ID.
            loc_state: Auction facility state/region code. Accepts a scalar or repeated/form-style array, e.g.
                loc_state=FL or loc_state[]=FL.
            office_name: Auction office or branch name.
            auction_date_from: Auction date from.
            auction_date_to: Auction date to.
            today_only: Return only vehicles with auctions today.
            sale_document_pending: Filter by pending sale document.
            sale_document_type: Sale document type.
            seller_type: Filter by name-based seller classification, not damage/title heuristics. Missing seller names
                are unknown and do not match non_insurance. For non_insurance, also provide make, model, facility_id or
                s with a specific VIN/lot; unscoped searches return 422 selective_filter_required. For a full catalogue,
                sync and filter known seller types locally.
            has_shipping_price: Return only vehicles with shipping price data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of vehicle auction records.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.list_auction_vehicles(
                s=s,
                lot_status=lot_status,
                lot_sub_status=lot_sub_status,
                upcoming=upcoming,
                auction_date_pending=auction_date_pending,
                updated_within_minutes=updated_within_minutes,
                price_min=price_min,
                price_max=price_max,
                year_from=year_from,
                year_to=year_to,
                auction_type=auction_type,
                platform=platform,
                type_=type_,
                body_style=body_style,
                body_type=body_type,
                make=make,
                series=series,
                model=model,
                generation_id=generation_id,
                generation=generation,
                color=color,
                vin_prefix=vin_prefix,
                fuel_type=fuel_type,
                odometer_from=odometer_from,
                odometer_to=odometer_to,
                engine_size_from=engine_size_from,
                engine_size_to=engine_size_to,
                engine_type=engine_type,
                transmission=transmission,
                cylinders=cylinders,
                drive_type=drive_type,
                run_cond=run_cond,
                damage=damage,
                has_key=has_key,
                cursor=cursor,
                zip_=zip_,
                radius=radius,
                units=units,
                per_page=per_page,
                include_total=include_total,
                facility_id=facility_id,
                loc_state=loc_state,
                office_name=office_name,
                auction_date_from=auction_date_from,
                auction_date_to=auction_date_to,
                today_only=today_only,
                sale_document_pending=sale_document_pending,
                sale_document_type=sale_document_type,
                seller_type=seller_type,
                has_shipping_price=has_shipping_price,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> VehiclesWithRawResponse:
        return self._with_raw_response


class AsyncVehicles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVehiclesWithRawResponse(client, server, auth)

    async def get_vehicle_details(
        self, slug_vin: str, *, include: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> VehicleDetailsResponse:
        """Get vehicle auction details by VIN or lot number. Use include=history,vin_lots to embed retained sale history
        and other known lots for the same VIN in one response. Full vehicle detail pricing.seller_reserve contains
        source-observed reserve status, optional confirmed price and inferred bid bounds. Unknown or ambiguous Reserve
        Off will not be presented as an exact reserve price.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            include: Optionally embed related detail-page data in the same response. Comma-separated values: history
                adds retained sale-history records across known Copart/IAAI lots for the VIN; vin_lots adds other known
                auction lots for the same VIN in summary form. Example: include=history,vin_lots.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vehicle auction details.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vehicle_details(
                slug_vin, include=include, request_options=request_options
            ),
        )

    async def list_auction_vehicles(
        self,
        *,
        s: str | None = None,
        lot_status: LotStatusOrStr | None = LotStatus.ALL,
        lot_sub_status: LotSubStatusOrStr | None = LotSubStatus.OPEN,
        upcoming: UpcomingOrStr | None = Upcoming.ALL,
        auction_date_pending: bool | None = None,
        updated_within_minutes: int | None = None,
        price_min: float | None = None,
        price_max: float | None = None,
        year_from: int | None = None,
        year_to: int | None = None,
        auction_type: AuctionTypeOrInt | None = AuctionType.VALUE_0,
        platform: PlatformOrStr | None = None,
        type_: Type1 | Type1Dict | None = None,
        body_style: BodyStyle | BodyStyleDict | None = None,
        body_type: BodyType | BodyTypeDict | None = None,
        make: str | None = None,
        series: Series | SeriesDict | None = None,
        model: str | None = None,
        generation_id: GenerationId | GenerationIdDict | None = None,
        generation: Generation | GenerationDict | None = None,
        color: list[str] | None = None,
        vin_prefix: VinPrefix | VinPrefixDict | None = None,
        fuel_type: list[FuelTypeOrStr] | None = None,
        odometer_from: float | None = None,
        odometer_to: float | None = None,
        engine_size_from: float | None = None,
        engine_size_to: float | None = None,
        engine_type: EngineType1 | EngineType1Dict | None = None,
        transmission: list[TransmissionOrStr] | None = None,
        cylinders: list[int] | None = None,
        drive_type: list[DriveTypeOrStr] | None = None,
        run_cond: RunCond1 | RunCond1Dict | None = None,
        damage: list[DamageOrStr] | None = None,
        has_key: HasKeyOrStr | None = None,
        cursor: str | None = None,
        zip_: str | None = None,
        radius: float | None = None,
        units: UnitsOrStr | None = Units.MI,
        per_page: int | None = 20,
        include_total: bool | None = False,
        facility_id: str | None = None,
        loc_state: LocState | LocStateDict | None = None,
        office_name: str | None = None,
        auction_date_from: Date | None = None,
        auction_date_to: Date | None = None,
        today_only: bool | None = False,
        sale_document_pending: bool | None = False,
        sale_document_type: str | None = None,
        seller_type: SellerTypeOrStr | None = None,
        has_shipping_price: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VehicleListResponse:
        """Search and incrementally synchronize normalized Copart and IAAI inventory. Filters are cumulative. Applied
        filters are echoed in meta.applied_filters; unrecognized query keys are reported in meta.unknown_filters. Use
        include_total=true only when an exact reconciliation count is required.

        Args:
            s: Search by lot number, VIN, or vehicle title.
            lot_status: Lot status filter.
            lot_sub_status: Normalized lot sub-status. Open = active/open and not sold; Live = currently live when
                supported; Ended = ended/closed state. Open also includes imported active lots with an unassigned
                auction date. Their auction_at is null and auction_date_pending is true. Explicit date-range filters
                exclude unassigned dates.
            upcoming: Upcoming selector. all = no restriction; only = only upcoming eligible lots; without = exclude
                upcoming lots. This does not override Open/Sold state logic.
            auction_date_pending: true returns only source listings whose auction date is not yet assigned; false
                excludes date-pending lots.
            updated_within_minutes: Return records whose updated_at changed within the requested number of minutes.
                Designed for incremental synchronization; combine with cursor pagination and auction filters.
            price_min: Minimum price.
            price_max: Maximum price.
            year_from: Minimum vehicle year.
            year_to: Maximum vehicle year.
            auction_type: Numeric auction platform filter: 0 = all supported platforms, 1 = Copart, 2 = IAAI. Use either
                auction_type or platform in the same request.
            platform: Readable auction platform filter. Use copart or iaai. Use either platform or auction_type in the
                same request.
            type_: Vehicle type. Multiple values are OR-ed; query-array syntax such as type[]=COUPE&type[]=AUTOMOBILE is
                supported.
            body_style: Filter by vehicle_specs.body_style. Multiple values are OR-ed. Query-array syntax is supported,
                for example body_style[]=Coupe&body_style[]=Convertible. IAAI uses its VehicleClass value; Copart uses
                the source-backed Body Style field.
            body_type: Compatibility alias for body_style. Multiple values are OR-ed. Prefer body_style for new
                integrations.
            make: Vehicle make.
            series: Canonical vehicle series / model family. Examples: BMW Series 3, Mercedes-Benz C-Class, Toyota
                Camry, Audi A4, Ford F-150. Optional; can be combined with model and generation filters.
            model: Vehicle model.
            generation_id: Vehicle generation catalog ID. Use /vehicles/filters?make=BMW&model=X5 to discover valid IDs.
                Multiple IDs are supported.
            generation: Human-readable generation alias, for example F15, E70 or G05. generation_id is preferred for
                stable integrations.
            color: Vehicle color. Multiple values are supported.
            vin_prefix: Match VINs that start with any supplied prefix (OR). Supports comma-separated values
                vin_prefix=1,4,5 and array syntax vin_prefix[]=1&vin_prefix[]=4&vin_prefix[]=5. Prefixes consist of 1–3
                VIN letters/numbers; at most 20 unique prefixes. Combines with other filters, cursor, and include_total.
                Prefix does not guarantee manufacturing country.
            fuel_type: Normalized fuel type; Hybrid includes source values Hybrid, Electric and Gas Hybrid, Hybrid
                Engine, and Electric and Diesel Hybrid. Multiple values are supported.
            odometer_from: Minimum odometer value in miles. Vehicle responses also include the converted km value.
            odometer_to: Maximum odometer value in miles. Vehicle responses also include the converted km value.
            engine_size_from: Minimum engine size.
            engine_size_to: Maximum engine size.
            engine_type: Engine layout. I=inline, V=V engine, W=W engine, B/H=boxer/horizontally opposed. Scalar and
                repeated-array forms are supported.
            transmission: Transmission type. Multiple values are supported.
            cylinders: Number of cylinders. Multiple values are supported.
            drive_type: Drive type. Multiple values are supported.
            run_cond: Source-backed running-condition filter. Multiple values are OR-ed; use both Run & Drive Verified
                and RUNS AND DRIVES for a combined Copart + IAAI running-vehicle filter.
            damage: Damage type. Multiple values are supported.
            has_key: Filter vehicles by key availability.
            cursor: Cursor for pagination.
            zip_: ZIP code for location-based search.
            radius: Search radius around ZIP.
            units: Distance units.
            per_page: Records per vehicle-search page. Default 20. The effective maximum is plan-dependent; public plan
                entitlements can use maxima of 20, 30 or 40, while approved custom plans may differ. Use the active
                account entitlement as the runtime source of truth.
            include_total: When true, meta.total attempts an exact filtered count. For very large or expensive result
                sets the safety-bounded count may return null; cursor pagination remains available.
            facility_id: Auction facility ID.
            loc_state: Auction facility state/region code. Accepts a scalar or repeated/form-style array, e.g.
                loc_state=FL or loc_state[]=FL.
            office_name: Auction office or branch name.
            auction_date_from: Auction date from.
            auction_date_to: Auction date to.
            today_only: Return only vehicles with auctions today.
            sale_document_pending: Filter by pending sale document.
            sale_document_type: Sale document type.
            seller_type: Filter by name-based seller classification, not damage/title heuristics. Missing seller names
                are unknown and do not match non_insurance. For non_insurance, also provide make, model, facility_id or
                s with a specific VIN/lot; unscoped searches return 422 selective_filter_required. For a full catalogue,
                sync and filter known seller types locally.
            has_shipping_price: Return only vehicles with shipping price data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of vehicle auction records.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.list_auction_vehicles(
                s=s,
                lot_status=lot_status,
                lot_sub_status=lot_sub_status,
                upcoming=upcoming,
                auction_date_pending=auction_date_pending,
                updated_within_minutes=updated_within_minutes,
                price_min=price_min,
                price_max=price_max,
                year_from=year_from,
                year_to=year_to,
                auction_type=auction_type,
                platform=platform,
                type_=type_,
                body_style=body_style,
                body_type=body_type,
                make=make,
                series=series,
                model=model,
                generation_id=generation_id,
                generation=generation,
                color=color,
                vin_prefix=vin_prefix,
                fuel_type=fuel_type,
                odometer_from=odometer_from,
                odometer_to=odometer_to,
                engine_size_from=engine_size_from,
                engine_size_to=engine_size_to,
                engine_type=engine_type,
                transmission=transmission,
                cylinders=cylinders,
                drive_type=drive_type,
                run_cond=run_cond,
                damage=damage,
                has_key=has_key,
                cursor=cursor,
                zip_=zip_,
                radius=radius,
                units=units,
                per_page=per_page,
                include_total=include_total,
                facility_id=facility_id,
                loc_state=loc_state,
                office_name=office_name,
                auction_date_from=auction_date_from,
                auction_date_to=auction_date_to,
                today_only=today_only,
                sale_document_pending=sale_document_pending,
                sale_document_type=sale_document_type,
                seller_type=seller_type,
                has_shipping_price=has_shipping_price,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVehiclesWithRawResponse:
        return self._with_raw_response


class VehiclesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_vehicle_details(
        self, slug_vin: str, *, include: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VehicleDetailsResponse, GetVehicleDetailsErrorBody]:
        """Get vehicle auction details by VIN or lot number. Use include=history,vin_lots to embed retained sale history
        and other known lots for the same VIN in one response. Full vehicle detail pricing.seller_reserve contains
        source-observed reserve status, optional confirmed price and inferred bid bounds. Unknown or ambiguous Reserve
        Off will not be presented as an exact reserve price.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            include: Optionally embed related detail-page data in the same response. Comma-separated values: history
                adds retained sale-history records across known Copart/IAAI lots for the VIN; vin_lots adds other known
                auction lots for the same VIN in summary form. Example: include=history,vin_lots.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}"),
            path_params=[param[str]("slugVin", slug_vin)],
            query_params=[param[str | None]("include", include)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[VehicleDetailsResponse],
            error_mapper=get_vehicle_details_error_mapper,
            request_options=request_options,
        )

    def list_auction_vehicles(
        self,
        *,
        s: str | None = None,
        lot_status: LotStatusOrStr | None = LotStatus.ALL,
        lot_sub_status: LotSubStatusOrStr | None = LotSubStatus.OPEN,
        upcoming: UpcomingOrStr | None = Upcoming.ALL,
        auction_date_pending: bool | None = None,
        updated_within_minutes: int | None = None,
        price_min: float | None = None,
        price_max: float | None = None,
        year_from: int | None = None,
        year_to: int | None = None,
        auction_type: AuctionTypeOrInt | None = AuctionType.VALUE_0,
        platform: PlatformOrStr | None = None,
        type_: Type1 | Type1Dict | None = None,
        body_style: BodyStyle | BodyStyleDict | None = None,
        body_type: BodyType | BodyTypeDict | None = None,
        make: str | None = None,
        series: Series | SeriesDict | None = None,
        model: str | None = None,
        generation_id: GenerationId | GenerationIdDict | None = None,
        generation: Generation | GenerationDict | None = None,
        color: list[str] | None = None,
        vin_prefix: VinPrefix | VinPrefixDict | None = None,
        fuel_type: list[FuelTypeOrStr] | None = None,
        odometer_from: float | None = None,
        odometer_to: float | None = None,
        engine_size_from: float | None = None,
        engine_size_to: float | None = None,
        engine_type: EngineType1 | EngineType1Dict | None = None,
        transmission: list[TransmissionOrStr] | None = None,
        cylinders: list[int] | None = None,
        drive_type: list[DriveTypeOrStr] | None = None,
        run_cond: RunCond1 | RunCond1Dict | None = None,
        damage: list[DamageOrStr] | None = None,
        has_key: HasKeyOrStr | None = None,
        cursor: str | None = None,
        zip_: str | None = None,
        radius: float | None = None,
        units: UnitsOrStr | None = Units.MI,
        per_page: int | None = 20,
        include_total: bool | None = False,
        facility_id: str | None = None,
        loc_state: LocState | LocStateDict | None = None,
        office_name: str | None = None,
        auction_date_from: Date | None = None,
        auction_date_to: Date | None = None,
        today_only: bool | None = False,
        sale_document_pending: bool | None = False,
        sale_document_type: str | None = None,
        seller_type: SellerTypeOrStr | None = None,
        has_shipping_price: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VehicleListResponse, ListAuctionVehiclesErrorBody]:
        """Search and incrementally synchronize normalized Copart and IAAI inventory. Filters are cumulative. Applied
        filters are echoed in meta.applied_filters; unrecognized query keys are reported in meta.unknown_filters. Use
        include_total=true only when an exact reconciliation count is required.

        Args:
            s: Search by lot number, VIN, or vehicle title.
            lot_status: Lot status filter.
            lot_sub_status: Normalized lot sub-status. Open = active/open and not sold; Live = currently live when
                supported; Ended = ended/closed state. Open also includes imported active lots with an unassigned
                auction date. Their auction_at is null and auction_date_pending is true. Explicit date-range filters
                exclude unassigned dates.
            upcoming: Upcoming selector. all = no restriction; only = only upcoming eligible lots; without = exclude
                upcoming lots. This does not override Open/Sold state logic.
            auction_date_pending: true returns only source listings whose auction date is not yet assigned; false
                excludes date-pending lots.
            updated_within_minutes: Return records whose updated_at changed within the requested number of minutes.
                Designed for incremental synchronization; combine with cursor pagination and auction filters.
            price_min: Minimum price.
            price_max: Maximum price.
            year_from: Minimum vehicle year.
            year_to: Maximum vehicle year.
            auction_type: Numeric auction platform filter: 0 = all supported platforms, 1 = Copart, 2 = IAAI. Use either
                auction_type or platform in the same request.
            platform: Readable auction platform filter. Use copart or iaai. Use either platform or auction_type in the
                same request.
            type_: Vehicle type. Multiple values are OR-ed; query-array syntax such as type[]=COUPE&type[]=AUTOMOBILE is
                supported.
            body_style: Filter by vehicle_specs.body_style. Multiple values are OR-ed. Query-array syntax is supported,
                for example body_style[]=Coupe&body_style[]=Convertible. IAAI uses its VehicleClass value; Copart uses
                the source-backed Body Style field.
            body_type: Compatibility alias for body_style. Multiple values are OR-ed. Prefer body_style for new
                integrations.
            make: Vehicle make.
            series: Canonical vehicle series / model family. Examples: BMW Series 3, Mercedes-Benz C-Class, Toyota
                Camry, Audi A4, Ford F-150. Optional; can be combined with model and generation filters.
            model: Vehicle model.
            generation_id: Vehicle generation catalog ID. Use /vehicles/filters?make=BMW&model=X5 to discover valid IDs.
                Multiple IDs are supported.
            generation: Human-readable generation alias, for example F15, E70 or G05. generation_id is preferred for
                stable integrations.
            color: Vehicle color. Multiple values are supported.
            vin_prefix: Match VINs that start with any supplied prefix (OR). Supports comma-separated values
                vin_prefix=1,4,5 and array syntax vin_prefix[]=1&vin_prefix[]=4&vin_prefix[]=5. Prefixes consist of 1–3
                VIN letters/numbers; at most 20 unique prefixes. Combines with other filters, cursor, and include_total.
                Prefix does not guarantee manufacturing country.
            fuel_type: Normalized fuel type; Hybrid includes source values Hybrid, Electric and Gas Hybrid, Hybrid
                Engine, and Electric and Diesel Hybrid. Multiple values are supported.
            odometer_from: Minimum odometer value in miles. Vehicle responses also include the converted km value.
            odometer_to: Maximum odometer value in miles. Vehicle responses also include the converted km value.
            engine_size_from: Minimum engine size.
            engine_size_to: Maximum engine size.
            engine_type: Engine layout. I=inline, V=V engine, W=W engine, B/H=boxer/horizontally opposed. Scalar and
                repeated-array forms are supported.
            transmission: Transmission type. Multiple values are supported.
            cylinders: Number of cylinders. Multiple values are supported.
            drive_type: Drive type. Multiple values are supported.
            run_cond: Source-backed running-condition filter. Multiple values are OR-ed; use both Run & Drive Verified
                and RUNS AND DRIVES for a combined Copart + IAAI running-vehicle filter.
            damage: Damage type. Multiple values are supported.
            has_key: Filter vehicles by key availability.
            cursor: Cursor for pagination.
            zip_: ZIP code for location-based search.
            radius: Search radius around ZIP.
            units: Distance units.
            per_page: Records per vehicle-search page. Default 20. The effective maximum is plan-dependent; public plan
                entitlements can use maxima of 20, 30 or 40, while approved custom plans may differ. Use the active
                account entitlement as the runtime source of truth.
            include_total: When true, meta.total attempts an exact filtered count. For very large or expensive result
                sets the safety-bounded count may return null; cursor pagination remains available.
            facility_id: Auction facility ID.
            loc_state: Auction facility state/region code. Accepts a scalar or repeated/form-style array, e.g.
                loc_state=FL or loc_state[]=FL.
            office_name: Auction office or branch name.
            auction_date_from: Auction date from.
            auction_date_to: Auction date to.
            today_only: Return only vehicles with auctions today.
            sale_document_pending: Filter by pending sale document.
            sale_document_type: Sale document type.
            seller_type: Filter by name-based seller classification, not damage/title heuristics. Missing seller names
                are unknown and do not match non_insurance. For non_insurance, also provide make, model, facility_id or
                s with a specific VIN/lot; unscoped searches return 422 selective_filter_required. For a full catalogue,
                sync and filter known seller types locally.
            has_shipping_price: Return only vehicles with shipping price data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles"),
            query_params=[
                param[str | None]("s", s),
                param[LotStatusOrStr | None]("lot_status", lot_status),
                param[LotSubStatusOrStr | None]("lot_sub_status", lot_sub_status),
                param[UpcomingOrStr | None]("upcoming", upcoming),
                param[bool | None]("auction_date_pending", auction_date_pending),
                param[int | None]("updated_within_minutes", updated_within_minutes),
                param[float | None]("price_min", price_min),
                param[float | None]("price_max", price_max),
                param[int | None]("year_from", year_from),
                param[int | None]("year_to", year_to),
                param[AuctionTypeOrInt | None]("auction_type", auction_type),
                param[PlatformOrStr | None]("platform", platform),
                param[Type1 | Type1Dict | None]("type", type_),
                param[BodyStyle | BodyStyleDict | None]("body_style", body_style),
                param[BodyType | BodyTypeDict | None]("body_type", body_type),
                param[str | None]("make", make),
                param[Series | SeriesDict | None]("series", series),
                param[str | None]("model", model),
                param[GenerationId | GenerationIdDict | None]("generation_id", generation_id),
                param[Generation | GenerationDict | None]("generation", generation),
                param[list[str] | None]("color", color),
                param[VinPrefix | VinPrefixDict | None]("vin_prefix", vin_prefix),
                param[list[FuelTypeOrStr] | None]("fuel_type", fuel_type),
                param[float | None]("odometer_from", odometer_from),
                param[float | None]("odometer_to", odometer_to),
                param[float | None]("engine_size_from", engine_size_from),
                param[float | None]("engine_size_to", engine_size_to),
                param[EngineType1 | EngineType1Dict | None]("engine_type", engine_type),
                param[list[TransmissionOrStr] | None]("transmission", transmission),
                param[list[int] | None]("cylinders", cylinders),
                param[list[DriveTypeOrStr] | None]("drive_type", drive_type),
                param[RunCond1 | RunCond1Dict | None]("run_cond", run_cond),
                param[list[DamageOrStr] | None]("damage", damage),
                param[HasKeyOrStr | None]("has_key", has_key),
                param[str | None]("cursor", cursor),
                param[str | None]("zip", zip_),
                param[float | None]("radius", radius),
                param[UnitsOrStr | None]("units", units),
                param[int | None]("per_page", per_page),
                param[bool | None]("include_total", include_total),
                param[str | None]("facility_id", facility_id),
                param[LocState | LocStateDict | None]("loc_state", loc_state),
                param[str | None]("office_name", office_name),
                param[Date | None]("auction_date_from", auction_date_from),
                param[Date | None]("auction_date_to", auction_date_to),
                param[bool | None]("today_only", today_only),
                param[bool | None]("sale_document_pending", sale_document_pending),
                param[str | None]("sale_document_type", sale_document_type),
                param[SellerTypeOrStr | None]("seller_type", seller_type),
                param[bool | None]("has_shipping_price", has_shipping_price),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[VehicleListResponse],
            error_mapper=list_auction_vehicles_error_mapper,
            request_options=request_options,
        )


class AsyncVehiclesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_vehicle_details(
        self, slug_vin: str, *, include: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[VehicleDetailsResponse, GetVehicleDetailsErrorBody]:
        """Get vehicle auction details by VIN or lot number. Use include=history,vin_lots to embed retained sale history
        and other known lots for the same VIN in one response. Full vehicle detail pricing.seller_reserve contains
        source-observed reserve status, optional confirmed price and inferred bid bounds. Unknown or ambiguous Reserve
        Off will not be presented as an exact reserve price.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            include: Optionally embed related detail-page data in the same response. Comma-separated values: history
                adds retained sale-history records across known Copart/IAAI lots for the VIN; vin_lots adds other known
                auction lots for the same VIN in summary form. Example: include=history,vin_lots.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}"),
            path_params=[param[str]("slugVin", slug_vin)],
            query_params=[param[str | None]("include", include)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[VehicleDetailsResponse],
            error_mapper=get_vehicle_details_error_mapper,
            request_options=request_options,
        )

    async def list_auction_vehicles(
        self,
        *,
        s: str | None = None,
        lot_status: LotStatusOrStr | None = LotStatus.ALL,
        lot_sub_status: LotSubStatusOrStr | None = LotSubStatus.OPEN,
        upcoming: UpcomingOrStr | None = Upcoming.ALL,
        auction_date_pending: bool | None = None,
        updated_within_minutes: int | None = None,
        price_min: float | None = None,
        price_max: float | None = None,
        year_from: int | None = None,
        year_to: int | None = None,
        auction_type: AuctionTypeOrInt | None = AuctionType.VALUE_0,
        platform: PlatformOrStr | None = None,
        type_: Type1 | Type1Dict | None = None,
        body_style: BodyStyle | BodyStyleDict | None = None,
        body_type: BodyType | BodyTypeDict | None = None,
        make: str | None = None,
        series: Series | SeriesDict | None = None,
        model: str | None = None,
        generation_id: GenerationId | GenerationIdDict | None = None,
        generation: Generation | GenerationDict | None = None,
        color: list[str] | None = None,
        vin_prefix: VinPrefix | VinPrefixDict | None = None,
        fuel_type: list[FuelTypeOrStr] | None = None,
        odometer_from: float | None = None,
        odometer_to: float | None = None,
        engine_size_from: float | None = None,
        engine_size_to: float | None = None,
        engine_type: EngineType1 | EngineType1Dict | None = None,
        transmission: list[TransmissionOrStr] | None = None,
        cylinders: list[int] | None = None,
        drive_type: list[DriveTypeOrStr] | None = None,
        run_cond: RunCond1 | RunCond1Dict | None = None,
        damage: list[DamageOrStr] | None = None,
        has_key: HasKeyOrStr | None = None,
        cursor: str | None = None,
        zip_: str | None = None,
        radius: float | None = None,
        units: UnitsOrStr | None = Units.MI,
        per_page: int | None = 20,
        include_total: bool | None = False,
        facility_id: str | None = None,
        loc_state: LocState | LocStateDict | None = None,
        office_name: str | None = None,
        auction_date_from: Date | None = None,
        auction_date_to: Date | None = None,
        today_only: bool | None = False,
        sale_document_pending: bool | None = False,
        sale_document_type: str | None = None,
        seller_type: SellerTypeOrStr | None = None,
        has_shipping_price: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VehicleListResponse, ListAuctionVehiclesErrorBody]:
        """Search and incrementally synchronize normalized Copart and IAAI inventory. Filters are cumulative. Applied
        filters are echoed in meta.applied_filters; unrecognized query keys are reported in meta.unknown_filters. Use
        include_total=true only when an exact reconciliation count is required.

        Args:
            s: Search by lot number, VIN, or vehicle title.
            lot_status: Lot status filter.
            lot_sub_status: Normalized lot sub-status. Open = active/open and not sold; Live = currently live when
                supported; Ended = ended/closed state. Open also includes imported active lots with an unassigned
                auction date. Their auction_at is null and auction_date_pending is true. Explicit date-range filters
                exclude unassigned dates.
            upcoming: Upcoming selector. all = no restriction; only = only upcoming eligible lots; without = exclude
                upcoming lots. This does not override Open/Sold state logic.
            auction_date_pending: true returns only source listings whose auction date is not yet assigned; false
                excludes date-pending lots.
            updated_within_minutes: Return records whose updated_at changed within the requested number of minutes.
                Designed for incremental synchronization; combine with cursor pagination and auction filters.
            price_min: Minimum price.
            price_max: Maximum price.
            year_from: Minimum vehicle year.
            year_to: Maximum vehicle year.
            auction_type: Numeric auction platform filter: 0 = all supported platforms, 1 = Copart, 2 = IAAI. Use either
                auction_type or platform in the same request.
            platform: Readable auction platform filter. Use copart or iaai. Use either platform or auction_type in the
                same request.
            type_: Vehicle type. Multiple values are OR-ed; query-array syntax such as type[]=COUPE&type[]=AUTOMOBILE is
                supported.
            body_style: Filter by vehicle_specs.body_style. Multiple values are OR-ed. Query-array syntax is supported,
                for example body_style[]=Coupe&body_style[]=Convertible. IAAI uses its VehicleClass value; Copart uses
                the source-backed Body Style field.
            body_type: Compatibility alias for body_style. Multiple values are OR-ed. Prefer body_style for new
                integrations.
            make: Vehicle make.
            series: Canonical vehicle series / model family. Examples: BMW Series 3, Mercedes-Benz C-Class, Toyota
                Camry, Audi A4, Ford F-150. Optional; can be combined with model and generation filters.
            model: Vehicle model.
            generation_id: Vehicle generation catalog ID. Use /vehicles/filters?make=BMW&model=X5 to discover valid IDs.
                Multiple IDs are supported.
            generation: Human-readable generation alias, for example F15, E70 or G05. generation_id is preferred for
                stable integrations.
            color: Vehicle color. Multiple values are supported.
            vin_prefix: Match VINs that start with any supplied prefix (OR). Supports comma-separated values
                vin_prefix=1,4,5 and array syntax vin_prefix[]=1&vin_prefix[]=4&vin_prefix[]=5. Prefixes consist of 1–3
                VIN letters/numbers; at most 20 unique prefixes. Combines with other filters, cursor, and include_total.
                Prefix does not guarantee manufacturing country.
            fuel_type: Normalized fuel type; Hybrid includes source values Hybrid, Electric and Gas Hybrid, Hybrid
                Engine, and Electric and Diesel Hybrid. Multiple values are supported.
            odometer_from: Minimum odometer value in miles. Vehicle responses also include the converted km value.
            odometer_to: Maximum odometer value in miles. Vehicle responses also include the converted km value.
            engine_size_from: Minimum engine size.
            engine_size_to: Maximum engine size.
            engine_type: Engine layout. I=inline, V=V engine, W=W engine, B/H=boxer/horizontally opposed. Scalar and
                repeated-array forms are supported.
            transmission: Transmission type. Multiple values are supported.
            cylinders: Number of cylinders. Multiple values are supported.
            drive_type: Drive type. Multiple values are supported.
            run_cond: Source-backed running-condition filter. Multiple values are OR-ed; use both Run & Drive Verified
                and RUNS AND DRIVES for a combined Copart + IAAI running-vehicle filter.
            damage: Damage type. Multiple values are supported.
            has_key: Filter vehicles by key availability.
            cursor: Cursor for pagination.
            zip_: ZIP code for location-based search.
            radius: Search radius around ZIP.
            units: Distance units.
            per_page: Records per vehicle-search page. Default 20. The effective maximum is plan-dependent; public plan
                entitlements can use maxima of 20, 30 or 40, while approved custom plans may differ. Use the active
                account entitlement as the runtime source of truth.
            include_total: When true, meta.total attempts an exact filtered count. For very large or expensive result
                sets the safety-bounded count may return null; cursor pagination remains available.
            facility_id: Auction facility ID.
            loc_state: Auction facility state/region code. Accepts a scalar or repeated/form-style array, e.g.
                loc_state=FL or loc_state[]=FL.
            office_name: Auction office or branch name.
            auction_date_from: Auction date from.
            auction_date_to: Auction date to.
            today_only: Return only vehicles with auctions today.
            sale_document_pending: Filter by pending sale document.
            sale_document_type: Sale document type.
            seller_type: Filter by name-based seller classification, not damage/title heuristics. Missing seller names
                are unknown and do not match non_insurance. For non_insurance, also provide make, model, facility_id or
                s with a specific VIN/lot; unscoped searches return 422 selective_filter_required. For a full catalogue,
                sync and filter known seller types locally.
            has_shipping_price: Return only vehicles with shipping price data.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles"),
            query_params=[
                param[str | None]("s", s),
                param[LotStatusOrStr | None]("lot_status", lot_status),
                param[LotSubStatusOrStr | None]("lot_sub_status", lot_sub_status),
                param[UpcomingOrStr | None]("upcoming", upcoming),
                param[bool | None]("auction_date_pending", auction_date_pending),
                param[int | None]("updated_within_minutes", updated_within_minutes),
                param[float | None]("price_min", price_min),
                param[float | None]("price_max", price_max),
                param[int | None]("year_from", year_from),
                param[int | None]("year_to", year_to),
                param[AuctionTypeOrInt | None]("auction_type", auction_type),
                param[PlatformOrStr | None]("platform", platform),
                param[Type1 | Type1Dict | None]("type", type_),
                param[BodyStyle | BodyStyleDict | None]("body_style", body_style),
                param[BodyType | BodyTypeDict | None]("body_type", body_type),
                param[str | None]("make", make),
                param[Series | SeriesDict | None]("series", series),
                param[str | None]("model", model),
                param[GenerationId | GenerationIdDict | None]("generation_id", generation_id),
                param[Generation | GenerationDict | None]("generation", generation),
                param[list[str] | None]("color", color),
                param[VinPrefix | VinPrefixDict | None]("vin_prefix", vin_prefix),
                param[list[FuelTypeOrStr] | None]("fuel_type", fuel_type),
                param[float | None]("odometer_from", odometer_from),
                param[float | None]("odometer_to", odometer_to),
                param[float | None]("engine_size_from", engine_size_from),
                param[float | None]("engine_size_to", engine_size_to),
                param[EngineType1 | EngineType1Dict | None]("engine_type", engine_type),
                param[list[TransmissionOrStr] | None]("transmission", transmission),
                param[list[int] | None]("cylinders", cylinders),
                param[list[DriveTypeOrStr] | None]("drive_type", drive_type),
                param[RunCond1 | RunCond1Dict | None]("run_cond", run_cond),
                param[list[DamageOrStr] | None]("damage", damage),
                param[HasKeyOrStr | None]("has_key", has_key),
                param[str | None]("cursor", cursor),
                param[str | None]("zip", zip_),
                param[float | None]("radius", radius),
                param[UnitsOrStr | None]("units", units),
                param[int | None]("per_page", per_page),
                param[bool | None]("include_total", include_total),
                param[str | None]("facility_id", facility_id),
                param[LocState | LocStateDict | None]("loc_state", loc_state),
                param[str | None]("office_name", office_name),
                param[Date | None]("auction_date_from", auction_date_from),
                param[Date | None]("auction_date_to", auction_date_to),
                param[bool | None]("today_only", today_only),
                param[bool | None]("sale_document_pending", sale_document_pending),
                param[str | None]("sale_document_type", sale_document_type),
                param[SellerTypeOrStr | None]("seller_type", seller_type),
                param[bool | None]("has_shipping_price", has_shipping_price),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[VehicleListResponse],
            error_mapper=list_auction_vehicles_error_mapper,
            request_options=request_options,
        )
