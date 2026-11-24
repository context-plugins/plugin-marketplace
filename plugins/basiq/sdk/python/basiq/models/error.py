from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum_webhooks_api import DatumWebhooksApi, DatumWebhooksApiDict


class Error(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Always "list"."""

    correlation_id: Optional[str] = Field(default=UNSET, alias="correlationId")
    """Unique identifier for this particular occurrence of the problem."""

    data: Optional[list[DatumWebhooksApi]] = UNSET
    """Error data."""


class ErrorDict(TypedDict):
    type_: NotRequired[str]
    correlation_id: NotRequired[str]
    data: NotRequired[list[DatumWebhooksApiDict]]
