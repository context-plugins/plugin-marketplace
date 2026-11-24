from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class ApiV1PoliciesActivate403Error(SdkBaseModel):
    error: Error


class ApiV1PoliciesActivate403ErrorDict(TypedDict):
    error: ErrorDict
