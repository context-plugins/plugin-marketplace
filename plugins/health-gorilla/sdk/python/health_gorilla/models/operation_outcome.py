from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .issue import Issue, IssueDict


class OperationOutcome(SdkBaseModel):
    resource_type: Optional[str] = Field(default=UNSET, alias="resourceType")
    issue: Optional[list[Issue]] = UNSET


class OperationOutcomeDict(TypedDict):
    resource_type: NotRequired[str]
    issue: NotRequired[list[IssueDict]]
