from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, RFC3339DateTime, SdkBaseModel


class PublishValueReceiptBody(SdkBaseModel):
    publish_expires_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="publishExpiresAt")


class PublishValueReceiptBodyDict(TypedDict):
    publish_expires_at: NotRequired[RFC3339DateTime | None]
