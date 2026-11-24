from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .purchase4 import Purchase4, Purchase4Dict


class ApiV2NumbersPurchaseResponse2(SdkBaseModel):
    purchase: Purchase4
    """Updated purchase details"""

    invalid_doc_types: Any
    """Document types that are invalid or missing"""


class ApiV2NumbersPurchaseResponse2Dict(TypedDict):
    purchase: Purchase4Dict
    invalid_doc_types: Any
