from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksInsightsApi(SdkBaseModel):
    """For multi-user insights the self link uses the first userId from the users array."""

    self: str
    """Self link pointing to /users/{firstUserId}/insights/{insightId}"""


class LinksInsightsApiDict(TypedDict):
    self: str
