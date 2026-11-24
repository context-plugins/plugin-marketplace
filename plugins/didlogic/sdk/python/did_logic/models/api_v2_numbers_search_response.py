from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dids2 import Dids2, Dids2Dict


class ApiV2NumbersSearchResponse(SdkBaseModel):
    dids: Dids2
    """Paginated search results"""


class ApiV2NumbersSearchResponseDict(TypedDict):
    dids: Dids2Dict
