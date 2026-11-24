from __future__ import annotations

from typing import Any, Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class RawEvent(SdkBaseModel):
    """Fallback for spans we don't know how to project.

    Covers new SDK categories and custom user @instrument calls. Kept so the viewer can still display *something*
    without dropping data."""

    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["raw"] = "raw"
    category: str
    name: str
    attributes: Optional[Any] = UNSET


class RawEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["raw"]
    category: str
    name: str
    attributes: NotRequired[Any]
