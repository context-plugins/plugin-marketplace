from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class M400(SdkBaseModel):
    error: Error


class M400Dict(TypedDict):
    error: ErrorDict
