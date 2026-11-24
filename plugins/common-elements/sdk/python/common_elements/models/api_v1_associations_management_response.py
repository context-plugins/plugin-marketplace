from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data4 import Data4, Data4Dict


class ApiV1AssociationsManagementResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: Data4


class ApiV1AssociationsManagementResponseDict(TypedDict):
    ok: Literal["True"]
    data: Data4Dict
