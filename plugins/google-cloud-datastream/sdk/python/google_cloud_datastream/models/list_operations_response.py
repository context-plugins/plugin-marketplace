from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .operation import Operation, OperationDict


class ListOperationsResponse(SdkBaseModel):
    """The response message for Operations.ListOperations."""

    operations: Optional[list[Operation]] = UNSET
    """A list of operations that matches the specified filter in the request."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """The standard List next-page token."""

    unreachable: Optional[list[str]] = UNSET
    """Unordered list. Unreachable resources. Populated when the request sets
    ``ListOperationsRequest.return_partial_success`` and reads across collections. For example, when attempting to list
    all resources across all supported locations."""


class ListOperationsResponseDict(TypedDict):
    operations: NotRequired[list[OperationDict]]
    next_page_token: NotRequired[str]
    unreachable: NotRequired[list[str]]
