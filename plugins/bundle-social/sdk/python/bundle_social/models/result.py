from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item1 import Item1, Item1Dict


class Result(SdkBaseModel):
    post_id: str = Field(alias="postId")
    items: list[Item1]
    error: str | None


class ResultDict(TypedDict):
    post_id: str
    items: list[Item1Dict]
    error: str | None
