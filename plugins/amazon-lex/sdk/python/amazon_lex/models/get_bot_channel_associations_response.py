from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bot_channel_association import BotChannelAssociation, BotChannelAssociationDict


class GetBotChannelAssociationsResponse(SdkBaseModel):
    bot_channel_associations: Optional[list[BotChannelAssociation]] = Field(
        default=UNSET, alias="botChannelAssociations"
    )
    """An array of objects, one for each association, that provides information about the Amazon Lex bot and its
    association with the channel."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A pagination token that fetches the next page of associations. If the response to this call is truncated, Amazon
    Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token
    in the next request."""


class GetBotChannelAssociationsResponseDict(TypedDict):
    bot_channel_associations: NotRequired[list[BotChannelAssociationDict]]
    next_token: NotRequired[str]
