from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class V1Campaigns409Error(SdkBaseModel):
    error: Error


class V1Campaigns409ErrorDict(TypedDict):
    error: ErrorDict
