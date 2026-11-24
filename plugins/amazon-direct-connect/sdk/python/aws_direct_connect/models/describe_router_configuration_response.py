from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .router_type import RouterType, RouterTypeDict


class DescribeRouterConfigurationResponse(SdkBaseModel):
    customer_router_config: Optional[str] = Field(default=UNSET, alias="customerRouterConfig")
    """The customer router configuration."""

    router: Optional[RouterType] = UNSET
    virtual_interface_id: Optional[str] = Field(default=UNSET, alias="virtualInterfaceId")
    """The ID assigned to the virtual interface."""

    virtual_interface_name: Optional[str] = Field(default=UNSET, alias="virtualInterfaceName")
    """Provides the details about a virtual interface's router."""


class DescribeRouterConfigurationResponseDict(TypedDict):
    customer_router_config: NotRequired[str]
    router: NotRequired[RouterTypeDict]
    virtual_interface_id: NotRequired[str]
    virtual_interface_name: NotRequired[str]
