from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CustomJoinText(SdkBaseModel):
    """Join button text. Max 18 characters."""

    name: Literal["custom_join_text"] = "custom_join_text"
    value: OptionalNullable[str] = UNSET


class CustomJoinTextDict(TypedDict):
    name: Literal["custom_join_text"]
    value: NotRequired[str | None]
