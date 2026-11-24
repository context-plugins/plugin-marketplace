from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_source import DataSource, DataSourceDict


class ListDataSourcesResponse(SdkBaseModel):
    data_sources: Optional[list[DataSource]] = Field(default=UNSET, alias="dataSources")
    """The DataSource objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier to pass in the next request to this operation to return the next set of items in the list."""


class ListDataSourcesResponseDict(TypedDict):
    data_sources: NotRequired[list[DataSourceDict]]
    next_token: NotRequired[str]
