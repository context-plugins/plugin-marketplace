from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .atif_subagent_ref import AtifSubagentRef, AtifSubagentRefDict
from .unions.content_hud_platform_jobs_api import ContentHudPlatformJobsApi, ContentHudPlatformJobsApiDict


class AtifObservationResult(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    source_call_id: Optional[str] = UNSET
    content: Optional[ContentHudPlatformJobsApi] = UNSET
    subagent_trajectory_ref: Optional[list[AtifSubagentRef]] = UNSET
    extra: Optional[Any] = UNSET


class AtifObservationResultDict(TypedDict):
    source_call_id: NotRequired[str]
    content: NotRequired[ContentHudPlatformJobsApiDict]
    subagent_trajectory_ref: NotRequired[list[AtifSubagentRefDict]]
    extra: NotRequired[Any]
