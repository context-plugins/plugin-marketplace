from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1Session(SdkBaseModel):
    """Session carries the debug session id and its creation time."""

    id: Optional[str] = UNSET
    """The debug session ID."""

    timestamp_ms: Optional[str] = Field(default=UNSET, alias="timestampMs")
    """The first transaction creation timestamp in millisecond, recorded by UAP."""


class GoogleCloudApigeeV1SessionDict(TypedDict):
    id: NotRequired[str]
    timestamp_ms: NotRequired[str]
