from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.source import SourceOrStr
from .validation_error import ValidationError, ValidationErrorDict


class HttpValidationError(SdkBaseModel):
    error: Literal["validation_error"] = "validation_error"
    source: SourceOrStr
    detail: str
    errors: list[ValidationError]


class HttpValidationErrorDict(TypedDict):
    error: Literal["validation_error"]
    source: SourceOrStr
    detail: str
    errors: list[ValidationErrorDict]
