from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .usage import Usage, UsageDict


class UsageLimitErrorError(SdkBaseModel):
    success: Literal["False"] = "False"
    message: str
    usage: Optional[Usage] = UNSET


class UsageLimitErrorErrorDict(TypedDict):
    success: Literal["False"]
    message: str
    usage: NotRequired[UsageDict]
