from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ModelNotFoundException(SdkBaseModel):
    message: str
    """Error overview."""


class ModelNotFoundExceptionDict(TypedDict):
    message: str
