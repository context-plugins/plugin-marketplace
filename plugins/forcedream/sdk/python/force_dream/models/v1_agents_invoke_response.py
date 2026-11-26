from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1AgentsInvokeResponse(SdkBaseModel):
    task_id: Optional[str] = UNSET


class V1AgentsInvokeResponseDict(TypedDict):
    task_id: NotRequired[str]
