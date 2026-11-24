from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_destination import DataDestination, DataDestinationDict
from .tag_model import TagModel, TagModelDict


class CreateWhatIfForecastExportRequest(SdkBaseModel):
    what_if_forecast_export_name: str = Field(alias="WhatIfForecastExportName")
    """The name of the what-if forecast to export."""

    what_if_forecast_arns: list[str] = Field(alias="WhatIfForecastArns")
    """The list of what-if forecast Amazon Resource Names (ARNs) to export."""

    destination: DataDestination = Field(alias="Destination")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of tags to apply to the what if forecast."""

    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the exported data, CSV or PARQUET."""


class CreateWhatIfForecastExportRequestDict(TypedDict):
    what_if_forecast_export_name: str
    what_if_forecast_arns: list[str]
    destination: DataDestinationDict
    tags: NotRequired[list[TagModelDict]]
    format: NotRequired[str]
