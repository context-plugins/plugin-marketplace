from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1CallsTransferRequest(SdkBaseModel):
    destination: str
    """E.164 number, or a ``sip:`` URI to your own endpoint. SIP hosts must be public — private and infrastructure
    ranges are rejected."""


class ApiV1CallsTransferRequestDict(TypedDict):
    destination: str
