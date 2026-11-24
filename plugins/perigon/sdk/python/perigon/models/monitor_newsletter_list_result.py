from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .signal_newsletter_dto import SignalNewsletterDto, SignalNewsletterDtoDict


class MonitorNewsletterListResult(SdkBaseModel):
    """Paginated list of monitor newsletters."""

    total: int
    """Total number of matching newsletters across all pages."""

    data: list[SignalNewsletterDto]
    """Newsletters returned for the requested page."""


class MonitorNewsletterListResultDict(TypedDict):
    total: int
    data: list[SignalNewsletterDtoDict]
