from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .error_dto import ErrorDto, ErrorDtoDict


class ErrorResponseDtoError(SdkBaseModel):
    """A list of errors that occurred."""

    errors: OptionalNullable[list[ErrorDto]] = UNSET
    """A list of errors that occurred."""


class ErrorResponseDtoErrorDict(TypedDict):
    errors: NotRequired[list[ErrorDtoDict] | None]
