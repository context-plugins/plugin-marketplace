from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type1 import Type1OrStr


class Referrer(SdkBaseModel):
    type_: Type1OrStr = Field(alias="type")
    """Referrer type."""

    value: str
    """ID of referrer."""


class ReferrerDict(TypedDict):
    type_: Type1OrStr
    value: str
