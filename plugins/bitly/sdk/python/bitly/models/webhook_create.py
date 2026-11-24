from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebhookCreate(SdkBaseModel):
    is_active: Optional[bool] = UNSET
    organization_guid: str
    group_guid: Optional[str] = UNSET
    name: str
    event: str
    url: str
    oauth_url: Optional[str] = UNSET
    client_id: Optional[str] = UNSET
    client_secret: Optional[str] = UNSET
    fetch_tags: Optional[bool] = UNSET


class WebhookCreateDict(TypedDict):
    is_active: NotRequired[bool]
    organization_guid: str
    group_guid: NotRequired[str]
    name: str
    event: str
    url: str
    oauth_url: NotRequired[str]
    client_id: NotRequired[str]
    client_secret: NotRequired[str]
    fetch_tags: NotRequired[bool]
