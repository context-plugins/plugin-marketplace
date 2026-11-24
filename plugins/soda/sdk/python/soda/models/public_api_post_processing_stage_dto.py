from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.public_api_post_processing_stage_state_dto import PublicApiPostProcessingStageStateDtoOrStr


class PublicApiPostProcessingStageDto(SdkBaseModel):
    ended: Optional[RFC3339DateTime] = UNSET
    name: Literal["diagnosticWarehouse"] = "diagnosticWarehouse"
    started: Optional[RFC3339DateTime] = UNSET
    state: Optional[PublicApiPostProcessingStageStateDtoOrStr] = UNSET


class PublicApiPostProcessingStageDtoDict(TypedDict):
    ended: NotRequired[RFC3339DateTime]
    name: Literal["diagnosticWarehouse"]
    started: NotRequired[RFC3339DateTime]
    state: NotRequired[PublicApiPostProcessingStageStateDtoOrStr]
