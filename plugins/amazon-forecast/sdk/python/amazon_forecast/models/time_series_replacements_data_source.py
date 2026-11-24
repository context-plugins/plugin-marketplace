from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .s3_config import S3Config, S3ConfigDict
from .schema import Schema, SchemaDict


class TimeSeriesReplacementsDataSource(SdkBaseModel):
    s3_config: S3Config = Field(alias="S3Config")
    schema_value: Schema = Field(alias="Schema")
    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the replacement data, CSV or PARQUET."""

    timestamp_format: Optional[str] = Field(default=UNSET, alias="TimestampFormat")
    """The timestamp format of the replacement data."""


class TimeSeriesReplacementsDataSourceDict(TypedDict):
    s3_config: S3ConfigDict
    schema_value: SchemaDict
    format: NotRequired[str]
    timestamp_format: NotRequired[str]
