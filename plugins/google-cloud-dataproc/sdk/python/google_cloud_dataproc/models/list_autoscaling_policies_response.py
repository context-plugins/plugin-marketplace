from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .autoscaling_policy import AutoscalingPolicy, AutoscalingPolicyDict


class ListAutoscalingPoliciesResponse(SdkBaseModel):
    """A response to a request to list autoscaling policies in a project."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Output only. This token is included in the response if there are more results to fetch."""

    policies: Optional[list[AutoscalingPolicy]] = UNSET
    """Output only. Autoscaling policies list."""


class ListAutoscalingPoliciesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    policies: NotRequired[list[AutoscalingPolicyDict]]
