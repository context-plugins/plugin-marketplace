from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ErrorDto(SdkBaseModel):
    """An error."""

    type_: OptionalNullable[str] = Field(default=UNSET, alias="type")
    """A code representing the type of error."""

    message: OptionalNullable[str] = UNSET
    """A message describing the error."""


class ErrorDtoDict(TypedDict):
    type_: NotRequired[str | None]
    message: NotRequired[str | None]
