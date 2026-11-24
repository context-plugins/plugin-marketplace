from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .field_error import FieldError, FieldErrorDict


class ErrorError(SdkBaseModel):
    message: Optional[str] = UNSET
    description: Optional[str] = UNSET
    resource: Optional[str] = UNSET
    errors: Optional[list[FieldError]] = UNSET


class ErrorErrorDict(TypedDict):
    message: NotRequired[str]
    description: NotRequired[str]
    resource: NotRequired[str]
    errors: NotRequired[list[FieldErrorDict]]
