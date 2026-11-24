from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SegmentSubscriptionInput1(SdkBaseModel):
    type_: Literal["emails"] = Field(default="emails", alias="type")
    """Discriminator value: emails"""

    emails: list[str]


class SegmentSubscriptionInput1Dict(TypedDict):
    type_: Literal["emails"]
    emails: list[str]
