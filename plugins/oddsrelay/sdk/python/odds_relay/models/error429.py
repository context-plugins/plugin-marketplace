from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error5 import Error5, Error5Dict


class Error429(SdkBaseModel):
    error: Error5


class Error429Dict(TypedDict):
    error: Error5Dict
