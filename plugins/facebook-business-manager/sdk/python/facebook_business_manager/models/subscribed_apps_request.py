from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SubscribedAppsRequest(SdkBaseModel):
    subscribed_fields: list[str]
    """List of Page fields to subscribe to, such as feed, messages, messaging_postbacks."""


class SubscribedAppsRequestDict(TypedDict):
    subscribed_fields: list[str]
