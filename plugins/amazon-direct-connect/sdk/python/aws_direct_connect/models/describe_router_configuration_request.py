from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeRouterConfigurationRequest(SdkBaseModel):
    virtual_interface_id: str = Field(alias="virtualInterfaceId")
    """The ID of the virtual interface."""

    router_type_identifier: Optional[str] = Field(default=UNSET, alias="routerTypeIdentifier")
    """Identifies the router by a combination of vendor, platform, and software version. For example,
    CiscoSystemsInc-2900SeriesRouters-IOS124."""


class DescribeRouterConfigurationRequestDict(TypedDict):
    virtual_interface_id: str
    router_type_identifier: NotRequired[str]
