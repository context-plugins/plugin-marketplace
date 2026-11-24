from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_destination import DataDestination, DataDestinationDict
from .tag_model import TagModel, TagModelDict


class CreateForecastExportJobRequest(SdkBaseModel):
    forecast_export_job_name: str = Field(alias="ForecastExportJobName")
    """The name for the forecast export job."""

    forecast_arn: str = Field(alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the forecast that you want to export."""

    destination: DataDestination = Field(alias="Destination")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The optional metadata that you apply to the forecast export job to help you categorize and organize them. Each
    tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to
    tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can
    have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode
    characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other
    services may have restrictions on all"""

    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the exported data, CSV or PARQUET. The default value is CSV."""


class CreateForecastExportJobRequestDict(TypedDict):
    forecast_export_job_name: str
    forecast_arn: str
    destination: DataDestinationDict
    tags: NotRequired[list[TagModelDict]]
    format: NotRequired[str]
