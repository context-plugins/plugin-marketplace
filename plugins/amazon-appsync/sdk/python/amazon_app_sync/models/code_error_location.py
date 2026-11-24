from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CodeErrorLocation(SdkBaseModel):
    line: Optional[int] = UNSET
    """The line number in the code. Defaults to 0 if unknown."""

    column: Optional[int] = UNSET
    """The column number in the code. Defaults to 0 if unknown."""

    span: Optional[int] = UNSET
    """The span/length of the error. Defaults to -1 if unknown."""


class CodeErrorLocationDict(TypedDict):
    line: NotRequired[int]
    column: NotRequired[int]
    span: NotRequired[int]
