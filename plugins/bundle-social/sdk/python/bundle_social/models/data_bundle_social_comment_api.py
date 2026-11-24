from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .bluesky_bundle_social_comment_api import BlueskyBundleSocialCommentApi, BlueskyBundleSocialCommentApiDict
from .discord_bundle_social_comment_api import DiscordBundleSocialCommentApi, DiscordBundleSocialCommentApiDict
from .facebook_bundle_social_comment_api import FacebookBundleSocialCommentApi, FacebookBundleSocialCommentApiDict
from .instagram_bundle_social_comment_api import InstagramBundleSocialCommentApi, InstagramBundleSocialCommentApiDict
from .linkedin_bundle_social_comment_api import LinkedinBundleSocialCommentApi, LinkedinBundleSocialCommentApiDict
from .mastodon_bundle_social_comment_api import MastodonBundleSocialCommentApi, MastodonBundleSocialCommentApiDict
from .reddit_bundle_social_comment_api import RedditBundleSocialCommentApi, RedditBundleSocialCommentApiDict
from .slack_bundle_social_comment_api import SlackBundleSocialCommentApi, SlackBundleSocialCommentApiDict
from .threads_bundle_social_comment_api import ThreadsBundleSocialCommentApi, ThreadsBundleSocialCommentApiDict
from .tiktok_bundle_social_comment_api import TiktokBundleSocialCommentApi, TiktokBundleSocialCommentApiDict
from .twitter_bundle_social_comment_api import TwitterBundleSocialCommentApi, TwitterBundleSocialCommentApiDict
from .youtube_bundle_social_comment_api import YoutubeBundleSocialCommentApi, YoutubeBundleSocialCommentApiDict


class DataBundleSocialCommentApi(SdkBaseModel):
    twitter: OptionalNullable[TwitterBundleSocialCommentApi] = Field(default=UNSET, alias="TWITTER")
    facebook: OptionalNullable[FacebookBundleSocialCommentApi] = Field(default=UNSET, alias="FACEBOOK")
    instagram: OptionalNullable[InstagramBundleSocialCommentApi] = Field(default=UNSET, alias="INSTAGRAM")
    threads: OptionalNullable[ThreadsBundleSocialCommentApi] = Field(default=UNSET, alias="THREADS")
    tiktok: OptionalNullable[TiktokBundleSocialCommentApi] = Field(default=UNSET, alias="TIKTOK")
    linkedin: OptionalNullable[LinkedinBundleSocialCommentApi] = Field(default=UNSET, alias="LINKEDIN")
    youtube: OptionalNullable[YoutubeBundleSocialCommentApi] = Field(default=UNSET, alias="YOUTUBE")
    reddit: OptionalNullable[RedditBundleSocialCommentApi] = Field(default=UNSET, alias="REDDIT")
    mastodon: OptionalNullable[MastodonBundleSocialCommentApi] = Field(default=UNSET, alias="MASTODON")
    discord: OptionalNullable[DiscordBundleSocialCommentApi] = Field(default=UNSET, alias="DISCORD")
    slack: OptionalNullable[SlackBundleSocialCommentApi] = Field(default=UNSET, alias="SLACK")
    bluesky: OptionalNullable[BlueskyBundleSocialCommentApi] = Field(default=UNSET, alias="BLUESKY")


class DataBundleSocialCommentApiDict(TypedDict):
    twitter: NotRequired[TwitterBundleSocialCommentApiDict | None]
    facebook: NotRequired[FacebookBundleSocialCommentApiDict | None]
    instagram: NotRequired[InstagramBundleSocialCommentApiDict | None]
    threads: NotRequired[ThreadsBundleSocialCommentApiDict | None]
    tiktok: NotRequired[TiktokBundleSocialCommentApiDict | None]
    linkedin: NotRequired[LinkedinBundleSocialCommentApiDict | None]
    youtube: NotRequired[YoutubeBundleSocialCommentApiDict | None]
    reddit: NotRequired[RedditBundleSocialCommentApiDict | None]
    mastodon: NotRequired[MastodonBundleSocialCommentApiDict | None]
    discord: NotRequired[DiscordBundleSocialCommentApiDict | None]
    slack: NotRequired[SlackBundleSocialCommentApiDict | None]
    bluesky: NotRequired[BlueskyBundleSocialCommentApiDict | None]
