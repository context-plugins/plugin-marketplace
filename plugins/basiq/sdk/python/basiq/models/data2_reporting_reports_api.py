from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code1 import Code1OrStr
from .source import Source, SourceDict


class Data2ReportingReportsApi(SdkBaseModel):
    code: Code1OrStr
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    source: Source
    """An object containing references to the source of the error."""

    title: Optional[str] = UNSET
    """Title of the error"""

    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """


class Data2ReportingReportsApiDict(TypedDict):
    code: Code1OrStr
    detail: NotRequired[str]
    source: SourceDict
    title: NotRequired[str]
    type_: str
