from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .auction_info import AuctionInfo, AuctionInfoDict
from .included_vehicle_history_item import IncludedVehicleHistoryItem, IncludedVehicleHistoryItemDict
from .included_vin_lot import IncludedVinLot, IncludedVinLotDict
from .media_info import MediaInfo, MediaInfoDict
from .odometer import Odometer, OdometerDict
from .pricing_info import PricingInfo, PricingInfoDict
from .sale_document import SaleDocument, SaleDocumentDict
from .seller import Seller, SellerDict
from .vehicle_generation import VehicleGeneration, VehicleGenerationDict
from .vehicle_location import VehicleLocation, VehicleLocationDict
from .vehicle_series import VehicleSeries, VehicleSeriesDict
from .vehicle_specs import VehicleSpecs, VehicleSpecsDict


class Vehicle(SdkBaseModel):
    """Normalized Copart or IAAI auction vehicle record."""

    platform: Optional[str] = UNSET
    lot_number: Optional[str] = UNSET
    vin: Optional[str] = UNSET
    title: Optional[str] = UNSET
    year: Optional[int] = UNSET
    make: Optional[str] = UNSET
    model: Optional[str] = UNSET
    series: OptionalNullable[VehicleSeries] = UNSET
    """Canonical model-family / series resolved from the generation catalog."""

    generation: OptionalNullable[VehicleGeneration] = UNSET
    """Resolved vehicle generation metadata when the source vehicle can be matched unambiguously."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    color: Optional[str] = UNSET
    fuel_type: Optional[str] = UNSET
    transmission: Optional[str] = UNSET
    drive_type: Optional[str] = UNSET
    odometer: OptionalNullable[Odometer] = UNSET
    """Source-backed odometer readings in miles and kilometres. Missing readings may be null; unknown mileage is not
    zero."""

    damage: Optional[str] = UNSET
    auction: Optional[AuctionInfo] = UNSET
    pricing: Optional[PricingInfo] = UNSET
    location: Optional[VehicleLocation] = UNSET
    sale_document: Optional[SaleDocument] = UNSET
    """Normalized auction sale/title document metadata. issuing_state is the document/title issuer state and is distinct
    from the auction yard/location state."""

    media: Optional[MediaInfo] = UNSET
    history: Optional[list[IncludedVehicleHistoryItem]] = UNSET
    """Present only when include contains history. Retained sale-history entries for known auction lots of the same
    VIN."""

    vin_lots: Optional[list[IncludedVinLot]] = UNSET
    """Present only when include contains vin_lots. Other known auction lot records for the same VIN, returned in
    summary form."""

    details: OptionalNullable[Any] = UNSET
    """Source-aware detail metadata. IAAI includes normalized inventory sections;
    auction_information.prebidInformation.reserveMet is a raw IAAI prebid signal and is not equivalent to Copart
    seller_reserve_met. Copart includes source-backed sale_status (including ess values such as Minimum Bid) and
    seller_reserve_met when the Copart source explicitly supplies the flag, plus sanitized bid/yard/media metadata. Null
    in summary view."""

    vehicle_specs: Optional[VehicleSpecs] = UNSET
    """Normalized vehicle specifications. Field availability varies by auction source and lot."""

    seller: OptionalNullable[Seller] = UNSET
    """Available seller name and name-based classification. Unknown means the source does not supply enough evidence;
    damage, title and missing valuations do not establish seller type. Name-based classification is inferred, not a
    verified source category."""


class VehicleDict(TypedDict):
    platform: NotRequired[str]
    lot_number: NotRequired[str]
    vin: NotRequired[str]
    title: NotRequired[str]
    year: NotRequired[int]
    make: NotRequired[str]
    model: NotRequired[str]
    series: NotRequired[VehicleSeriesDict | None]
    generation: NotRequired[VehicleGenerationDict | None]
    type_: NotRequired[str]
    color: NotRequired[str]
    fuel_type: NotRequired[str]
    transmission: NotRequired[str]
    drive_type: NotRequired[str]
    odometer: NotRequired[OdometerDict | None]
    damage: NotRequired[str]
    auction: NotRequired[AuctionInfoDict]
    pricing: NotRequired[PricingInfoDict]
    location: NotRequired[VehicleLocationDict]
    sale_document: NotRequired[SaleDocumentDict]
    media: NotRequired[MediaInfoDict]
    history: NotRequired[list[IncludedVehicleHistoryItemDict]]
    vin_lots: NotRequired[list[IncludedVinLotDict]]
    details: NotRequired[Any | None]
    vehicle_specs: NotRequired[VehicleSpecsDict]
    seller: NotRequired[SellerDict | None]
