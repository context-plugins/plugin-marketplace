from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .native_sql_execution_ui_data import NativeSqlExecutionUiData, NativeSqlExecutionUiDataDict


class SearchSparkApplicationNativeSqlQueriesResponse(SdkBaseModel):
    """List of all Native SQL queries details for a Spark Application."""

    spark_application_native_sql_queries: Optional[list[NativeSqlExecutionUiData]] = Field(
        default=UNSET, alias="sparkApplicationNativeSqlQueries"
    )
    """Output only. Native SQL Execution Data"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """This token is included in the response if there are more results to fetch. To fetch additional results, provide
    this value as the page_token in a subsequent SearchSparkApplicationNativeSqlQueriesRequest."""


class SearchSparkApplicationNativeSqlQueriesResponseDict(TypedDict):
    spark_application_native_sql_queries: NotRequired[list[NativeSqlExecutionUiDataDict]]
    next_page_token: NotRequired[str]
