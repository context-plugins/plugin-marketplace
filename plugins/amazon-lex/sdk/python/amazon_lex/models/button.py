from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Button(SdkBaseModel):
    text: str
    """The text that appears on the button. Use this to tell the user what value is returned when they choose this
    button."""

    value: str
    """The value returned to Amazon Lex when the user chooses this button. This must be one of the slot values
    configured for the slot."""


class ButtonDict(TypedDict):
    text: str
    value: str
