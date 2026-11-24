from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error4 import Error4, Error4Dict


class ApiV1Click2Call422Error(SdkBaseModel):
    error: Error4


class ApiV1Click2Call422ErrorDict(TypedDict):
    error: Error4Dict
