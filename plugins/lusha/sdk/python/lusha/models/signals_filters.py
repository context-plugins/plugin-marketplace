from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_signal_filters_include import CompanySignalFiltersInclude, CompanySignalFiltersIncludeDict


class SignalsFilters(SdkBaseModel):
    """Optional filters to narrow signal results within the requested signal types.
    - Multi-value filters use **OR** logic
    - Filter values are **not** case-sensitive
    - Unrecognized values are **silently ignored**
    - ``state`` without ``country`` in ``hiringByLocations`` returns HTTP **400**"""

    include: Optional[CompanySignalFiltersInclude] = UNSET
    """Optional sub-filters to narrow results within a signal type.
    - Multi-value filters use **OR** logic
    - Filter values are **not** case-sensitive
    - ``state`` without ``country`` in ``hiringByLocations`` returns HTTP **400**"""


class SignalsFiltersDict(TypedDict):
    include: NotRequired[CompanySignalFiltersIncludeDict]
