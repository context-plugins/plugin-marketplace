from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .native_sql_execution_ui_data import NativeSqlExecutionUiData, NativeSqlExecutionUiDataDict


class AccessSparkApplicationNativeSqlQueryResponse(SdkBaseModel):
    """Details of a query for a Spark Application"""

    execution_data: Optional[NativeSqlExecutionUiData] = Field(default=UNSET, alias="executionData")
    """Native SQL Execution Data"""


class AccessSparkApplicationNativeSqlQueryResponseDict(TypedDict):
    execution_data: NotRequired[NativeSqlExecutionUiDataDict]
