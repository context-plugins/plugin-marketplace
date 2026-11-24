from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error4 import Error4, Error4Dict


class ErrorBody(SdkBaseModel):
    """Every JSON 4xx and 5xx this API writes."""

    error: Error4


class ErrorBodyDict(TypedDict):
    error: Error4Dict
