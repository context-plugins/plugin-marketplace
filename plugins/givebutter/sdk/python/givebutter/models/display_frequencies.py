from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DisplayFrequencies(SdkBaseModel):
    """Donation frequencies to display. Typical values: ``once``, ``monthly``, ``quarterly``, ``yearly``."""

    name: Literal["display_frequencies"] = "display_frequencies"
    value: OptionalNullable[list[str]] = UNSET


class DisplayFrequenciesDict(TypedDict):
    name: Literal["display_frequencies"]
    value: NotRequired[list[str] | None]
