from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DateVariable(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["date"] = Field(default="date", alias="type")
    """Variable type of a date variable."""

    value: str | None
    """Date in format ISO_LOCAL_DATE 'YYYY-MM-DD'."""


class DateVariableDict(TypedDict):
    name: str
    type_: Literal["date"]
    value: str | None
