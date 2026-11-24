from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class BatchImportRetry(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    batch_id: OptionalNullable[str] = Field(default=UNSET, alias="batchId")
    message_ids: OptionalNullable[list[str]] = Field(default=UNSET, alias="messageIds")


class BatchImportRetryDict(TypedDict):
    batch_id: NotRequired[str | None]
    message_ids: NotRequired[list[str] | None]
