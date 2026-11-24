from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CampaignTeamResource(SdkBaseModel):
    id: str
    name: str
    logo: str
    slug: str
    url: str
    raised: float
    goal: float
    supporters: int
    members: int
    created_at: str
    updated_at: str


class CampaignTeamResourceDict(TypedDict):
    id: str
    name: str
    logo: str
    slug: str
    url: str
    raised: float
    goal: float
    supporters: int
    members: int
    created_at: str
    updated_at: str
