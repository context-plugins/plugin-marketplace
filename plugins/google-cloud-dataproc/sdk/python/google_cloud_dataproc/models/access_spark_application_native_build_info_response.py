from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .native_build_info_ui_data2 import NativeBuildInfoUiData2, NativeBuildInfoUiData2Dict


class AccessSparkApplicationNativeBuildInfoResponse(SdkBaseModel):
    """Details of Native Build Info for a Spark Application"""

    build_info: Optional[NativeBuildInfoUiData2] = Field(default=UNSET, alias="buildInfo")
    """Native Build Info Data"""


class AccessSparkApplicationNativeBuildInfoResponseDict(TypedDict):
    build_info: NotRequired[NativeBuildInfoUiData2Dict]
