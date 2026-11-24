from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detail import Detail, DetailDict


class Error1(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    code: str
    """Stable error code. Branch on this, not on the message."""

    message: str
    retriable: bool
    """Whether the same request can succeed if you send it again."""

    correlation_id: Optional[str] = Field(default=UNSET, alias="correlationId")
    """Quote this ID when you contact support."""

    details: Optional[list[Detail]] = UNSET


class Error1Dict(TypedDict):
    code: str
    message: str
    retriable: bool
    correlation_id: NotRequired[str]
    details: NotRequired[list[DetailDict]]
