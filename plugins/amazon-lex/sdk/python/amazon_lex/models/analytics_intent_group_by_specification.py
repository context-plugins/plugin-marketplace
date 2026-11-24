from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name4 import Name4OrStr


class AnalyticsIntentGroupBySpecification(SdkBaseModel):
    name: Name4OrStr
    """Specifies whether to group the intent stages by their name or their end state."""


class AnalyticsIntentGroupBySpecificationDict(TypedDict):
    name: Name4OrStr
