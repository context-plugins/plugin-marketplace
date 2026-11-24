from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1QueryTabularStatsResponse(SdkBaseModel):
    """Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. -
    Time series data. Example of tabular rows, Represents security stats results as a row of flat values."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Next page token."""

    values: Optional[list[list[Any]]] = UNSET
    """Resultant rows from the executed query."""

    columns: Optional[list[str]] = UNSET
    """Column names corresponding to the same order as the inner values in the stats field."""


class GoogleCloudApigeeV1QueryTabularStatsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    values: NotRequired[list[list[Any]]]
    columns: NotRequired[list[str]]
