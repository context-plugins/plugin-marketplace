from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BotMember(SdkBaseModel):
    bot_member_id: str = Field(alias="botMemberId")
    """The unique ID of a bot that is a member of this network of bots."""

    bot_member_name: str = Field(alias="botMemberName")
    """The unique name of a bot that is a member of this network of bots."""

    bot_member_alias_id: str = Field(alias="botMemberAliasId")
    """The alias ID of a bot that is a member of this network of bots."""

    bot_member_alias_name: str = Field(alias="botMemberAliasName")
    """The alias name of a bot that is a member of this network of bots."""

    bot_member_version: str = Field(alias="botMemberVersion")
    """The version of a bot that is a member of this network of bots."""


class BotMemberDict(TypedDict):
    bot_member_id: str
    bot_member_name: str
    bot_member_alias_id: str
    bot_member_alias_name: str
    bot_member_version: str
