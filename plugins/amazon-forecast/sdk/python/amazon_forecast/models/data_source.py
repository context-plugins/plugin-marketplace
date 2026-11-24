from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .s3_config import S3Config, S3ConfigDict


class DataSource(SdkBaseModel):
    s3_config: S3Config = Field(alias="S3Config")


class DataSourceDict(TypedDict):
    s3_config: S3ConfigDict
