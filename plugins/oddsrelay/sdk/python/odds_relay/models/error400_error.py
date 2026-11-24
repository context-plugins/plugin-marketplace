from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error2 import Error2, Error2Dict


class Error400Error(SdkBaseModel):
    error: Error2


class Error400ErrorDict(TypedDict):
    error: Error2Dict
