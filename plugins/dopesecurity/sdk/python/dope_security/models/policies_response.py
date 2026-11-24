from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data3 import Data3, Data3Dict


class PoliciesResponse(SdkBaseModel):
    data: Data3


class PoliciesResponseDict(TypedDict):
    data: Data3Dict
