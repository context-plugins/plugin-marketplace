from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidationException(SdkBaseModel):
    message: Optional[str] = UNSET


class ValidationExceptionDict(TypedDict):
    message: NotRequired[str]
