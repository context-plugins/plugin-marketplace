from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data9 import Data9, Data9Dict


class PoliciesSslInspectionResponse(SdkBaseModel):
    data: Data9


class PoliciesSslInspectionResponseDict(TypedDict):
    data: Data9Dict
