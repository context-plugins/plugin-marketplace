from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PreconditionFailedException(SdkBaseModel):
    message: Optional[str] = UNSET


class PreconditionFailedExceptionDict(TypedDict):
    message: NotRequired[str]
