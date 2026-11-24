from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchSendStatusRequest(SdkBaseModel):
    """Request body for the batch send status endpoint."""

    model_config = ConfigDict(extra="forbid")

    send_ids: list[str] = Field(alias="sendIds")
    """``sendId`` values returned by the trigger endpoint."""


class BatchSendStatusRequestDict(TypedDict):
    send_ids: list[str]
