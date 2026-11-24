from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .submitted_runtime_gpu import SubmittedRuntimeGpu, SubmittedRuntimeGpuDict


class SubmittedRuntimeResources(SdkBaseModel):
    """Wire-compatible subset of ``hud.eval.runtime.RuntimeResources``.

    Hosted runtimes run Linux, so ``os`` accepts only ``linux`` in any case."""

    cpu: Optional[float] = UNSET
    memory_mb: Optional[int] = UNSET
    storage_mb: Optional[int] = UNSET
    gpu: Optional[SubmittedRuntimeGpu] = UNSET
    os: Optional[str] = UNSET


class SubmittedRuntimeResourcesDict(TypedDict):
    cpu: NotRequired[float]
    memory_mb: NotRequired[int]
    storage_mb: NotRequired[int]
    gpu: NotRequired[SubmittedRuntimeGpuDict]
    os: NotRequired[str]
