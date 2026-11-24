from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Value(SdkBaseModel):
    original_value: Optional[str] = Field(default=UNSET, alias="originalValue")
    """The part of the user's response to the slot elicitation that Amazon Lex V2 determines is relevant to the slot
    value."""

    interpreted_value: str = Field(alias="interpretedValue")
    """The value that Amazon Lex V2 determines for the slot, given the user input. The actual value depends on the
    setting of the value selection strategy for the bot. You can choose to use the value entered by the user, or you can
    have Amazon Lex V2 choose the first value in the resolvedValues list."""

    resolved_values: Optional[list[str]] = Field(default=UNSET, alias="resolvedValues")
    """A list of values that Amazon Lex V2 determines are possible resolutions for the user input. The first value
    matches the interpretedValue."""


class ValueDict(TypedDict):
    original_value: NotRequired[str]
    interpreted_value: str
    resolved_values: NotRequired[list[str]]
