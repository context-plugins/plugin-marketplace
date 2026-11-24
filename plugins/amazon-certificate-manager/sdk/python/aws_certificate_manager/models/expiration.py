from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class Expiration(SdkBaseModel):
    value: int = Field(alias="Value")
    """The numeric value of the expiration."""

    type_: TypeOrStr = Field(alias="Type")
    """The time unit for the expiration value."""


class ExpirationDict(TypedDict):
    value: int
    type_: TypeOrStr
