from __future__ import annotations

from typing import Literal

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .captured_file import CapturedFile, CapturedFileDict


class FileCaptureEvent(SdkBaseModel):
    """Final changed-file artifacts captured from ``filetracking.capture``."""

    model_config = ConfigDict(extra="forbid")

    id: str
    parent_id: Optional[str] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: Optional[RFC3339DateTime] = UNSET
    seq: int = 0
    kind: Literal["file_capture"] = "file_capture"
    files_scanned: int = 0
    files_changed: int = 0
    files_eligible: int = 0
    files_captured: int = 0
    files_skipped: int = 0
    truncated: bool = False
    files: Optional[list[CapturedFile]] = UNSET


class FileCaptureEventDict(TypedDict):
    id: str
    parent_id: NotRequired[str]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime]
    seq: NotRequired[int]
    kind: Literal["file_capture"]
    files_scanned: NotRequired[int]
    files_changed: NotRequired[int]
    files_eligible: NotRequired[int]
    files_captured: NotRequired[int]
    files_skipped: NotRequired[int]
    truncated: NotRequired[bool]
    files: NotRequired[list[CapturedFileDict]]
