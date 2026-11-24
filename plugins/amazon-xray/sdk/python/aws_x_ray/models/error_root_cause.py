from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error_root_cause_service import ErrorRootCauseService, ErrorRootCauseServiceDict


class ErrorRootCause(SdkBaseModel):
    services: Optional[list[ErrorRootCauseService]] = Field(default=UNSET, alias="Services")
    """A list of services corresponding to an error. A service identifies a segment and it contains a name, account ID,
    type, and inferred flag."""

    client_impacting: Optional[bool] = Field(default=UNSET, alias="ClientImpacting")
    """A flag that denotes that the root cause impacts the trace client."""


class ErrorRootCauseDict(TypedDict):
    services: NotRequired[list[ErrorRootCauseServiceDict]]
    client_impacting: NotRequired[bool]
