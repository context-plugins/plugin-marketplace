from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class BasesWebhooksRefreshResponse(SdkBaseModel):
    expiration_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expirationTime")
    """The new expiration time for the webhook."""


class BasesWebhooksRefreshResponseDict(TypedDict):
    expiration_time: NotRequired[RFC3339DateTime]
