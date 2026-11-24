from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr
from .source import Source, SourceDict


class Datum(SdkBaseModel):
    code: CodeOrStr
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    source: Optional[Source] = UNSET
    """An object containing references to the source of the error."""

    title: Optional[str] = UNSET
    """Title of the error"""

    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """


class DatumDict(TypedDict):
    code: CodeOrStr
    detail: NotRequired[str]
    source: NotRequired[SourceDict]
    title: NotRequired[str]
    type_: str
