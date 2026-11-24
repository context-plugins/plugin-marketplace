from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteMessageBatchResultEntry(SdkBaseModel):
    id: str = Field(alias="Id")
    """Represents a successfully deleted message."""


class DeleteMessageBatchResultEntryDict(TypedDict):
    id: str
