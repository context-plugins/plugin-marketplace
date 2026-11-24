from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_source import DataSource, DataSourceDict
from .schema import Schema, SchemaDict


class TimeSeriesIdentifiers(SdkBaseModel):
    data_source: Optional[DataSource] = Field(default=UNSET, alias="DataSource")
    schema_value: Optional[Schema] = Field(default=UNSET, alias="Schema")
    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the data, either CSV or PARQUET."""


class TimeSeriesIdentifiersDict(TypedDict):
    data_source: NotRequired[DataSourceDict]
    schema_value: NotRequired[SchemaDict]
    format: NotRequired[str]
