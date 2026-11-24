from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LimitExceededException(SdkBaseModel):
    message: Optional[str] = UNSET


class LimitExceededExceptionDict(TypedDict):
    message: NotRequired[str]
