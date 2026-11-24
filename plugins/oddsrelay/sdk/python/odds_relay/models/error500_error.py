from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error3 import Error3, Error3Dict


class Error500Error(SdkBaseModel):
    error: Error3


class Error500ErrorDict(TypedDict):
    error: Error3Dict
