from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CampaignMemberResource(SdkBaseModel):
    id: str
    first_name: str
    last_name: str
    display_name: str
    email: str
    phone: str
    picture: str
    raised: float
    goal: int
    donors: int
    items: int
    url: str
    created_at: str
    updated_at: str


class CampaignMemberResourceDict(TypedDict):
    id: str
    first_name: str
    last_name: str
    display_name: str
    email: str
    phone: str
    picture: str
    raised: float
    goal: int
    donors: int
    items: int
    url: str
    created_at: str
    updated_at: str
