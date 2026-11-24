from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeLexButton(SdkBaseModel):
    text: str
    """Text that is visible to the user on the button."""

    value: str
    """The value sent to Amazon Lex when a user chooses the button. For example, consider button text "NYC." When the
    user chooses the button, the value sent can be "New York City."
    """


class RuntimeLexButtonDict(TypedDict):
    text: str
    value: str
