from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.plan import PlanOrStr
from .locations import Locations, LocationsDict
from .paid_reads import PaidReads, PaidReadsDict


class Usage(SdkBaseModel):
    plan: PlanOrStr
    period: str
    """The current month, ``YYYY-MM`` in UTC."""

    locations: Locations
    requests: int
    """API requests this month from all of the workspace's keys, test keys included. Requests over the rate limit are
    not counted."""

    requests_per_minute_limit: int
    """Your per-key rate limit."""

    replies_published: int
    """Replies published through Prisma this month."""

    paid_reads: PaidReads


class UsageDict(TypedDict):
    plan: PlanOrStr
    period: str
    locations: LocationsDict
    requests: int
    requests_per_minute_limit: int
    replies_published: int
    paid_reads: PaidReadsDict
