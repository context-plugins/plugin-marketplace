from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    code: Optional[str] = UNSET
    """A stable error code"""

    message: Optional[str] = UNSET
    """A human-readable error message"""


class ErrorDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
