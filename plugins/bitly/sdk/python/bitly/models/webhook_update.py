from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebhookUpdate(SdkBaseModel):
    guid: str
    is_active: Optional[bool] = UNSET
    organization_guid: Optional[str] = UNSET
    group_guid: Optional[str] = UNSET
    name: Optional[str] = UNSET
    event: Optional[str] = UNSET
    url: Optional[str] = UNSET
    oauth_url: Optional[str] = UNSET
    client_id: Optional[str] = UNSET
    client_secret: Optional[str] = UNSET
    fetch_tags: Optional[bool] = UNSET


class WebhookUpdateDict(TypedDict):
    guid: str
    is_active: NotRequired[bool]
    organization_guid: NotRequired[str]
    group_guid: NotRequired[str]
    name: NotRequired[str]
    event: NotRequired[str]
    url: NotRequired[str]
    oauth_url: NotRequired[str]
    client_id: NotRequired[str]
    client_secret: NotRequired[str]
    fetch_tags: NotRequired[bool]
