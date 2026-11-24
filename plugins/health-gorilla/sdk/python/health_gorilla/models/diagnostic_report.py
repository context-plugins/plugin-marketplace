from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class DiagnosticReport(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    id: Optional[str] = UNSET
    status: Optional[str] = UNSET
    category: Optional[list[Any]] = UNSET
    code: Optional[Any] = UNSET
    subject: Optional[Any] = UNSET
    effective_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="effectiveDateTime")
    result: Optional[list[Any]] = UNSET
    presented_form: Optional[list[Any]] = Field(default=UNSET, alias="presentedForm")


class DiagnosticReportDict(TypedDict):
    resource_type: NotRequired[str]
    id: NotRequired[str]
    status: NotRequired[str]
    category: NotRequired[list[Any]]
    code: NotRequired[Any]
    subject: NotRequired[Any]
    effective_date_time: NotRequired[RFC3339DateTime]
    result: NotRequired[list[Any]]
    presented_form: NotRequired[list[Any]]
