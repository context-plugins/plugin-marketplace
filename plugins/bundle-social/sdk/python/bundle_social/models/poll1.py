from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Poll1(SdkBaseModel):
    option_a: str = Field(alias="optionA")
    option_b: str = Field(alias="optionB")
    option_c: OptionalNullable[str] = Field(default=UNSET, alias="optionC")
    option_d: OptionalNullable[str] = Field(default=UNSET, alias="optionD")


class Poll1Dict(TypedDict):
    option_a: str
    option_b: str
    option_c: NotRequired[str | None]
    option_d: NotRequired[str | None]
