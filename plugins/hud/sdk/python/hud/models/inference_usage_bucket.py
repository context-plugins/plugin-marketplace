from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .inference_usage_group import InferenceUsageGroup, InferenceUsageGroupDict


class InferenceUsageBucket(SdkBaseModel):
    start: RFC3339DateTime
    groups: list[InferenceUsageGroup]


class InferenceUsageBucketDict(TypedDict):
    start: RFC3339DateTime
    groups: list[InferenceUsageGroupDict]
