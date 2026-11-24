from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.board import BoardOrStr
from .enums.coverage_model import CoverageModelOrStr


class Regions1(SdkBaseModel):
    code: str
    name: str
    requestable: bool
    bookmakers: int
    """Bookmakers with rows now."""

    exchanges: list[str]
    matched_coverage: bool
    coverage_model: CoverageModelOrStr
    exchange_available: bool
    board: BoardOrStr


class Regions1Dict(TypedDict):
    code: str
    name: str
    requestable: bool
    bookmakers: int
    exchanges: list[str]
    matched_coverage: bool
    coverage_model: CoverageModelOrStr
    exchange_available: bool
    board: BoardOrStr
