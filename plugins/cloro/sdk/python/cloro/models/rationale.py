from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product_citation import ProductCitation, ProductCitationDict


class Rationale(SdkBaseModel):
    rationale: Optional[str] = UNSET
    citations: Optional[list[ProductCitation]] = UNSET


class RationaleDict(TypedDict):
    rationale: NotRequired[str]
    citations: NotRequired[list[ProductCitationDict]]
