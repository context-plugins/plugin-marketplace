from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .virtual_interface_test_history import VirtualInterfaceTestHistory, VirtualInterfaceTestHistoryDict


class ListVirtualInterfaceTestHistoryResponse(SdkBaseModel):
    virtual_interface_test_history: Optional[list[VirtualInterfaceTestHistory]] = Field(
        default=UNSET, alias="virtualInterfaceTestHistory"
    )
    """The ID of the tested virtual interface."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class ListVirtualInterfaceTestHistoryResponseDict(TypedDict):
    virtual_interface_test_history: NotRequired[list[VirtualInterfaceTestHistoryDict]]
    next_token: NotRequired[str]
