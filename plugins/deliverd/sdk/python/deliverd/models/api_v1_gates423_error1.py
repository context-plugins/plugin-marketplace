from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class ApiV1Gates423Error1(SdkBaseModel):
    error: Error


class ApiV1Gates423Error1Dict(TypedDict):
    error: ErrorDict
