from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_time_root_cause_service import ResponseTimeRootCauseService, ResponseTimeRootCauseServiceDict


class ResponseTimeRootCause(SdkBaseModel):
    services: Optional[list[ResponseTimeRootCauseService]] = Field(default=UNSET, alias="Services")
    """A list of corresponding services. A service identifies a segment and contains a name, account ID, type, and
    inferred flag."""

    client_impacting: Optional[bool] = Field(default=UNSET, alias="ClientImpacting")
    """A flag that denotes that the root cause impacts the trace client."""


class ResponseTimeRootCauseDict(TypedDict):
    services: NotRequired[list[ResponseTimeRootCauseServiceDict]]
    client_impacting: NotRequired[bool]
