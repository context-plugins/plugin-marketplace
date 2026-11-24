from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class ApiV1GatesRelease403Error1(SdkBaseModel):
    error: Error


class ApiV1GatesRelease403Error1Dict(TypedDict):
    error: ErrorDict
