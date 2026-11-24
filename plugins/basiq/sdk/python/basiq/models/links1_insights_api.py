from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Links1InsightsApi(SdkBaseModel):
    self: str
    """Self-referencing link to this insight"""


class Links1InsightsApiDict(TypedDict):
    self: str
