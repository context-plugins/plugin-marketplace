from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DateTimeVariable(SdkBaseModel):
    name: str
    """API name of a variable defined in the bot definition."""

    type_: Literal["dateTime"] = Field(default="dateTime", alias="type")
    """Variable type of a datetime variable."""

    value: str | None
    """Datetime in format ISO_LOCAL_DATE_TIME 'YYYY-MM-DDTHH:MM:SS'."""


class DateTimeVariableDict(TypedDict):
    name: str
    type_: Literal["dateTime"]
    value: str | None
