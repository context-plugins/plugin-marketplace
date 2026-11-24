from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .company_bulk_request import CompanyBulkRequest, CompanyBulkRequestDict
from .enums.signal1 import Signal1OrStr
from .signals_filters import SignalsFilters, SignalsFiltersDict


class CompaniesBulkRequest(SdkBaseModel):
    companies: list[CompanyBulkRequest]
    signals: Optional[list[Signal1OrStr]] = UNSET
    signals_start_date: Optional[Date] = Field(default=UNSET, alias="signalsStartDate")
    signals_filters: Optional[SignalsFilters] = Field(default=UNSET, alias="signalsFilters")
    """Optional filters to narrow signal results within the requested signal types.
    - Multi-value filters use **OR** logic
    - Filter values are **not** case-sensitive
    - Unrecognized values are **silently ignored**
    - ``state`` without ``country`` in ``hiringByLocations`` returns HTTP **400**"""

    partial_company: bool = Field(default=True, alias="partialCompany")


class CompaniesBulkRequestDict(TypedDict):
    companies: list[CompanyBulkRequestDict]
    signals: NotRequired[list[Signal1OrStr]]
    signals_start_date: NotRequired[Date]
    signals_filters: NotRequired[SignalsFiltersDict]
    partial_company: NotRequired[bool]
