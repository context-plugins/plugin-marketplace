from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    code: Literal["bad_request"] = "bad_request"
    """A short code indicating the error code returned."""

    message: str
    """A human readable explanation of what went wrong."""

    doc_url: Optional[str] = UNSET
    """A link to our documentation with more details about this error code"""


class ErrorDict(TypedDict):
    code: Literal["bad_request"]
    message: str
    doc_url: NotRequired[str]
