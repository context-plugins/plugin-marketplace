from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.coverage import CoverageOrStr
from .enums.round1 import Round1OrStr


class Round(SdkBaseModel):
    coverage: Optional[CoverageOrStr] = UNSET
    round: Optional[Round1OrStr] = UNSET


class RoundDict(TypedDict):
    coverage: NotRequired[CoverageOrStr]
    round: NotRequired[Round1OrStr]
