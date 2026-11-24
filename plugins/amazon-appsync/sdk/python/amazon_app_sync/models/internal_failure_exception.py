from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InternalFailureException(SdkBaseModel):
    message: Optional[str] = UNSET


class InternalFailureExceptionDict(TypedDict):
    message: NotRequired[str]
