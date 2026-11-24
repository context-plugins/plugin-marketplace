from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.bucket_width import BucketWidthOrStr
from .enums.group_by import GroupByOrStr
from .inference_usage_bucket import InferenceUsageBucket, InferenceUsageBucketDict


class InferenceUsageAggregateResponse(SdkBaseModel):
    start: RFC3339DateTime
    end: RFC3339DateTime
    bucket_width: BucketWidthOrStr
    group_by: Optional[list[GroupByOrStr]] = UNSET
    total_requests: int
    total_cost: float
    buckets: list[InferenceUsageBucket]


class InferenceUsageAggregateResponseDict(TypedDict):
    start: RFC3339DateTime
    end: RFC3339DateTime
    bucket_width: BucketWidthOrStr
    group_by: NotRequired[list[GroupByOrStr]]
    total_requests: int
    total_cost: float
    buckets: list[InferenceUsageBucketDict]
