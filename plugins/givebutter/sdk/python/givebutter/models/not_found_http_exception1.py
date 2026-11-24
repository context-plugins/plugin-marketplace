from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class NotFoundHttpException1(SdkBaseModel):
    message: str
    """Error overview."""


class NotFoundHttpException1Dict(TypedDict):
    message: str
