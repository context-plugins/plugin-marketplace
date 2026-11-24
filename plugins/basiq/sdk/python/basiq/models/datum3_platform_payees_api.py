from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code2 import Code2OrStr


class Datum3PlatformPayeesApi(SdkBaseModel):
    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """

    title: Optional[str] = UNSET
    """Title of the error"""

    code: Code2OrStr
    """Application-specific error code."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""


class Datum3PlatformPayeesApiDict(TypedDict):
    type_: str
    title: NotRequired[str]
    code: Code2OrStr
    detail: NotRequired[str]
