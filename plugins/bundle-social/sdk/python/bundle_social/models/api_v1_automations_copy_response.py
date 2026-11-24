from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_bundle_social_automation_api import ItemBundleSocialAutomationApi, ItemBundleSocialAutomationApiDict


class ApiV1AutomationsCopyResponse(SdkBaseModel):
    items: list[ItemBundleSocialAutomationApi]
    total: float
    skipped: int
    """Source flows not copied because the target organization has no access to their platform."""


class ApiV1AutomationsCopyResponseDict(TypedDict):
    items: list[ItemBundleSocialAutomationApiDict]
    total: float
    skipped: int
