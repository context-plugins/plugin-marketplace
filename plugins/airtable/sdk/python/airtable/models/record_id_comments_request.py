from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecordIdCommentsRequest(SdkBaseModel):
    text: str
    """The text content of the comment. Supports @[usrXXXXXXXX] syntax for mentions."""


class RecordIdCommentsRequestDict(TypedDict):
    text: str
