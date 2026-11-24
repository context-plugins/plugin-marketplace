from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Webhook(SdkBaseModel):
    references: Optional[dict[str, str]] = UNSET
    guid: str
    created: str
    modified: str
    modified_by: str
    alerted: str
    deactivated: str
    is_active: bool
    is_alert: bool
    organization_guid: str
    group_guid: Optional[str] = UNSET
    name: str
    event: str
    url: str
    status: Optional[str] = UNSET
    oauth_url: Optional[str] = UNSET
    client_id: Optional[str] = UNSET
    client_secret: Optional[str] = UNSET
    fetch_tags: Optional[bool] = UNSET


class WebhookDict(TypedDict):
    references: NotRequired[dict[str, str]]
    guid: str
    created: str
    modified: str
    modified_by: str
    alerted: str
    deactivated: str
    is_active: bool
    is_alert: bool
    organization_guid: str
    group_guid: NotRequired[str]
    name: str
    event: str
    url: str
    status: NotRequired[str]
    oauth_url: NotRequired[str]
    client_id: NotRequired[str]
    client_secret: NotRequired[str]
    fetch_tags: NotRequired[bool]
