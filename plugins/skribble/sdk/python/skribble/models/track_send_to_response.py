from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_skribble_send_to_api import StatusSkribbleSendToApiOrStr


class TrackSendToResponse(SdkBaseModel):
    status: StatusSkribbleSendToApiOrStr
    """Status of the Send-To request"""

    creator: str | None
    """User who claimed the Send-To request"""

    signers: list[str] | None
    """List of signers for the Send-To request"""


class TrackSendToResponseDict(TypedDict):
    status: StatusSkribbleSendToApiOrStr
    creator: str | None
    signers: list[str] | None
