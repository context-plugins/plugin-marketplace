from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CustomFeeText(SdkBaseModel):
    """Custom fee text. Accepts a JSON object."""

    name: Literal["custom_fee_text"] = "custom_fee_text"
    value: OptionalNullable[Any] = UNSET


class CustomFeeTextDict(TypedDict):
    name: Literal["custom_fee_text"]
    value: NotRequired[Any | None]
