from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ConfirmConnectionRequest(SdkBaseModel):
    connection_id: str = Field(alias="connectionId")
    """The ID of the hosted connection."""


class ConfirmConnectionRequestDict(TypedDict):
    connection_id: str
