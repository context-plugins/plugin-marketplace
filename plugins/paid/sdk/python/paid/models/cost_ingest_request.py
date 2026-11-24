from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.cost2 import Cost2, Cost2Dict


class CostIngestRequest(SdkBaseModel):
    costs: list[Cost2]


class CostIngestRequestDict(TypedDict):
    costs: list[Cost2Dict]
