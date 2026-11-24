from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result1 import Result1, Result1Dict
from .table_write import TableWrite, TableWriteDict
from .v3_billing import V3Billing, V3BillingDict


class V3ContactSignalsResponse(SdkBaseModel):
    results: Optional[list[Result1]] = UNSET
    start_date: Optional[str] = Field(default=UNSET, alias="startDate")
    end_date: Optional[str] = Field(default=UNSET, alias="endDate")
    table_write: Optional[TableWrite] = Field(default=UNSET, alias="tableWrite")
    """Added to a Prospecting, Enrich, Signals, or Lookalike response when ``tableId`` is passed on the request. The
    primary response is unaffected even if the table write fails."""

    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class V3ContactSignalsResponseDict(TypedDict):
    results: NotRequired[list[Result1Dict]]
    start_date: NotRequired[str]
    end_date: NotRequired[str]
    table_write: NotRequired[TableWriteDict]
    billing: NotRequired[V3BillingDict]
