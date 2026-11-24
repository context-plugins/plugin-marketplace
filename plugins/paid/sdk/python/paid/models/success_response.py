from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SuccessResponse(SdkBaseModel):
    success: bool


class SuccessResponseDict(TypedDict):
    success: bool
