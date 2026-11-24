from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data5 import Data5, Data5Dict


class ApiV1AssociationsBuildingsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: Data5


class ApiV1AssociationsBuildingsResponseDict(TypedDict):
    ok: Literal["True"]
    data: Data5Dict
