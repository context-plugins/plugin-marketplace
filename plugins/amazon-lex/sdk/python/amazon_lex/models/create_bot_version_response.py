from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .bot_version_locale_details import BotVersionLocaleDetails, BotVersionLocaleDetailsDict
from .enums.bot_status3 import BotStatus3OrStr


class CreateBotVersionResponse(SdkBaseModel):
    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The bot identifier specified in the request."""

    description: Optional[str] = UNSET
    """The description of the version specified in the request."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version number assigned to the version."""

    bot_version_locale_specification: Optional[dict[str, BotVersionLocaleDetails]] = Field(
        default=UNSET, alias="botVersionLocaleSpecification"
    )
    """The source versions used for each locale in the new version."""

    bot_status: Optional[BotStatus3OrStr] = Field(default=UNSET, alias="botStatus")
    """When you send a request to create or update a bot, Amazon Lex sets the status response element to Creating. After
    Amazon Lex builds the bot, it sets status to Available. If Amazon Lex can't build the bot, it sets status to
    Failed."""

    creation_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="creationDateTime")
    """A timestamp of the date and time that the version was created."""


class CreateBotVersionResponseDict(TypedDict):
    bot_id: NotRequired[str]
    description: NotRequired[str]
    bot_version: NotRequired[str]
    bot_version_locale_specification: NotRequired[dict[str, BotVersionLocaleDetailsDict]]
    bot_status: NotRequired[BotStatus3OrStr]
    creation_date_time: NotRequired[RFC3339DateTime]
