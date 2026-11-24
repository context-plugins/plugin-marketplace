from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class M4001(SdkBaseModel):
    error: Error


class M4001Dict(TypedDict):
    error: ErrorDict
