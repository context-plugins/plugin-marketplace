from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.kind import KindOrStr


class Preset(SdkBaseModel):
    id: str
    """Value to pass as data.FACEBOOK.textFormatPresetId when creating a post."""

    label: str
    """Name of the background, for showing in a picker."""

    kind: KindOrStr
    """Whether the background is a flat color, a gradient, or an illustration."""

    color: OptionalNullable[str] = UNSET
    """CSS color or gradient the background renders. Absent for illustrations."""


class PresetDict(TypedDict):
    id: str
    label: str
    kind: KindOrStr
    color: NotRequired[str | None]
