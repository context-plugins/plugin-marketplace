from __future__ import annotations

from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel
from .enums.publication_engagement_email_type1 import PublicationEngagementEmailType1OrStr
from .enums.publication_engagement_granularity2 import PublicationEngagementGranularity2OrStr
from .publication_engagement_metrics import PublicationEngagementMetrics, PublicationEngagementMetricsDict


class PublicationEngagementsResponse(SdkBaseModel):
    data: list[PublicationEngagementMetrics]
    """The list of engagement metrics for the publication within the specified date range and granularity. Returns an
    empty list if there is no engagement data for the specified period."""

    publication_id: str
    """The unique identifier of the publication. Passed as a path parameter in the request."""

    granularity: PublicationEngagementGranularity2OrStr
    """The granularity at which the engagement metrics are reported."""

    email_type: PublicationEngagementEmailType1OrStr
    """The email type filter applied to the engagement metrics. Defaults to ``all``."""

    start_date: Date
    """The starting date of the engagement metrics."""

    number_of_days: int
    """The number of days of engagement metrics returned."""


class PublicationEngagementsResponseDict(TypedDict):
    data: list[PublicationEngagementMetricsDict]
    publication_id: str
    granularity: PublicationEngagementGranularity2OrStr
    email_type: PublicationEngagementEmailType1OrStr
    start_date: Date
    number_of_days: int
