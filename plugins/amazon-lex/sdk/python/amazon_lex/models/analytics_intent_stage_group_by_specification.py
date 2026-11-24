from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name9 import Name9OrStr


class AnalyticsIntentStageGroupBySpecification(SdkBaseModel):
    name: Name9OrStr
    """Specifies whether to group the intent stages by their name or the intent to which the session was switched."""


class AnalyticsIntentStageGroupBySpecificationDict(TypedDict):
    name: Name9OrStr
