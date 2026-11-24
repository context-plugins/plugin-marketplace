from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class QrcodesResponse(SdkBaseModel):
    id: str
    """The ID of the QR Code."""


class QrcodesResponseDict(TypedDict):
    id: str
