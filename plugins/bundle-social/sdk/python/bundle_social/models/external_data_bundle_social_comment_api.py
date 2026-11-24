from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .bluesky2 import Bluesky2, Bluesky2Dict
from .discord2_bundle_social_comment_api import Discord2BundleSocialCommentApi, Discord2BundleSocialCommentApiDict
from .facebook2_bundle_social_comment_api import Facebook2BundleSocialCommentApi, Facebook2BundleSocialCommentApiDict
from .instagram2_bundle_social_comment_api import Instagram2BundleSocialCommentApi, Instagram2BundleSocialCommentApiDict
from .linkedin2_bundle_social_comment_api import Linkedin2BundleSocialCommentApi, Linkedin2BundleSocialCommentApiDict
from .mastodon2_bundle_social_comment_api import Mastodon2BundleSocialCommentApi, Mastodon2BundleSocialCommentApiDict
from .reddit2_bundle_social_comment_api import Reddit2BundleSocialCommentApi, Reddit2BundleSocialCommentApiDict
from .slack2_bundle_social_comment_api import Slack2BundleSocialCommentApi, Slack2BundleSocialCommentApiDict
from .threads2_bundle_social_comment_api import Threads2BundleSocialCommentApi, Threads2BundleSocialCommentApiDict
from .tiktok2_bundle_social_comment_api import Tiktok2BundleSocialCommentApi, Tiktok2BundleSocialCommentApiDict
from .twitter2 import Twitter2, Twitter2Dict
from .youtube2_bundle_social_comment_api import Youtube2BundleSocialCommentApi, Youtube2BundleSocialCommentApiDict


class ExternalDataBundleSocialCommentApi(SdkBaseModel):
    twitter: OptionalNullable[Twitter2] = Field(default=UNSET, alias="TWITTER")
    facebook: OptionalNullable[Facebook2BundleSocialCommentApi] = Field(default=UNSET, alias="FACEBOOK")
    instagram: OptionalNullable[Instagram2BundleSocialCommentApi] = Field(default=UNSET, alias="INSTAGRAM")
    tiktok: OptionalNullable[Tiktok2BundleSocialCommentApi] = Field(default=UNSET, alias="TIKTOK")
    linkedin: OptionalNullable[Linkedin2BundleSocialCommentApi] = Field(default=UNSET, alias="LINKEDIN")
    reddit: OptionalNullable[Reddit2BundleSocialCommentApi] = Field(default=UNSET, alias="REDDIT")
    youtube: OptionalNullable[Youtube2BundleSocialCommentApi] = Field(default=UNSET, alias="YOUTUBE")
    mastodon: OptionalNullable[Mastodon2BundleSocialCommentApi] = Field(default=UNSET, alias="MASTODON")
    threads: OptionalNullable[Threads2BundleSocialCommentApi] = Field(default=UNSET, alias="THREADS")
    discord: OptionalNullable[Discord2BundleSocialCommentApi] = Field(default=UNSET, alias="DISCORD")
    slack: OptionalNullable[Slack2BundleSocialCommentApi] = Field(default=UNSET, alias="SLACK")
    bluesky: OptionalNullable[Bluesky2] = Field(default=UNSET, alias="BLUESKY")


class ExternalDataBundleSocialCommentApiDict(TypedDict):
    twitter: NotRequired[Twitter2Dict | None]
    facebook: NotRequired[Facebook2BundleSocialCommentApiDict | None]
    instagram: NotRequired[Instagram2BundleSocialCommentApiDict | None]
    tiktok: NotRequired[Tiktok2BundleSocialCommentApiDict | None]
    linkedin: NotRequired[Linkedin2BundleSocialCommentApiDict | None]
    reddit: NotRequired[Reddit2BundleSocialCommentApiDict | None]
    youtube: NotRequired[Youtube2BundleSocialCommentApiDict | None]
    mastodon: NotRequired[Mastodon2BundleSocialCommentApiDict | None]
    threads: NotRequired[Threads2BundleSocialCommentApiDict | None]
    discord: NotRequired[Discord2BundleSocialCommentApiDict | None]
    slack: NotRequired[Slack2BundleSocialCommentApiDict | None]
    bluesky: NotRequired[Bluesky2Dict | None]
