from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_access_quota_status1 import (
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus1,
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus1Dict,
)
from .google_analytics_admin_v1_beta_access_quota_status2 import (
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus2,
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus2Dict,
)
from .google_analytics_admin_v1_beta_access_quota_status3 import (
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus3,
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus3Dict,
)
from .google_analytics_admin_v1_beta_access_quota_status4 import (
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus4,
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus4Dict,
)
from .google_analytics_admin_v1_beta_access_quota_status6 import (
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus6,
    GoogleAnalyticsAdminV1BetaAccessQuotaStatus6Dict,
)


class GoogleAnalyticsAdminV1BetaAccessQuota(SdkBaseModel):
    """Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests
    to that property will return Resource Exhausted errors."""

    tokens_per_project_per_hour: Optional[GoogleAnalyticsAdminV1BetaAccessQuotaStatus6] = Field(
        default=UNSET, alias="tokensPerProjectPerHour"
    )
    """Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics 360 Properties can
    use 12,500 tokens per project per hour. An API request consumes a single number of tokens, and that number is
    deducted from all of the hourly, daily, and per project hourly quotas."""

    tokens_per_day: Optional[GoogleAnalyticsAdminV1BetaAccessQuotaStatus1] = Field(default=UNSET, alias="tokensPerDay")
    """Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens."""

    concurrent_requests: Optional[GoogleAnalyticsAdminV1BetaAccessQuotaStatus2] = Field(
        default=UNSET, alias="concurrentRequests"
    )
    """Properties can use up to 50 concurrent requests."""

    server_errors_per_project_per_hour: Optional[GoogleAnalyticsAdminV1BetaAccessQuotaStatus3] = Field(
        default=UNSET, alias="serverErrorsPerProjectPerHour"
    )
    """Properties and cloud project pairs can have up to 50 server errors per hour."""

    tokens_per_hour: Optional[GoogleAnalyticsAdminV1BetaAccessQuotaStatus4] = Field(
        default=UNSET, alias="tokensPerHour"
    )
    """Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens, and that number is
    deducted from all of the hourly, daily, and per project hourly quotas."""


class GoogleAnalyticsAdminV1BetaAccessQuotaDict(TypedDict):
    tokens_per_project_per_hour: NotRequired[GoogleAnalyticsAdminV1BetaAccessQuotaStatus6Dict]
    tokens_per_day: NotRequired[GoogleAnalyticsAdminV1BetaAccessQuotaStatus1Dict]
    concurrent_requests: NotRequired[GoogleAnalyticsAdminV1BetaAccessQuotaStatus2Dict]
    server_errors_per_project_per_hour: NotRequired[GoogleAnalyticsAdminV1BetaAccessQuotaStatus3Dict]
    tokens_per_hour: NotRequired[GoogleAnalyticsAdminV1BetaAccessQuotaStatus4Dict]
