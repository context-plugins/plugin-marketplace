from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason import ReasonOrStr
from .validation_exception_field import ValidationExceptionField, ValidationExceptionFieldDict


class ValidationException(SdkBaseModel):
    message: str = Field(alias="Message")
    """A message that describes the validation exception."""

    reason: Optional[ReasonOrStr] = Field(default=UNSET, alias="Reason")
    """The reason the validation exception was thrown."""

    fields: Optional[list[ValidationExceptionField]] = Field(default=UNSET, alias="Fields")


class ValidationExceptionDict(TypedDict):
    message: str
    reason: NotRequired[ReasonOrStr]
    fields: NotRequired[list[ValidationExceptionFieldDict]]
