from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data8 import Data8, Data8Dict


class PoliciesBypassApplicationsRequest1(SdkBaseModel):
    data: Data8


class PoliciesBypassApplicationsRequest1Dict(TypedDict):
    data: Data8Dict
