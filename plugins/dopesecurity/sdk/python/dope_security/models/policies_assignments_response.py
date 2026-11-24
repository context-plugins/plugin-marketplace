from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data4 import Data4, Data4Dict


class PoliciesAssignmentsResponse(SdkBaseModel):
    data: Data4


class PoliciesAssignmentsResponseDict(TypedDict):
    data: Data4Dict
