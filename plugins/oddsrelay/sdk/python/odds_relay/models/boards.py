from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Boards(SdkBaseModel):
    processed_at: str | None
    age_s: float | None
    """The board's odds age, seconds."""

    count: int | None
    """Events."""


class BoardsDict(TypedDict):
    processed_at: str | None
    age_s: float | None
    count: int | None
