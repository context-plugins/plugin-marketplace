from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetBotRequest(SdkBaseModel):
    name: str
    """The name of the bot. The name is case sensitive."""

    version_or_alias: str = Field(alias="versionOrAlias")
    """The version or alias of the bot."""


class GetBotRequestDict(TypedDict):
    name: str
    version_or_alias: str
