from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudflowRunNodePayload(SdkBaseModel):
    """JSON a node consumed or produced, bounded in size. Null when the node records nothing of that kind — normal for
    ``input`` on any non-action node."""

    value: list[Any]
    """The recorded JSON, always an array. Sensitive values are replaced with a redaction marker."""

    truncated: Optional[bool] = UNSET
    """True when entries were dropped to fit the size cap."""

    total_bytes: Optional[int] = Field(default=UNSET, alias="totalBytes")
    """Size of the untruncated payload in bytes."""


class CloudflowRunNodePayloadDict(TypedDict):
    value: list[Any]
    truncated: NotRequired[bool]
    total_bytes: NotRequired[int]
