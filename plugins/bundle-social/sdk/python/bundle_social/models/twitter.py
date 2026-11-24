from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.reply_settings import ReplySettingsOrStr
from .media_item import MediaItem, MediaItemDict
from .poll import Poll, PollDict
from .thread import Thread, ThreadDict


class Twitter(SdkBaseModel):
    text: OptionalNullable[str] = UNSET
    upload_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="uploadIds")
    media_items: OptionalNullable[list[MediaItem]] = Field(default=UNSET, alias="mediaItems")
    reply_settings: OptionalNullable[ReplySettingsOrStr] = Field(default=UNSET, alias="replySettings")
    poll: OptionalNullable[Poll] = UNSET
    quote_tweet_id: OptionalNullable[str] = Field(default=UNSET, alias="quoteTweetId")
    reply_to_tweet_id: OptionalNullable[str] = Field(default=UNSET, alias="replyToTweetId")
    subscribers_only: OptionalNullable[bool] = Field(default=UNSET, alias="subscribersOnly")
    thread: OptionalNullable[list[Thread]] = UNSET
    tweet_storm: OptionalNullable[bool] = Field(default=UNSET, alias="tweetStorm")
    tweet_storm_numbering: OptionalNullable[bool] = Field(default=UNSET, alias="tweetStormNumbering")
    is_ai_generated: bool | None = Field(default=False, alias="isAiGenerated")
    """Set to true if the post contains AI-generated media. Adds X's 'made with AI' label."""


class TwitterDict(TypedDict):
    text: NotRequired[str | None]
    upload_ids: NotRequired[list[str] | None]
    media_items: NotRequired[list[MediaItemDict] | None]
    reply_settings: NotRequired[ReplySettingsOrStr | None]
    poll: NotRequired[PollDict | None]
    quote_tweet_id: NotRequired[str | None]
    reply_to_tweet_id: NotRequired[str | None]
    subscribers_only: NotRequired[bool | None]
    thread: NotRequired[list[ThreadDict] | None]
    tweet_storm: NotRequired[bool | None]
    tweet_storm_numbering: NotRequired[bool | None]
    is_ai_generated: NotRequired[bool | None]
