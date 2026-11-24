from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bot_alias_status2 import BotAliasStatus2OrStr


class DeleteBotAliasResponse(SdkBaseModel):
    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The unique identifier of the bot alias to delete."""

    bot_id: Optional[str] = Field(default=UNSET, alias="botId")
    """The unique identifier of the bot that contains the alias to delete."""

    bot_alias_status: Optional[BotAliasStatus2OrStr] = Field(default=UNSET, alias="botAliasStatus")
    """The current status of the alias. The status is Deleting while the alias is in the process of being deleted. Once
    the alias is deleted, it will no longer appear in the list of aliases returned by the ListBotAliases operation."""


class DeleteBotAliasResponseDict(TypedDict):
    bot_alias_id: NotRequired[str]
    bot_id: NotRequired[str]
    bot_alias_status: NotRequired[BotAliasStatus2OrStr]
