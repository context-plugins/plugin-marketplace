from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DomainAvailabilityItem(SdkBaseModel):
    domain: Optional[str] = UNSET
    availability: Optional[str] = UNSET
    status: Optional[bool] = UNSET


class DomainAvailabilityItemDict(TypedDict):
    domain: NotRequired[str]
    availability: NotRequired[str]
    status: NotRequired[bool]
