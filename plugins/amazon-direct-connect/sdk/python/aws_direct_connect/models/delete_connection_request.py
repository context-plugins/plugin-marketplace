from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteConnectionRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the connection."""


class DeleteConnectionRequestDict(TypedDict):
    connection_id: str
