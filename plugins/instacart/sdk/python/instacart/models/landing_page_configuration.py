from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LandingPageConfiguration(SdkBaseModel):
    """Configuration options for the landing page appearance and behavior."""

    partner_linkback_url: Optional[str] = UNSET
    """URL to link back to the partner site from the landing page."""


class LandingPageConfigurationDict(TypedDict):
    partner_linkback_url: NotRequired[str]
