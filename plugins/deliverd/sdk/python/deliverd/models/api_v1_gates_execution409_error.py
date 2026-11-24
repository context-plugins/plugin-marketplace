from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class ApiV1GatesExecution409Error(SdkBaseModel):
    error: Error


class ApiV1GatesExecution409ErrorDict(TypedDict):
    error: ErrorDict
