from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiSubscriptionsDeleteRequest(SdkBaseModel):
    ids: list[str]
    """Array of subscription IDs to delete"""


class ApiSubscriptionsDeleteRequestDict(TypedDict):
    ids: list[str]
