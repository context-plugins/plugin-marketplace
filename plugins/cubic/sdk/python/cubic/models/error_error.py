from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error1 import Error1, Error1Dict


class ErrorError(SdkBaseModel):
    error: Error1


class ErrorErrorDict(TypedDict):
    error: Error1Dict
