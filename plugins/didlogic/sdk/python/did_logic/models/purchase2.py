from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .errors1 import Errors1, Errors1Dict
from .purchase1 import Purchase1, Purchase1Dict


class Purchase2(SdkBaseModel):
    """Purchase response object"""

    errors: Errors1
    """Errors that occurred during purchase"""

    purchases: list[Purchase1]
    """Successfully purchased numbers"""


class Purchase2Dict(TypedDict):
    errors: Errors1Dict
    purchases: list[Purchase1Dict]
