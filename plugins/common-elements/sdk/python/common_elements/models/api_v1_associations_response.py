from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data2 import Data2, Data2Dict


class ApiV1AssociationsResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: Data2


class ApiV1AssociationsResponseDict(TypedDict):
    ok: Literal["True"]
    data: Data2Dict
