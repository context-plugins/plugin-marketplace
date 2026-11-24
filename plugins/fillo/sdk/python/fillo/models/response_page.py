from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .response_row import ResponseRow, ResponseRowDict


class ResponsePage(SdkBaseModel):
    data: list[ResponseRow]
    next_cursor: str | None = Field(alias="nextCursor")


class ResponsePageDict(TypedDict):
    data: list[ResponseRowDict]
    next_cursor: str | None
