from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RedirectMessage(SdkBaseModel):
    type_: Literal["redirect"] = Field(default="redirect", alias="type")
    """Message type for the redirecting the client to another bot flow."""

    sequence_id: int = Field(alias="sequenceId")
    """Client-generated sequence number of the message in a session. Increase this number for each subsequent
    message."""

    dialog_id: str = Field(alias="dialogId")
    """Dialog ID to redirect to."""


class RedirectMessageDict(TypedDict):
    type_: Literal["redirect"]
    sequence_id: int
    dialog_id: str
