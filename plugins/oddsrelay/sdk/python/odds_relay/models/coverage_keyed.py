from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .products2 import Products2, Products2Dict


class CoverageKeyed(SdkBaseModel):
    """The keyed view: your key's products the region serves."""

    region: str
    generated_at: str
    products: dict[str, Products2]


class CoverageKeyedDict(TypedDict):
    region: str
    generated_at: str
    products: dict[str, Products2Dict]
