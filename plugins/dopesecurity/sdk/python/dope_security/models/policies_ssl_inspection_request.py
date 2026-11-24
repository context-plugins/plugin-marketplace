from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data10 import Data10, Data10Dict


class PoliciesSslInspectionRequest(SdkBaseModel):
    data: Data10


class PoliciesSslInspectionRequestDict(TypedDict):
    data: Data10Dict
