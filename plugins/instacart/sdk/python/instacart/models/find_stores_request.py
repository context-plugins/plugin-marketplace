from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FindStoresRequest(SdkBaseModel):
    address_line_1: Optional[str] = UNSET
    """The street address of the customer's location."""

    address_line_2: Optional[str] = UNSET
    """Additional address information such as apartment or suite number."""

    city: Optional[str] = UNSET
    """The city of the customer's location."""

    state: Optional[str] = UNSET
    """The state or province of the customer's location."""

    postal_code: Optional[str] = UNSET
    """The postal or ZIP code of the customer's location."""

    latitude: Optional[float] = UNSET
    """The latitude coordinate of the customer's location."""

    longitude: Optional[float] = UNSET
    """The longitude coordinate of the customer's location."""


class FindStoresRequestDict(TypedDict):
    address_line_1: NotRequired[str]
    address_line_2: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    postal_code: NotRequired[str]
    latitude: NotRequired[float]
    longitude: NotRequired[float]
