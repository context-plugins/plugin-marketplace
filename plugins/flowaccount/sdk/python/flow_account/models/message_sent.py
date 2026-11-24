from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MessageSent(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    message_id: OptionalNullable[str] = Field(default=UNSET, alias="messageId")
    external_document_id: OptionalNullable[str] = Field(default=UNSET, alias="externalDocumentId")


class MessageSentDict(TypedDict):
    message_id: NotRequired[str | None]
    external_document_id: NotRequired[str | None]
