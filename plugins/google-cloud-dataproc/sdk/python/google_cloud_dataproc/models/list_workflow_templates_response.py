from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .workflow_template import WorkflowTemplate, WorkflowTemplateDict


class ListWorkflowTemplatesResponse(SdkBaseModel):
    """A response to a request to list workflow templates in a project."""

    unreachable: Optional[list[str]] = UNSET
    """Output only. List of workflow templates that could not be included in the response. Attempting to get one of
    these resources may indicate why it was not included in the list response."""

    templates: Optional[list[WorkflowTemplate]] = UNSET
    """Output only. WorkflowTemplates list."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Output only. This token is included in the response if there are more results to fetch. To fetch additional
    results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest."""


class ListWorkflowTemplatesResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    templates: NotRequired[list[WorkflowTemplateDict]]
    next_page_token: NotRequired[str]
