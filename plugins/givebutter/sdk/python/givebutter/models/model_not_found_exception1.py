from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelNotFoundException1(SdkBaseModel):
    message: str
    """Error overview."""


class ModelNotFoundException1Dict(TypedDict):
    message: str
