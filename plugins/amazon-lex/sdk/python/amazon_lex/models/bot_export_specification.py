from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BotExportSpecification(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot assigned by Amazon Lex."""

    bot_version: str = Field(alias="botVersion")
    """The version of the bot that was exported. This will be either DRAFT or the version number."""


class BotExportSpecificationDict(TypedDict):
    bot_id: str
    bot_version: str
