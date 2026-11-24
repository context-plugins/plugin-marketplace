from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .thread import Thread, ThreadDict


class ApiV1CommentsResponse(SdkBaseModel):
    threads: list[Thread]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1CommentsResponseDict(TypedDict):
    threads: list[ThreadDict]
    next_cursor: str | None
