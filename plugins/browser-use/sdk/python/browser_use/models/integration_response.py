from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class IntegrationResponse(SdkBaseModel):
    """Response for a single integration."""

    provider: str
    display_name: str
    description: str
    icon_url: str
    category: str
    is_connected: bool
    auth_type: str
    is_popular: bool = False


class IntegrationResponseDict(TypedDict):
    provider: str
    display_name: str
    description: str
    icon_url: str
    category: str
    is_connected: bool
    auth_type: str
    is_popular: NotRequired[bool]
