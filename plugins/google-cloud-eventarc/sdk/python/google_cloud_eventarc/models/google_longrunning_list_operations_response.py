from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_longrunning_operation import GoogleLongrunningOperation, GoogleLongrunningOperationDict


class GoogleLongrunningListOperationsResponse(SdkBaseModel):
    """The response message for Operations.ListOperations."""

    unreachable: Optional[list[str]] = UNSET
    """Unordered list. Unreachable resources. Populated when the request sets
    ``ListOperationsRequest.return_partial_success`` and reads across collections. For example, when attempting to list
    all resources across all supported locations."""

    operations: Optional[list[GoogleLongrunningOperation]] = UNSET
    """A list of operations that matches the specified filter in the request."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """The standard List next-page token."""


class GoogleLongrunningListOperationsResponseDict(TypedDict):
    unreachable: NotRequired[list[str]]
    operations: NotRequired[list[GoogleLongrunningOperationDict]]
    next_page_token: NotRequired[str]
