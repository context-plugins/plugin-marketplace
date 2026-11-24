from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status3 import Status3OrStr


class Data2RendexRenderingWatchApi(SdkBaseModel):
    run_id: Optional[UUID] = Field(default=UNSET, alias="runId")
    watch_id: Optional[UUID] = Field(default=UNSET, alias="watchId")
    status: Optional[Status3OrStr] = UNSET


class Data2RendexRenderingWatchApiDict(TypedDict):
    run_id: NotRequired[UUID]
    watch_id: NotRequired[UUID]
    status: NotRequired[Status3OrStr]
