from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .posts_aggregate_stats_response_stats import PostsAggregateStatsResponseStats, PostsAggregateStatsResponseStatsDict


class PostsAggregateStatsResponse(SdkBaseModel):
    data: PostsAggregateStatsResponseStats


class PostsAggregateStatsResponseDict(TypedDict):
    data: PostsAggregateStatsResponseStatsDict
