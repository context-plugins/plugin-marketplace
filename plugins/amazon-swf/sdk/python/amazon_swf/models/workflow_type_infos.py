from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .workflow_type_info import WorkflowTypeInfo, WorkflowTypeInfoDict


class WorkflowTypeInfos(SdkBaseModel):
    type_infos: list[WorkflowTypeInfo] = Field(alias="typeInfos")
    """The list of workflow type information."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """If a NextPageToken was returned by a previous call, there are more results available. To retrieve the next page
    of results, make the call again using the returned token in nextPageToken. Keep all other arguments unchanged. The
    configured maximumPageSize determines how many results can be returned in a single call."""


class WorkflowTypeInfosDict(TypedDict):
    type_infos: list[WorkflowTypeInfoDict]
    next_page_token: NotRequired[str]
