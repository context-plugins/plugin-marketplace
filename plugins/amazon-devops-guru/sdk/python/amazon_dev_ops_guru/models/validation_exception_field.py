from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ValidationExceptionField(SdkBaseModel):
    name: str = Field(alias="Name")
    """The name of the field."""

    message: str = Field(alias="Message")
    """The message associated with the validation exception with information to help determine its cause."""


class ValidationExceptionFieldDict(TypedDict):
    name: str
    message: str
