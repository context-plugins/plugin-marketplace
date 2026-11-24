from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .click_stats import ClickStats, ClickStatsDict
from .post_stats_email import PostStatsEmail, PostStatsEmailDict
from .post_stats_web import PostStatsWeb, PostStatsWebDict


class PostStats(SdkBaseModel):
    """Optional list of stats for a post. Retrievable by including ``expand: [stats]`` in the post request body.
    <br><br> **Note:** If a timeout occurs while aggregating stats, subsequent requests may return consolidated click
    metrics rather than individual raw click metrics."""

    email: Optional[PostStatsEmail] = UNSET
    """Stats scoped only to email recipients. Not relevant for posts published only to web"""

    web: Optional[PostStatsWeb] = UNSET
    """Stats scoped only to web views. Not relevant for posts published only to email"""

    clicks: Optional[list[ClickStats]] = UNSET
    """An array of click statistics for each URL in the post"""

    upgrades: int = 0
    """Total number of free-to-premium upgrades attributed to this post. Only populated when the publication has a paid
    subscription tier."""


class PostStatsDict(TypedDict):
    email: NotRequired[PostStatsEmailDict]
    web: NotRequired[PostStatsWebDict]
    clicks: NotRequired[list[ClickStatsDict]]
    upgrades: NotRequired[int]
