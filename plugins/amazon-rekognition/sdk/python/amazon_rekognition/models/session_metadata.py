from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SessionMetadata(SdkBaseModel):
    sdk_type: str = Field(alias="SDKType")
    """The type of SDK that was used to stream the video for the Face Liveness session. This value is self-reported by
    the client that streamed the session, and Amazon Rekognition doesn't verify it. Don't rely on it for authentication,
    authorization, or any other security decision."""


class SessionMetadataDict(TypedDict):
    sdk_type: str
