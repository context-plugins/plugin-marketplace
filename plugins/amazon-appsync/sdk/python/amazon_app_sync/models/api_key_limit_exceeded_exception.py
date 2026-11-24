from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiKeyLimitExceededException(SdkBaseModel):
    message: Optional[str] = UNSET


class ApiKeyLimitExceededExceptionDict(TypedDict):
    message: NotRequired[str]
