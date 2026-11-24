from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RouterType(SdkBaseModel):
    vendor: Optional[str] = UNSET
    """The vendor for the virtual interface's router."""

    platform: Optional[str] = UNSET
    """The virtual interface router platform."""

    software: Optional[str] = UNSET
    """The router software."""

    xslt_template_name: Optional[str] = Field(default=UNSET, alias="xsltTemplateName")
    """The template for the virtual interface's router."""

    xslt_template_name_for_mac_sec: Optional[str] = Field(default=UNSET, alias="xsltTemplateNameForMacSec")
    """The MAC Security (MACsec) template for the virtual interface's router."""

    router_type_identifier: Optional[str] = Field(default=UNSET, alias="routerTypeIdentifier")
    """Identifies the router by a combination of vendor, platform, and software version. For example,
    CiscoSystemsInc-2900SeriesRouters-IOS124."""


class RouterTypeDict(TypedDict):
    vendor: NotRequired[str]
    platform: NotRequired[str]
    software: NotRequired[str]
    xslt_template_name: NotRequired[str]
    xslt_template_name_for_mac_sec: NotRequired[str]
    router_type_identifier: NotRequired[str]
