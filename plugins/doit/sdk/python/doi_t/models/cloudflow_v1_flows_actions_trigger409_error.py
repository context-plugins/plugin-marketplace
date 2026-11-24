from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .cloudflow_run_summary import CloudflowRunSummary, CloudflowRunSummaryDict
from .detail import Detail, DetailDict


class CloudflowV1FlowsActionsTrigger409Error(SdkBaseModel):
    type_: str = Field(alias="type")
    title: str
    status: int
    detail: str
    instance: str
    code: str
    retryable: bool
    details: Optional[list[Detail]] = UNSET
    docs_url: OptionalNullable[str] = Field(default=UNSET, alias="docsUrl")
    execution: Optional[CloudflowRunSummary] = UNSET
    """A run without its per-node detail."""


class CloudflowV1FlowsActionsTrigger409ErrorDict(TypedDict):
    type_: str
    title: str
    status: int
    detail: str
    instance: str
    code: str
    retryable: bool
    details: NotRequired[list[DetailDict]]
    docs_url: NotRequired[str | None]
    execution: NotRequired[CloudflowRunSummaryDict]
