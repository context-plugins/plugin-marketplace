from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error1 import Error1, Error1Dict


class ApiV1Click2Call402Error(SdkBaseModel):
    error: Error1


class ApiV1Click2Call402ErrorDict(TypedDict):
    error: Error1Dict
