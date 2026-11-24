from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name15 import Name15OrStr


class AnalyticsSessionGroupBySpecification(SdkBaseModel):
    name: Name15OrStr
    """Specifies whether to group the session by their end state or their locale."""


class AnalyticsSessionGroupBySpecificationDict(TypedDict):
    name: Name15OrStr
