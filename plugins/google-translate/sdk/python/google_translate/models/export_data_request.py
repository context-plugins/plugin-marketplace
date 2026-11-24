from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_output_config1 import DatasetOutputConfig1, DatasetOutputConfig1Dict


class ExportDataRequest(SdkBaseModel):
    """Request message for ExportData."""

    output_config: Optional[DatasetOutputConfig1] = Field(default=UNSET, alias="outputConfig")
    """Required. The config for the output content."""


class ExportDataRequestDict(TypedDict):
    output_config: NotRequired[DatasetOutputConfig1Dict]
