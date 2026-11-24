from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiKeyLimitExceededExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class ApiKeyLimitExceededExceptionErrorDict(TypedDict):
    message: NotRequired[str]
