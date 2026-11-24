from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .invalid_handshake_item import InvalidHandshakeItem, InvalidHandshakeItemDict


class BillingTransferProblemDetails(SdkBaseModel):
    """RFC 7807 problem-detail body returned by Billing Transfer endpoints for 4xx/5xx errors."""

    model_config = ConfigDict(extra="forbid")

    type_: str = Field(alias="type")
    """A URI identifying the problem type."""

    title: str
    """Short, human-readable summary of the problem type."""

    status: int
    """The HTTP status code repeated in the body."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    code: str
    """Stable machine-readable error code."""

    retryable: Optional[bool] = UNSET
    """Whether retrying the same request may succeed without changes."""

    invalid_items: Optional[list[InvalidHandshakeItem]] = Field(default=UNSET, alias="invalidItems")
    """Present on batch-validation failures; the batch items that failed validation."""


class BillingTransferProblemDetailsDict(TypedDict):
    type_: str
    title: str
    status: int
    detail: NotRequired[str]
    code: str
    retryable: NotRequired[bool]
    invalid_items: NotRequired[list[InvalidHandshakeItemDict]]
