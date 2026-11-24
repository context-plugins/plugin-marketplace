from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrganizationSubscription2(SdkBaseModel):
    """Optional. Config to enable subscribing to events from all projects in the GoogleApiSource's org."""

    enabled: Optional[bool] = UNSET
    """Required. Enable org level subscription."""


class OrganizationSubscription2Dict(TypedDict):
    enabled: NotRequired[bool]
