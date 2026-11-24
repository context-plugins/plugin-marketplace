from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_hud_platform_qa_agents_api import StatusHudPlatformQaAgentsApiOrStr


class FilePatch(SdkBaseModel):
    """A unified-diff patch for one file in a workspace change.

    Byte-identical to the legacy ``tool_call.result_data.file_diff`` patch shape so the frontend's existing diff
    parsing/reconstruction ports unchanged. ``patch`` may be a placeholder string for over-cap files when
    ``truncated``."""

    model_config = ConfigDict(extra="forbid")

    path: str
    status: StatusHudPlatformQaAgentsApiOrStr
    patch: str = ""
    size_before: int = 0
    size_after: int = 0
    content_hash_before: Optional[str] = UNSET
    content_hash_after: Optional[str] = UNSET


class FilePatchDict(TypedDict):
    path: str
    status: StatusHudPlatformQaAgentsApiOrStr
    patch: NotRequired[str]
    size_before: NotRequired[int]
    size_after: NotRequired[int]
    content_hash_before: NotRequired[str]
    content_hash_after: NotRequired[str]
