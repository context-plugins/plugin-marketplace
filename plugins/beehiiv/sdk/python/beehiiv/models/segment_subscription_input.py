from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SegmentSubscriptionInput(SdkBaseModel):
    type_: Literal["subscriptions"] = Field(default="subscriptions", alias="type")
    """Discriminator value: subscriptions"""

    subscriptions: list[str]


class SegmentSubscriptionInputDict(TypedDict):
    type_: Literal["subscriptions"]
    subscriptions: list[str]
