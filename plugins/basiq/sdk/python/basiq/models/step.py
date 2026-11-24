from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .result_connect_jobs_api import ResultConnectJobsApi, ResultConnectJobsApiDict


class Step(SdkBaseModel):
    title: Optional[str] = UNSET
    status: Optional[str] = UNSET
    result: OptionalNullable[ResultConnectJobsApi] = UNSET


class StepDict(TypedDict):
    title: NotRequired[str]
    status: NotRequired[str]
    result: NotRequired[ResultConnectJobsApiDict | None]
