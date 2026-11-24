from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.flag import Flag, FlagDict


class OfrepBulkEvaluationSuccess(SdkBaseModel):
    """Success response for the bulk evaluation request"""

    flags: Optional[list[Flag]] = UNSET


class OfrepBulkEvaluationSuccessDict(TypedDict):
    flags: NotRequired[list[FlagDict]]
