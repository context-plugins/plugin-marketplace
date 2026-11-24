from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .native_sql_execution_ui_data import NativeSqlExecutionUiData, NativeSqlExecutionUiDataDict


class SearchSessionSparkApplicationNativeSqlQueriesResponse(SdkBaseModel):
    """List of all Native queries for a Spark Application."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSessionSparkApplicationSqlQueriesRequest."""

    spark_application_native_sql_queries: Optional[list[NativeSqlExecutionUiData]] = Field(
        default=UNSET, alias="sparkApplicationNativeSqlQueries"
    )
    """Output only. Native SQL Execution Data"""


class SearchSessionSparkApplicationNativeSqlQueriesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    spark_application_native_sql_queries: NotRequired[list[NativeSqlExecutionUiDataDict]]
