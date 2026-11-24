from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubmittedRuntimeGpu(SdkBaseModel):
    """Wire-compatible subset of ``hud.eval.runtime.RuntimeGPU``."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    count: int = 1


class SubmittedRuntimeGpuDict(TypedDict):
    type_: NotRequired[str]
    count: NotRequired[int]
