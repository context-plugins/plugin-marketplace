from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_amazon_lex_model_building_v2_channels_api import StatusAmazonLexModelBuildingV2ChannelsApiOrStr
from .enums.type_amazon_lex_model_building_v2_channels_api import TypeAmazonLexModelBuildingV2ChannelsApiOrStr


class BotChannelAssociation(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the association between the bot and the channel."""

    description: Optional[str] = UNSET
    """A text description of the association you are creating."""

    bot_alias: Optional[str] = Field(default=UNSET, alias="botAlias")
    """An alias pointing to the specific version of the Amazon Lex bot to which this association is being made."""

    bot_name: Optional[str] = Field(default=UNSET, alias="botName")
    """The name of the Amazon Lex bot to which this association is being made. Currently, Amazon Lex supports
    associations with Facebook and Slack, and Twilio."""

    created_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdDate")
    """The date that the association between the Amazon Lex bot and the channel was created."""

    type_: Optional[TypeAmazonLexModelBuildingV2ChannelsApiOrStr] = Field(default=UNSET, alias="type")
    """Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot
    and the external messaging platform."""

    bot_configuration: Optional[dict[str, str]] = Field(default=UNSET, alias="botConfiguration")
    """Provides information necessary to communicate with the messaging platform."""

    status: Optional[StatusAmazonLexModelBuildingV2ChannelsApiOrStr] = UNSET
    """The status of the bot channel. CREATED - The channel has been created and is ready for use. IN_PROGRESS - Channel
    creation is in progress. FAILED - There was an error creating the channel. For information about the reason for the
    failure, see the failureReason field."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="failureReason")
    """If status is FAILED, Amazon Lex provides the reason that it failed to create the association."""


class BotChannelAssociationDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    bot_alias: NotRequired[str]
    bot_name: NotRequired[str]
    created_date: NotRequired[RFC3339DateTime]
    type_: NotRequired[TypeAmazonLexModelBuildingV2ChannelsApiOrStr]
    bot_configuration: NotRequired[dict[str, str]]
    status: NotRequired[StatusAmazonLexModelBuildingV2ChannelsApiOrStr]
    failure_reason: NotRequired[str]
