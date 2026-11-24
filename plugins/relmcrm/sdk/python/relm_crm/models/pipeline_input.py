from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stage1 import Stage1, Stage1Dict


class PipelineInput(SdkBaseModel):
    key: Optional[str] = UNSET
    name: Optional[str] = UNSET
    is_default: Optional[bool] = UNSET
    stages: Optional[list[Stage1]] = UNSET


class PipelineInputDict(TypedDict):
    key: NotRequired[str]
    name: NotRequired[str]
    is_default: NotRequired[bool]
    stages: NotRequired[list[Stage1Dict]]
