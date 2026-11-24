from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SsmSession(SdkBaseModel):
    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The ID of the session."""

    token_value: Optional[str] = Field(default=UNSET, alias="tokenValue")
    """An encrypted token value containing session and caller information."""

    stream_url: Optional[str] = Field(default=UNSET, alias="streamUrl")
    """A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and receive
    output from the node."""


class SsmSessionDict(TypedDict):
    session_id: NotRequired[str]
    token_value: NotRequired[str]
    stream_url: NotRequired[str]
