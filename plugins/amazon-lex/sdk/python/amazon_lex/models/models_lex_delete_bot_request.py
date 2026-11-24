from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexDeleteBotRequest(SdkBaseModel):
    name: str
    """The name of the bot. The name is case sensitive."""


class ModelsLexDeleteBotRequestDict(TypedDict):
    name: str
