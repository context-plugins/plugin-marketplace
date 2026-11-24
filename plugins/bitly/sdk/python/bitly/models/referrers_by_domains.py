from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.facet import FacetOrStr
from .referrers_by_domain import ReferrersByDomain, ReferrersByDomainDict


class ReferrersByDomains(SdkBaseModel):
    unit: Optional[str] = UNSET
    units: Optional[int] = UNSET
    facet: Optional[FacetOrStr] = UNSET
    unit_reference: Optional[str] = UNSET
    referrers_by_domain: Optional[list[ReferrersByDomain]] = UNSET


class ReferrersByDomainsDict(TypedDict):
    unit: NotRequired[str]
    units: NotRequired[int]
    facet: NotRequired[FacetOrStr]
    unit_reference: NotRequired[str]
    referrers_by_domain: NotRequired[list[ReferrersByDomainDict]]
