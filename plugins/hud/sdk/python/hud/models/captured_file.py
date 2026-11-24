from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1_hud_platform_qa_agents_api import Status1HudPlatformQaAgentsApiOrStr


class CapturedFile(SdkBaseModel):
    """One changed workspace file preserved as a downloadable telemetry artifact."""

    model_config = ConfigDict(extra="forbid")

    path: str
    status: Status1HudPlatformQaAgentsApiOrStr
    size: int
    content_hash: Optional[str] = UNSET
    content_type: str = "application/octet-stream"
    url: Optional[str] = UNSET
    download_url: Optional[str] = UNSET


class CapturedFileDict(TypedDict):
    path: str
    status: Status1HudPlatformQaAgentsApiOrStr
    size: int
    content_hash: NotRequired[str]
    content_type: NotRequired[str]
    url: NotRequired[str]
    download_url: NotRequired[str]
