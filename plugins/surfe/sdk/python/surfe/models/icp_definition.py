from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_filters import CompanyFilters, CompanyFiltersDict


class IcpDefinition(SdkBaseModel):
    name: Optional[str] = UNSET
    filters: Optional[CompanyFilters] = UNSET
    """Company-based filters."""


class IcpDefinitionDict(TypedDict):
    name: NotRequired[str]
    filters: NotRequired[CompanyFiltersDict]
