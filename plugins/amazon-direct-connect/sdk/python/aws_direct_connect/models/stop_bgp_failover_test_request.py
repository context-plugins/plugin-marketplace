from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopBgpFailoverTestRequest(SdkBaseModel):
    virtual_interface_id: str = Field(alias="virtualInterfaceId")
    """The ID of the virtual interface you no longer want to test."""


class StopBgpFailoverTestRequestDict(TypedDict):
    virtual_interface_id: str
