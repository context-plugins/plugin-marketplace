from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.privacy_level_option import PrivacyLevelOptionOrStr


class ApiV1MiscTiktokPostSettingsResponse(SdkBaseModel):
    privacy_level_options: list[PrivacyLevelOptionOrStr] = Field(alias="privacyLevelOptions")
    """Values the account accepts for ``privacy``. Public accounts: PUBLIC_TO_EVERYONE, MUTUAL_FOLLOW_FRIENDS,
    SELF_ONLY. Private accounts: FOLLOWER_OF_CREATOR, MUTUAL_FOLLOW_FRIENDS, SELF_ONLY."""

    comment_disabled: bool = Field(alias="commentDisabled")
    """If true, comments can't be enabled (the creator allows comments from no one), so send ``disableComments:
    true``."""

    duet_disabled: bool = Field(alias="duetDisabled")
    """If true, duets can't be enabled (duets set to "Only you", or a private account), so send ``disableDuet:
    true``."""

    stitch_disabled: bool = Field(alias="stitchDisabled")
    """If true, stitches can't be enabled (stitches set to "Only you", or a private account), so send ``disableStitch:
    true``."""

    max_video_post_duration_sec: OptionalNullable[float] = Field(default=UNSET, alias="maxVideoPostDurationSec")
    """Longest video, in seconds, this account can publish. Longer videos fail at publish time."""


class ApiV1MiscTiktokPostSettingsResponseDict(TypedDict):
    privacy_level_options: list[PrivacyLevelOptionOrStr]
    comment_disabled: bool
    duet_disabled: bool
    stitch_disabled: bool
    max_video_post_duration_sec: NotRequired[float | None]
