from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dids import Dids, DidsDict


class ApiV2NumbersCountriesCitiesDidsResponse(SdkBaseModel):
    dids: Dids
    """Paginated list of available DID numbers"""


class ApiV2NumbersCountriesCitiesDidsResponseDict(TypedDict):
    dids: DidsDict
