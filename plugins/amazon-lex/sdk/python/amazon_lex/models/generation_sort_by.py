from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.attribute1 import Attribute1OrStr
from .enums.order10 import Order10OrStr


class GenerationSortBy(SdkBaseModel):
    attribute: Attribute1OrStr
    """The attribute by which to sort the generation request information. You can sort by the following attributes.
    creationStartTime – The time at which the generation request was created. lastUpdatedTime – The time at which the
    generation request was last updated."""

    order: Order10OrStr
    """The order by which to sort the generation request information."""


class GenerationSortByDict(TypedDict):
    attribute: Attribute1OrStr
    order: Order10OrStr
