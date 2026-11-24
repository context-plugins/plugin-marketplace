from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RuntimeHintValue(SdkBaseModel):
    phrase: str
    """The phrase that Amazon Lex should look for in the user's input to the bot."""


class RuntimeHintValueDict(TypedDict):
    phrase: str
