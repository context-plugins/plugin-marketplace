from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubmittedRuntimeLimits(SdkBaseModel):
    """Wire-compatible subset of ``hud.eval.runtime.RuntimeLimits``."""

    startup_timeout_s: Optional[int] = UNSET
    run_timeout_s: Optional[int] = UNSET


class SubmittedRuntimeLimitsDict(TypedDict):
    startup_timeout_s: NotRequired[int]
    run_timeout_s: NotRequired[int]
