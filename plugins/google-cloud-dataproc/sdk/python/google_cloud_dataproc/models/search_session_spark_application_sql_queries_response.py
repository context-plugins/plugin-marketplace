from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_execution_ui_data import SqlExecutionUiData, SqlExecutionUiDataDict


class SearchSessionSparkApplicationSqlQueriesResponse(SdkBaseModel):
    """List of all queries for a Spark Application."""

    spark_application_sql_queries: Optional[list[SqlExecutionUiData]] = Field(
        default=UNSET, alias="sparkApplicationSqlQueries"
    )
    """Output only. SQL Execution Data"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSessionSparkApplicationSqlQueriesRequest."""


class SearchSessionSparkApplicationSqlQueriesResponseDict(TypedDict):
    spark_application_sql_queries: NotRequired[list[SqlExecutionUiDataDict]]
    next_page_token: NotRequired[str]
