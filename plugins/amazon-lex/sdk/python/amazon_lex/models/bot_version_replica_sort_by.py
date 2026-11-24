from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.order8 import Order8OrStr


class BotVersionReplicaSortBy(SdkBaseModel):
    attribute: Literal["BotVersion"] = "BotVersion"
    """The attribute of the sort category for the version replicated bots."""

    order: Order8OrStr
    """The order of the sort category for the version replicated bots."""


class BotVersionReplicaSortByDict(TypedDict):
    attribute: Literal["BotVersion"]
    order: Order8OrStr
