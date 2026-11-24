from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reveal1 import Reveal1OrStr


class V3CompaniesEnrichRequest(SdkBaseModel):
    ids: list[str]
    """Company IDs from search results (strings)"""

    reveal: Optional[list[Reveal1OrStr]] = UNSET
    """Additional data fields to reveal. Each field is charged separately per result.
    - ``employeesByDepartment`` — breakdown of employees by department
    - ``employeesByLocation`` — breakdown of employees by country/state
    - ``employeesBySeniority`` — breakdown of employees by seniority level
    - ``competitors`` — list of competitor company IDs
    - ``intent`` — buyer intent topics
    - ``estimatedAnnualItSpend`` — estimated annual IT spend. 1 credit per company, charged only when a non-null value
        is returned.
    - ``monthlyWebsiteTraffic`` — monthly website traffic and month-over-month change. 1 credit per company, charged
        only when a non-null value is returned."""

    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    """Optional. If provided, these companies are also added to this table (if not already present) and the revealed
    fields' columns are populated. See the Tables API."""


class V3CompaniesEnrichRequestDict(TypedDict):
    ids: list[str]
    reveal: NotRequired[list[Reveal1OrStr]]
    table_id: NotRequired[str]
