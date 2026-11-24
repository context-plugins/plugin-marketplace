from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class NotFoundHttpException(SdkBaseModel):
    message: str
    """Error overview."""


class NotFoundHttpExceptionDict(TypedDict):
    message: str
