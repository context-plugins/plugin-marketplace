from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ThemeColor(SdkBaseModel):
    """Hex color in the form ``#rrggbb``."""

    name: Literal["theme_color"] = "theme_color"
    value: OptionalNullable[str] = UNSET


class ThemeColorDict(TypedDict):
    name: Literal["theme_color"]
    value: NotRequired[str | None]
