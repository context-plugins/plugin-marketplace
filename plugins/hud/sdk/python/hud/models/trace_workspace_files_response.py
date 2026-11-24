from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .captured_file import CapturedFile, CapturedFileDict


class TraceWorkspaceFilesResponse(SdkBaseModel):
    trace_id: UUID
    files: list[CapturedFile]


class TraceWorkspaceFilesResponseDict(TypedDict):
    trace_id: UUID
    files: list[CapturedFileDict]
