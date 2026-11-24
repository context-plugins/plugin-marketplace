from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SectionableBlock13(SdkBaseModel):
    type_: Literal["paywall_break"] = Field(default="paywall_break", alias="type")
    """Discriminator value: paywall_break"""

    paywall_id: str
    """The ID of the paywall."""


class SectionableBlock13Dict(TypedDict):
    type_: Literal["paywall_break"]
    paywall_id: str
