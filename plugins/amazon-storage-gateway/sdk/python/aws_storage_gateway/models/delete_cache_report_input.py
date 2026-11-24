from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteCacheReportInput(SdkBaseModel):
    cache_report_arn: str = Field(alias="CacheReportARN")
    """The Amazon Resource Name (ARN) of the cache report you want to delete."""


class DeleteCacheReportInputDict(TypedDict):
    cache_report_arn: str
