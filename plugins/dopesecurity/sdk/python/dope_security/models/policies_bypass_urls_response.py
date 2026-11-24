from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data5 import Data5, Data5Dict


class PoliciesBypassUrlsResponse(SdkBaseModel):
    data: Data5


class PoliciesBypassUrlsResponseDict(TypedDict):
    data: Data5Dict
