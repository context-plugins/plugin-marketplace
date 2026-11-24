from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code5 import Code5OrStr


class Datum12(SdkBaseModel):
    code: Code5OrStr
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    title: Optional[str] = UNSET
    """Title of the error"""

    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """


class Datum12Dict(TypedDict):
    code: Code5OrStr
    detail: NotRequired[str]
    title: NotRequired[str]
    type_: str
