from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Links3(SdkBaseModel):
    self: str
    """Link to this specific insight"""


class Links3Dict(TypedDict):
    self: str
