from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .bluesky_bundle_social_app_api import BlueskyBundleSocialAppApi, BlueskyBundleSocialAppApiDict
from .discord_bundle_social_app_api import DiscordBundleSocialAppApi, DiscordBundleSocialAppApiDict
from .facebook_bundle_social_app_api import FacebookBundleSocialAppApi, FacebookBundleSocialAppApiDict
from .googlebusiness_bundle_social_app_api import GooglebusinessBundleSocialAppApi, GooglebusinessBundleSocialAppApiDict
from .instagram_bundle_social_app_api import InstagramBundleSocialAppApi, InstagramBundleSocialAppApiDict
from .linkedin_bundle_social_app_api import LinkedinBundleSocialAppApi, LinkedinBundleSocialAppApiDict
from .mastodon_bundle_social_app_api import MastodonBundleSocialAppApi, MastodonBundleSocialAppApiDict
from .pinterest_bundle_social_app_api import PinterestBundleSocialAppApi, PinterestBundleSocialAppApiDict
from .reddit_bundle_social_app_api import RedditBundleSocialAppApi, RedditBundleSocialAppApiDict
from .slack_bundle_social_app_api import SlackBundleSocialAppApi, SlackBundleSocialAppApiDict
from .snapchat_bundle_social_app_api import SnapchatBundleSocialAppApi, SnapchatBundleSocialAppApiDict
from .threads_bundle_social_app_api import ThreadsBundleSocialAppApi, ThreadsBundleSocialAppApiDict
from .tiktok_bundle_social_app_api import TiktokBundleSocialAppApi, TiktokBundleSocialAppApiDict
from .twitter_bundle_social_app_api import TwitterBundleSocialAppApi, TwitterBundleSocialAppApiDict
from .youtube_bundle_social_app_api import YoutubeBundleSocialAppApi, YoutubeBundleSocialAppApiDict


class Platforms(SdkBaseModel):
    facebook: FacebookBundleSocialAppApi = Field(alias="FACEBOOK")
    instagram: InstagramBundleSocialAppApi = Field(alias="INSTAGRAM")
    tiktok: TiktokBundleSocialAppApi = Field(alias="TIKTOK")
    youtube: YoutubeBundleSocialAppApi = Field(alias="YOUTUBE")
    twitter: TwitterBundleSocialAppApi = Field(alias="TWITTER")
    pinterest: PinterestBundleSocialAppApi = Field(alias="PINTEREST")
    reddit: RedditBundleSocialAppApi = Field(alias="REDDIT")
    mastodon: MastodonBundleSocialAppApi = Field(alias="MASTODON")
    discord: DiscordBundleSocialAppApi = Field(alias="DISCORD")
    slack: SlackBundleSocialAppApi = Field(alias="SLACK")
    bluesky: BlueskyBundleSocialAppApi = Field(alias="BLUESKY")
    google_business: GooglebusinessBundleSocialAppApi = Field(alias="GOOGLE_BUSINESS")
    linkedin: LinkedinBundleSocialAppApi = Field(alias="LINKEDIN")
    threads: ThreadsBundleSocialAppApi = Field(alias="THREADS")
    snapchat: SnapchatBundleSocialAppApi = Field(alias="SNAPCHAT")


class PlatformsDict(TypedDict):
    facebook: FacebookBundleSocialAppApiDict
    instagram: InstagramBundleSocialAppApiDict
    tiktok: TiktokBundleSocialAppApiDict
    youtube: YoutubeBundleSocialAppApiDict
    twitter: TwitterBundleSocialAppApiDict
    pinterest: PinterestBundleSocialAppApiDict
    reddit: RedditBundleSocialAppApiDict
    mastodon: MastodonBundleSocialAppApiDict
    discord: DiscordBundleSocialAppApiDict
    slack: SlackBundleSocialAppApiDict
    bluesky: BlueskyBundleSocialAppApiDict
    google_business: GooglebusinessBundleSocialAppApiDict
    linkedin: LinkedinBundleSocialAppApiDict
    threads: ThreadsBundleSocialAppApiDict
    snapchat: SnapchatBundleSocialAppApiDict
