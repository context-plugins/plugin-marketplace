from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelsLexDeleteBotVersionRequest(SdkBaseModel):
    name: str
    """The name of the bot."""

    version: str
    """The version of the bot to delete. You cannot delete the $LATEST version of the bot. To delete the $LATEST
    version, use the DeleteBot operation."""


class ModelsLexDeleteBotVersionRequestDict(TypedDict):
    name: str
    version: str
