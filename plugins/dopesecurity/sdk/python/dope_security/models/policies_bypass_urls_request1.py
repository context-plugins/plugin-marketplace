from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data6 import Data6, Data6Dict


class PoliciesBypassUrlsRequest1(SdkBaseModel):
    data: Data6


class PoliciesBypassUrlsRequest1Dict(TypedDict):
    data: Data6Dict
