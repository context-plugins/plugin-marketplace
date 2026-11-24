from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data import Data, DataDict


class ApiV1AssociationsBuildingSafetyResponse(SdkBaseModel):
    ok: Literal["True"] = "True"
    data: Data


class ApiV1AssociationsBuildingSafetyResponseDict(TypedDict):
    ok: Literal["True"]
    data: DataDict
