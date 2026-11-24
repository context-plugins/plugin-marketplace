from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dids4 import Dids4, Dids4Dict


class ApiV2NumbersResponse(SdkBaseModel):
    dids: list[Dids4]
    """List of DID numbers owned by the user"""


class ApiV2NumbersResponseDict(TypedDict):
    dids: list[Dids4Dict]
