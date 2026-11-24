from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_signal_filters_include import CompanySignalFiltersInclude, CompanySignalFiltersIncludeDict


class Filters1LushaSignalsApi(SdkBaseModel):
    include: Optional[CompanySignalFiltersInclude] = UNSET
    """Optional sub-filters to narrow results within a signal type.
    - Multi-value filters use **OR** logic
    - Filter values are **not** case-sensitive
    - ``state`` without ``country`` in ``hiringByLocations`` returns HTTP **400**"""


class Filters1LushaSignalsApiDict(TypedDict):
    include: NotRequired[CompanySignalFiltersIncludeDict]
