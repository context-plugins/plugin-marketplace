from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FieldError(SdkBaseModel):
    field: Optional[str] = UNSET
    error_code: Optional[str] = UNSET
    message: Optional[str] = UNSET


class FieldErrorDict(TypedDict):
    field: NotRequired[str]
    error_code: NotRequired[str]
    message: NotRequired[str]
