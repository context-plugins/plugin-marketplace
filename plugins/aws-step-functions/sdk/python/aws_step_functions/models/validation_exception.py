from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr


class ValidationException(SdkBaseModel):
    message: Optional[str] = UNSET
    reason: Optional[ReasonOrStr] = UNSET
    """The input does not satisfy the constraints specified by an Amazon Web Services service."""


class ValidationExceptionDict(TypedDict):
    message: NotRequired[str]
    reason: NotRequired[ReasonOrStr]
