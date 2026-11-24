from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateFaceLivenessSessionResponse(SdkBaseModel):
    session_id: str = Field(alias="SessionId")
    """A unique 128-bit UUID identifying a Face Liveness session. A new sessionID must be used for every Face Liveness
    check. If a given sessionID is used for subsequent Face Liveness checks, the checks will fail. Additionally, a
    SessionId expires 3 minutes after it's sent, making all Liveness data associated with the session (e.g., sessionID,
    reference image, audit images, etc.) unavailable."""


class CreateFaceLivenessSessionResponseDict(TypedDict):
    session_id: str
