from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .custom_bypass_item import CustomBypassItem, CustomBypassItemDict
from .default_bypass_item import DefaultBypassItem, DefaultBypassItemDict


class Data5(SdkBaseModel):
    inherits_from_base: bool = Field(alias="inheritsFromBase")
    """Whether the URL bypass configuration is inherited from the base policy"""

    custom: list[CustomBypassItem]
    """Custom URL bypass entries defined by the admin"""

    default: list[DefaultBypassItem]
    """Default URL bypass entries with their toggle states"""


class Data5Dict(TypedDict):
    inherits_from_base: bool
    custom: list[CustomBypassItemDict]
    default: list[DefaultBypassItemDict]
