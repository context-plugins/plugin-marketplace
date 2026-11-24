from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .purchase1 import Purchase1, Purchase1Dict


class Purchase(SdkBaseModel):
    """Purchase response object"""

    errors: Any
    """Errors that occurred during purchase"""

    purchases: list[Purchase1]
    """Successfully purchased numbers"""


class PurchaseDict(TypedDict):
    errors: Any
    purchases: list[Purchase1Dict]
