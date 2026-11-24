from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.plan_action import PlanActionOrStr
from .enums.result_status import ResultStatusOrStr
from .table_summary2 import TableSummary2, TableSummary2Dict


class DatabaseSummary(SdkBaseModel):
    """Summary of results for a specific database in a catalog."""

    database: Optional[str] = UNSET
    """Output only. The name of the database."""

    result_status: Optional[ResultStatusOrStr] = Field(default=UNSET, alias="resultStatus")
    """Output only. The migration result status for the database. This is only set if the migration is not a dry run."""

    table_summary: Optional[TableSummary2] = Field(default=UNSET, alias="tableSummary")
    """Output only. Aggregated summary of results for all tables in the database."""

    plan_action: Optional[PlanActionOrStr] = Field(default=UNSET, alias="planAction")
    """Output only. The migration plan action for the database."""


class DatabaseSummaryDict(TypedDict):
    database: NotRequired[str]
    result_status: NotRequired[ResultStatusOrStr]
    table_summary: NotRequired[TableSummary2Dict]
    plan_action: NotRequired[PlanActionOrStr]
