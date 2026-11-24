from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .fault_root_cause_service import FaultRootCauseService, FaultRootCauseServiceDict


class FaultRootCause(SdkBaseModel):
    services: Optional[list[FaultRootCauseService]] = Field(default=UNSET, alias="Services")
    """A list of corresponding services. A service identifies a segment and it contains a name, account ID, type, and
    inferred flag."""

    client_impacting: Optional[bool] = Field(default=UNSET, alias="ClientImpacting")
    """A flag that denotes that the root cause impacts the trace client."""


class FaultRootCauseDict(TypedDict):
    services: NotRequired[list[FaultRootCauseServiceDict]]
    client_impacting: NotRequired[bool]
