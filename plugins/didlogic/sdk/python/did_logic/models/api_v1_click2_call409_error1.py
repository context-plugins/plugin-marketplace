from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error1 import Error1, Error1Dict


class ApiV1Click2Call409Error1(SdkBaseModel):
    error: Error1


class ApiV1Click2Call409Error1Dict(TypedDict):
    error: Error1Dict
