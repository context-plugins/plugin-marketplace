from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MoneyVariable(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["money"] = Field(default="money", alias="type")
    """Variable type of a money variable storing the currency and amount."""

    value: str | None
    """Money in format '3_LETTER_CURRENCY_CODE AMOUNT'."""


class MoneyVariableDict(TypedDict):
    name: str
    type_: Literal["money"]
    value: str | None
