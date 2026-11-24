from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .domain_availability_item import DomainAvailabilityItem, DomainAvailabilityItemDict


class BulkDomainAvailabilityResponse(SdkBaseModel):
    bulk_domain_availability_response: Optional[list[DomainAvailabilityItem]] = UNSET


class BulkDomainAvailabilityResponseDict(TypedDict):
    bulk_domain_availability_response: NotRequired[list[DomainAvailabilityItemDict]]
