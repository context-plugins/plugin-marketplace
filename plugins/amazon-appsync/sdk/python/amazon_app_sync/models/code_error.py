from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code_error_location import CodeErrorLocation, CodeErrorLocationDict


class CodeError(SdkBaseModel):
    error_type: Optional[str] = Field(default=UNSET, alias="errorType")
    """The type of code error. Examples include, but aren't limited to: LINT_ERROR, PARSER_ERROR."""

    value: Optional[str] = UNSET
    """A user presentable error. Examples include, but aren't limited to: Parsing error: Unterminated string literal."""

    location: Optional[CodeErrorLocation] = UNSET


class CodeErrorDict(TypedDict):
    error_type: NotRequired[str]
    value: NotRequired[str]
    location: NotRequired[CodeErrorLocationDict]
