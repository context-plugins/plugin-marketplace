from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_execution_ui_data import SqlExecutionUiData, SqlExecutionUiDataDict


class SearchSparkApplicationSqlQueriesResponse(SdkBaseModel):
    """List of all queries for a Spark Application."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSparkApplicationSqlQueriesRequest."""

    spark_application_sql_queries: Optional[list[SqlExecutionUiData]] = Field(
        default=UNSET, alias="sparkApplicationSqlQueries"
    )
    """Output only. SQL Execution Data"""


class SearchSparkApplicationSqlQueriesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    spark_application_sql_queries: NotRequired[list[SqlExecutionUiDataDict]]
