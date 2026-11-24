from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_execution_ui_data import SqlExecutionUiData, SqlExecutionUiDataDict


class AccessSessionSparkApplicationSqlQueryResponse(SdkBaseModel):
    """Details of a query for a Spark Application"""

    execution_data: Optional[SqlExecutionUiData] = Field(default=UNSET, alias="executionData")
    """SQL Execution Data"""


class AccessSessionSparkApplicationSqlQueryResponseDict(TypedDict):
    execution_data: NotRequired[SqlExecutionUiDataDict]
