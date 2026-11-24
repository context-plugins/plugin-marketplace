from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccessDeniedException(SdkBaseModel):
    message: Optional[str] = UNSET


class AccessDeniedExceptionDict(TypedDict):
    message: NotRequired[str]
