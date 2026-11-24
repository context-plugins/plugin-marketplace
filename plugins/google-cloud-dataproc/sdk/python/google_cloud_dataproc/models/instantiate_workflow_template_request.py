from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InstantiateWorkflowTemplateRequest(SdkBaseModel):
    """A request to instantiate a workflow template."""

    version: Optional[int] = UNSET
    """Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only
    if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a
    previous version of workflow template."""

    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This
    mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID
    (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers
    (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters."""

    parameters: Optional[dict[str, str]] = UNSET
    """Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000
    characters."""


class InstantiateWorkflowTemplateRequestDict(TypedDict):
    version: NotRequired[int]
    request_id: NotRequired[str]
    parameters: NotRequired[dict[str, str]]
