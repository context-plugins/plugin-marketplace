from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CampaignSettingResource(SdkBaseModel):
    name: str
    value: str


class CampaignSettingResourceDict(TypedDict):
    name: str
    value: str
