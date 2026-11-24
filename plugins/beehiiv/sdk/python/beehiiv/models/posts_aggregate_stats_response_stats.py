from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .post_stats import PostStats, PostStatsDict


class PostsAggregateStatsResponseStats(SdkBaseModel):
    stats: PostStats
    """Optional list of stats for a post. Retrievable by including ``expand: [stats]`` in the post request body.
    <br><br> **Note:** If a timeout occurs while aggregating stats, subsequent requests may return consolidated click
    metrics rather than individual raw click metrics."""


class PostsAggregateStatsResponseStatsDict(TypedDict):
    stats: PostStatsDict
