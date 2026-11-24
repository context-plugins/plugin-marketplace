from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .campaign_setting_resource import CampaignSettingResource, CampaignSettingResourceDict
from .event_resource import EventResource, EventResourceDict


class CampaignResource(SdkBaseModel):
    id: str
    code: str
    account_id: str
    event_id: str
    type_: str = Field(alias="type")
    title: str
    subtitle: str
    description: str
    slug: str
    url: str
    goal: int | None
    raised: float
    donors: int
    currency: str
    cover: str
    status: str
    timezone: str
    end_at: str
    event: Optional[EventResource] = UNSET
    settings: list[CampaignSettingResource]
    created_at: str
    updated_at: str


class CampaignResourceDict(TypedDict):
    id: str
    code: str
    account_id: str
    event_id: str
    type_: str
    title: str
    subtitle: str
    description: str
    slug: str
    url: str
    goal: int | None
    raised: float
    donors: int
    currency: str
    cover: str
    status: str
    timezone: str
    end_at: str
    event: NotRequired[EventResourceDict]
    settings: list[CampaignSettingResourceDict]
    created_at: str
    updated_at: str
