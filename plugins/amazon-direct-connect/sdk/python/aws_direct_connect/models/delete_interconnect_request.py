from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteInterconnectRequest(SdkBaseModel):
    interconnect_id: str = Field(alias="interconnectId")
    """The ID of the interconnect."""


class DeleteInterconnectRequestDict(TypedDict):
    interconnect_id: str
