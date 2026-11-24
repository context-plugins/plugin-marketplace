from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .x_plinth import XPlinth, XPlinthDict


class EssentialsSearchResponse(SdkBaseModel):
    """Paged with ``from``/``size`` — Candid's essentials shape, NOT the ``page``/``limit`` of /grants/*."""

    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    hits: int
    size: int
    results_count: int
    mode: Optional[str] = UNSET
    results: list[Any]
    from_: int = Field(alias="from")
    """Zero-based offset of the first row returned."""


class EssentialsSearchResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    hits: int
    size: int
    results_count: int
    mode: NotRequired[str]
    results: list[Any]
    from_: int
