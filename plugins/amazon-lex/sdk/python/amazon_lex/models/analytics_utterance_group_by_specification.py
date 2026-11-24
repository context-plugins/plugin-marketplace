from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.name20 import Name20OrStr


class AnalyticsUtteranceGroupBySpecification(SdkBaseModel):
    name: Name20OrStr
    """Specifies whether to group the utterances by their text or their state."""


class AnalyticsUtteranceGroupBySpecificationDict(TypedDict):
    name: Name20OrStr
