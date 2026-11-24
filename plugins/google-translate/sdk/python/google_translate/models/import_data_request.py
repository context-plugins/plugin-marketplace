from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_input_config2 import DatasetInputConfig2, DatasetInputConfig2Dict


class ImportDataRequest(SdkBaseModel):
    """Request message for ImportData."""

    input_config: Optional[DatasetInputConfig2] = Field(default=UNSET, alias="inputConfig")
    """Required. The config for the input content."""


class ImportDataRequestDict(TypedDict):
    input_config: NotRequired[DatasetInputConfig2Dict]
