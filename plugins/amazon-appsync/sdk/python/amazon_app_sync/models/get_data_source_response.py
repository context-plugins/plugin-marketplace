from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_source import DataSource, DataSourceDict


class GetDataSourceResponse(SdkBaseModel):
    data_source: Optional[DataSource] = Field(default=UNSET, alias="dataSource")


class GetDataSourceResponseDict(TypedDict):
    data_source: NotRequired[DataSourceDict]
