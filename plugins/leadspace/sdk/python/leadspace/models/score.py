from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bucket import BucketOrStr


class Score(SdkBaseModel):
    value: Optional[float] = UNSET
    bucket: Optional[BucketOrStr] = UNSET


class ScoreDict(TypedDict):
    value: NotRequired[float]
    bucket: NotRequired[BucketOrStr]
