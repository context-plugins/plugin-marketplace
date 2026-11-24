from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class Error403Error(SdkBaseModel):
    error: Error


class Error403ErrorDict(TypedDict):
    error: ErrorDict
