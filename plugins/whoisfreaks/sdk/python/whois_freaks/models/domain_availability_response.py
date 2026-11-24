from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .domain_availability_item import DomainAvailabilityItem, DomainAvailabilityItemDict


class DomainAvailabilityResponse(SdkBaseModel):
    domain: Optional[str] = UNSET
    availability: Optional[str] = UNSET
    message: Optional[str] = UNSET
    domain_available_response: Optional[list[DomainAvailabilityItem]] = UNSET


class DomainAvailabilityResponseDict(TypedDict):
    domain: NotRequired[str]
    availability: NotRequired[str]
    message: NotRequired[str]
    domain_available_response: NotRequired[list[DomainAvailabilityItemDict]]
