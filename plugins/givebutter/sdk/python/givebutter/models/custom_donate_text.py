from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CustomDonateText(SdkBaseModel):
    """Donate button text. Max 100 characters."""

    name: Literal["custom_donate_text"] = "custom_donate_text"
    value: OptionalNullable[str] = UNSET


class CustomDonateTextDict(TypedDict):
    name: Literal["custom_donate_text"]
    value: NotRequired[str | None]
