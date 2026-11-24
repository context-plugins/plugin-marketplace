from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .publication_stats import PublicationStats, PublicationStatsDict


class Publication2(SdkBaseModel):
    """The full Publication object. Only present when ``expand`` includes ``publication``."""

    id: str
    """A unique prefixed id of the publication"""

    name: str
    """The name of the publication"""

    organization_name: str
    """The name of the organization"""

    referral_program_enabled: bool
    """A boolean field indicating whether the referral program is active for this publication."""

    created: float
    """The time that the publication was created. Measured in seconds since the Unix epoch"""

    stats: Optional[PublicationStats] = UNSET
    """Optional list of stats for a publication. Retrievable by including an ``expand`` array in the publication request
    body. Add ``"stats"`` to the array to retrieve all, or add individual stats (prefaced with ``stat_``) to only
    retrieve specific ones.

    Examples:
    {
      "expand": ["stats"]
    }

    {
      "expand": ["stat_active_subscriptions", "stat_average_click_rate"]
    }"""


class Publication2Dict(TypedDict):
    id: str
    name: str
    organization_name: str
    referral_program_enabled: bool
    created: float
    stats: NotRequired[PublicationStatsDict]
