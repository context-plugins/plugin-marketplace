from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .virtual_interface_test_history import VirtualInterfaceTestHistory, VirtualInterfaceTestHistoryDict


class StartBgpFailoverTestResponse(SdkBaseModel):
    virtual_interface_test: Optional[VirtualInterfaceTestHistory] = Field(default=UNSET, alias="virtualInterfaceTest")


class StartBgpFailoverTestResponseDict(TypedDict):
    virtual_interface_test: NotRequired[VirtualInterfaceTestHistoryDict]
