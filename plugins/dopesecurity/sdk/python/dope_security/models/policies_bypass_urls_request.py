from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.data61 import Data61, Data61Dict


class PoliciesBypassUrlsRequest(SdkBaseModel):
    data: Data61


class PoliciesBypassUrlsRequestDict(TypedDict):
    data: Data61Dict
