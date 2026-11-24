from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.type import TypeOrStr


class ClassModel(SdkBaseModel):
    """Describes the class (type) of accounts."""

    type_: TypeOrStr = Field(alias="type")
    """Account type"""

    product: str
    """Product name."""


class ClassModelDict(TypedDict):
    type_: TypeOrStr
    product: str
