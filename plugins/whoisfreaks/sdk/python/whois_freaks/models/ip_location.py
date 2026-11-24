from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IpLocation(SdkBaseModel):
    continent_code: Optional[str] = UNSET
    continent_name: Optional[str] = UNSET
    country_code2: Optional[str] = UNSET
    country_code3: Optional[str] = UNSET
    country_name: Optional[str] = UNSET
    country_name_official: Optional[str] = UNSET
    country_capital: Optional[str] = UNSET
    state_prov: Optional[str] = UNSET
    state_code: Optional[str] = UNSET
    district: Optional[str] = UNSET
    city: Optional[str] = UNSET
    locality: Optional[str] = UNSET
    accuracy_radius: Optional[str] = UNSET
    confidence: Optional[str] = UNSET
    zipcode: Optional[str] = UNSET
    latitude: Optional[str] = UNSET
    longitude: Optional[str] = UNSET
    is_eu: Optional[bool] = UNSET
    geoname_id: Optional[str] = UNSET
    country_emoji: Optional[str] = UNSET


class IpLocationDict(TypedDict):
    continent_code: NotRequired[str]
    continent_name: NotRequired[str]
    country_code2: NotRequired[str]
    country_code3: NotRequired[str]
    country_name: NotRequired[str]
    country_name_official: NotRequired[str]
    country_capital: NotRequired[str]
    state_prov: NotRequired[str]
    state_code: NotRequired[str]
    district: NotRequired[str]
    city: NotRequired[str]
    locality: NotRequired[str]
    accuracy_radius: NotRequired[str]
    confidence: NotRequired[str]
    zipcode: NotRequired[str]
    latitude: NotRequired[str]
    longitude: NotRequired[str]
    is_eu: NotRequired[bool]
    geoname_id: NotRequired[str]
    country_emoji: NotRequired[str]
