from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .country_metadata import CountryMetadata, CountryMetadataDict
from .currency import Currency, CurrencyDict
from .geo_network import GeoNetwork, GeoNetworkDict
from .ip_location import IpLocation, IpLocationDict


class GeolocationResponse(SdkBaseModel):
    ip: Optional[str] = UNSET
    location: Optional[IpLocation] = UNSET
    country_metadata: Optional[CountryMetadata] = UNSET
    network: Optional[GeoNetwork] = UNSET
    currency: Optional[Currency] = UNSET


class GeolocationResponseDict(TypedDict):
    ip: NotRequired[str]
    location: NotRequired[IpLocationDict]
    country_metadata: NotRequired[CountryMetadataDict]
    network: NotRequired[GeoNetworkDict]
    currency: NotRequired[CurrencyDict]
