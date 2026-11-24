from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation_email_stats import AutomationEmailStats, AutomationEmailStatsDict


class AutomationEmail(SdkBaseModel):
    """An email message within an automation."""

    id: str
    """The unique ID of the email message"""

    automation_step_id: str
    """The unique ID of the automation step this email belongs to"""

    subject_line: str
    """The email subject line"""

    preview_text: str
    """The email preview text"""

    status: str
    """The status of the email message. ``active`` - The email is active and will be sent. ``inactive`` - The email is
    inactive."""

    first_sent_at: Optional[int] = UNSET
    """The time the email was first sent. Measured in seconds since the Unix epoch"""

    last_sent_at: Optional[int] = UNSET
    """The time the email was last sent. Measured in seconds since the Unix epoch"""

    created_at: int
    """The time the email was created. Measured in seconds since the Unix epoch"""

    stats: Optional[AutomationEmailStats] = UNSET
    """Statistics for an automation email message."""


class AutomationEmailDict(TypedDict):
    id: str
    automation_step_id: str
    subject_line: str
    preview_text: str
    status: str
    first_sent_at: NotRequired[int]
    last_sent_at: NotRequired[int]
    created_at: int
    stats: NotRequired[AutomationEmailStatsDict]
