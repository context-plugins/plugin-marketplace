from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_bundle_social_automation_api import ItemBundleSocialAutomationApi, ItemBundleSocialAutomationApiDict


class ApiV1AutomationsResponse(SdkBaseModel):
    items: list[ItemBundleSocialAutomationApi]
    total: float


class ApiV1AutomationsResponseDict(TypedDict):
    items: list[ItemBundleSocialAutomationApiDict]
    total: float
