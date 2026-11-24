from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiDeleteAttributeResponse(SdkBaseModel):
    message: str


class PublicApiDeleteAttributeResponseDict(TypedDict):
    message: str
