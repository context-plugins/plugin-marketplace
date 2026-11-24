from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .native_build_info_ui_data3 import NativeBuildInfoUiData3, NativeBuildInfoUiData3Dict


class AccessSessionSparkApplicationNativeBuildInfoResponse(SdkBaseModel):
    """Details of a native build info for a Spark Application"""

    execution_data: Optional[NativeBuildInfoUiData3] = Field(default=UNSET, alias="executionData")
    """Native SQL Execution Data"""


class AccessSessionSparkApplicationNativeBuildInfoResponseDict(TypedDict):
    execution_data: NotRequired[NativeBuildInfoUiData3Dict]
