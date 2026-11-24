from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item3_bundle_social_automation_api import Item3BundleSocialAutomationApi, Item3BundleSocialAutomationApiDict


class ApiV1AutomationProviderSettingsResponse(SdkBaseModel):
    items: list[Item3BundleSocialAutomationApi]
    total: float


class ApiV1AutomationProviderSettingsResponseDict(TypedDict):
    items: list[Item3BundleSocialAutomationApiDict]
    total: float
