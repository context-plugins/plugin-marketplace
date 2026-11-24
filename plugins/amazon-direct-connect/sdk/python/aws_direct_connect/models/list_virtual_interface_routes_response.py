from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .route import Route, RouteDict


class ListVirtualInterfaceRoutesResponse(SdkBaseModel):
    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    routes: Optional[list[Route]] = UNSET
    """The routes for the virtual interface."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class ListVirtualInterfaceRoutesResponseDict(TypedDict):
    virtual_interface_id: NotRequired[str]
    routes: NotRequired[list[RouteDict]]
    next_token: NotRequired[str]
