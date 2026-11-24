from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_order_aws_code_build_command_execution_api import SortOrderAwsCodeBuildCommandExecutionApiOrStr


class ListSandboxesInput(SdkBaseModel):
    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of sandbox records to be retrieved."""

    sort_order: Optional[SortOrderAwsCodeBuildCommandExecutionApiOrStr] = Field(default=UNSET, alias="sortOrder")
    """The order in which sandbox records should be retrieved."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The next token, if any, to get paginated results. You will get this value from previous execution of list
    sandboxes."""


class ListSandboxesInputDict(TypedDict):
    max_results: NotRequired[int]
    sort_order: NotRequired[SortOrderAwsCodeBuildCommandExecutionApiOrStr]
    next_token: NotRequired[str]
