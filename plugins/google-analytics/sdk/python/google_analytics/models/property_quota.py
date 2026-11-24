from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .quota_status1 import QuotaStatus1, QuotaStatus1Dict
from .quota_status2 import QuotaStatus2, QuotaStatus2Dict
from .quota_status3 import QuotaStatus3, QuotaStatus3Dict
from .quota_status4 import QuotaStatus4, QuotaStatus4Dict
from .quota_status5 import QuotaStatus5, QuotaStatus5Dict
from .quota_status7 import QuotaStatus7, QuotaStatus7Dict


class PropertyQuota(SdkBaseModel):
    """Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests
    to that property will return Resource Exhausted errors."""

    tokens_per_project_per_hour: Optional[QuotaStatus7] = Field(default=UNSET, alias="tokensPerProjectPerHour")
    """Analytics Properties can use up to 35% of their tokens per project per hour. This amounts to standard Analytics
    Properties can use up to 14,000 tokens per project per hour, and Analytics 360 Properties can use 140,000 tokens per
    project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the
    hourly, daily, and per project hourly quotas."""

    potentially_thresholded_requests_per_hour: Optional[QuotaStatus1] = Field(
        default=UNSET, alias="potentiallyThresholdedRequestsPerHour"
    )
    """Analytics Properties can send up to 120 requests with potentially thresholded dimensions per hour. In a batch
    request, each report request is individually counted for this quota if the request contains potentially thresholded
    dimensions."""

    tokens_per_day: Optional[QuotaStatus2] = Field(default=UNSET, alias="tokensPerDay")
    """Standard Analytics Properties can use up to 200,000 tokens per day; Analytics 360 Properties can use 2,000,000
    tokens per day. Most requests consume fewer than 10 tokens."""

    concurrent_requests: Optional[QuotaStatus3] = Field(default=UNSET, alias="concurrentRequests")
    """Standard Analytics Properties can send up to 10 concurrent requests; Analytics 360 Properties can use up to 50
    concurrent requests."""

    server_errors_per_project_per_hour: Optional[QuotaStatus4] = Field(
        default=UNSET, alias="serverErrorsPerProjectPerHour"
    )
    """Standard Analytics Properties and cloud project pairs can have up to 10 server errors per hour; Analytics 360
    Properties and cloud project pairs can have up to 50 server errors per hour."""

    tokens_per_hour: Optional[QuotaStatus5] = Field(default=UNSET, alias="tokensPerHour")
    """Standard Analytics Properties can use up to 40,000 tokens per hour; Analytics 360 Properties can use 400,000
    tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the
    hourly, daily, and per project hourly quotas."""


class PropertyQuotaDict(TypedDict):
    tokens_per_project_per_hour: NotRequired[QuotaStatus7Dict]
    potentially_thresholded_requests_per_hour: NotRequired[QuotaStatus1Dict]
    tokens_per_day: NotRequired[QuotaStatus2Dict]
    concurrent_requests: NotRequired[QuotaStatus3Dict]
    server_errors_per_project_per_hour: NotRequired[QuotaStatus4Dict]
    tokens_per_hour: NotRequired[QuotaStatus5Dict]
