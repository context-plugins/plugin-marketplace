from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiDeleteNotificationRuleResponse(SdkBaseModel):
    message: str


class PublicApiDeleteNotificationRuleResponseDict(TypedDict):
    message: str
