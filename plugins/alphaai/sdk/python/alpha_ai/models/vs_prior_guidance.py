from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verdict1 import Verdict1OrStr


class VsPriorGuidance(SdkBaseModel):
    metric: Optional[str] = UNSET
    prior_guidance: Optional[str] = UNSET
    actual: Optional[str] = UNSET
    verdict: Optional[Verdict1OrStr] = UNSET


class VsPriorGuidanceDict(TypedDict):
    metric: NotRequired[str]
    prior_guidance: NotRequired[str]
    actual: NotRequired[str]
    verdict: NotRequired[Verdict1OrStr]
