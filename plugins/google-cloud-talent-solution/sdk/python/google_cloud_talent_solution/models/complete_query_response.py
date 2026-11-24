from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .completion_result import CompletionResult, CompletionResultDict
from .response_metadata1 import ResponseMetadata1, ResponseMetadata1Dict


class CompleteQueryResponse(SdkBaseModel):
    """Response of auto-complete query."""

    completion_results: Optional[list[CompletionResult]] = Field(default=UNSET, alias="completionResults")
    """Results of the matching job/company candidates."""

    metadata: Optional[ResponseMetadata1] = UNSET
    """Additional information for the API invocation, such as the request tracking id."""


class CompleteQueryResponseDict(TypedDict):
    completion_results: NotRequired[list[CompletionResultDict]]
    metadata: NotRequired[ResponseMetadata1Dict]
