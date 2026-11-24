from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StatusPageCreate(SdkBaseModel):
    company_name: str
    company_url: str
    contact_url: Optional[str] = UNSET
    logo_url: Optional[str] = UNSET
    timezone: Optional[str] = UNSET
    subdomain: str
    custom_domain: Optional[str] = UNSET
    announcement: Optional[str] = UNSET
    announcement_embed_visible: Optional[bool] = UNSET
    history: Optional[int] = UNSET
    password_enabled: Optional[bool] = UNSET
    password: Optional[str] = UNSET
    google_analytics_id: Optional[str] = UNSET
    min_incident_length: Optional[int] = UNSET
    subscribable: Optional[bool] = UNSET
    hide_from_search_engines: Optional[bool] = UNSET


class StatusPageCreateDict(TypedDict):
    company_name: str
    company_url: str
    contact_url: NotRequired[str]
    logo_url: NotRequired[str]
    timezone: NotRequired[str]
    subdomain: str
    custom_domain: NotRequired[str]
    announcement: NotRequired[str]
    announcement_embed_visible: NotRequired[bool]
    history: NotRequired[int]
    password_enabled: NotRequired[bool]
    password: NotRequired[str]
    google_analytics_id: NotRequired[str]
    min_incident_length: NotRequired[int]
    subscribable: NotRequired[bool]
    hide_from_search_engines: NotRequired[bool]
