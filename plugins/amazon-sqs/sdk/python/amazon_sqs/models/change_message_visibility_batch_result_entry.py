from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ChangeMessageVisibilityBatchResultEntry(SdkBaseModel):
    id: str = Field(alias="Id")
    """Represents a message whose visibility timeout has been changed successfully."""


class ChangeMessageVisibilityBatchResultEntryDict(TypedDict):
    id: str
