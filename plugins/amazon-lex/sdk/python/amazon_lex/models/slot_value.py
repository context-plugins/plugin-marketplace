from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SlotValue(SdkBaseModel):
    interpreted_value: Optional[str] = Field(default=UNSET, alias="interpretedValue")
    """The value that Amazon Lex determines for the slot. The actual value depends on the setting of the value selection
    strategy for the bot. You can choose to use the value entered by the user, or you can have Amazon Lex choose the
    first value in the resolvedValues list."""


class SlotValueDict(TypedDict):
    interpreted_value: NotRequired[str]
