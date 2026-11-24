from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiLimitExceededException(SdkBaseModel):
    message: Optional[str] = UNSET


class ApiLimitExceededExceptionDict(TypedDict):
    message: NotRequired[str]
