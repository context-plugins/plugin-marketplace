from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetFaceLivenessSessionResultsRequest(SdkBaseModel):
    session_id: str = Field(alias="SessionId")
    """A unique 128-bit UUID. This is used to uniquely identify the session and also acts as an idempotency token for
    all operations associated with the session."""


class GetFaceLivenessSessionResultsRequestDict(TypedDict):
    session_id: str
