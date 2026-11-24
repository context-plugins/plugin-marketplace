from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .cloudflow_run_summary import CloudflowRunSummary, CloudflowRunSummaryDict


class CloudflowRunList(SdkBaseModel):
    """A cursor-paginated page of a flow's runs."""

    items: list[CloudflowRunSummary]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    """Token for the next page. Null on the last page."""

    row_count: OptionalNullable[int] = Field(default=UNSET, alias="rowCount")
    """Best-effort total. May be null."""


class CloudflowRunListDict(TypedDict):
    items: list[CloudflowRunSummaryDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int | None]
