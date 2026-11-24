from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActivityStartedEventDetails(SdkBaseModel):
    worker_name: Optional[str] = Field(default=UNSET, alias="workerName")
    """The name of the worker that the task is assigned to. These names are provided by the workers when calling
    GetActivityTask."""


class ActivityStartedEventDetailsDict(TypedDict):
    worker_name: NotRequired[str]
