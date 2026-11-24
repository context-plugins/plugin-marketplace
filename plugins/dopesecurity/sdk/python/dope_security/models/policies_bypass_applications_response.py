from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data7 import Data7, Data7Dict


class PoliciesBypassApplicationsResponse(SdkBaseModel):
    data: Data7


class PoliciesBypassApplicationsResponseDict(TypedDict):
    data: Data7Dict
