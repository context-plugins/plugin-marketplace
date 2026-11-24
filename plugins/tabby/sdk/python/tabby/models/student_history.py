from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StudentHistory(SdkBaseModel):
    """Student's payment history with the merchant."""

    late_payments_count: int
    """Total count of late payments by the student across history."""

    avg_overdue_duration_days: float
    """Average overdue duration in days."""

    observation_window_months: Optional[int] = UNSET
    """Window over which history was calculated, to distinguish a new student's 0 late payments from a long-history
    clean student's 0."""


class StudentHistoryDict(TypedDict):
    late_payments_count: int
    avg_overdue_duration_days: float
    observation_window_months: NotRequired[int]
