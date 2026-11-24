from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Errors1(SdkBaseModel):
    """Errors that occurred during purchase"""

    base: list[str]


class Errors1Dict(TypedDict):
    base: list[str]
