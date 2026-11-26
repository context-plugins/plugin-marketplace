from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Code1BillV3VendorsApi(SdkBaseModel):
    name: str
    """Name"""


class Code1BillV3VendorsApiDict(TypedDict):
    name: str
