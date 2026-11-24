from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_enrich_api import DataEnrichApi, DataEnrichApiDict
from .links1_enrich_api import Links1EnrichApi, Links1EnrichApiDict


class EnrichResponse(SdkBaseModel):
    type_: str = Field(alias="type")
    """Value is "enrich"
    """

    direction: str
    """Debit or Credit transaction"""

    class_: str = Field(alias="class")
    """For Debit: payment, bank-fee, cash-withdrawal, transfer, loan-interest. <br/> For Credit: refund, direct-credit,
    interest, transfer, loan-repayment."""

    data: Optional[DataEnrichApi] = UNSET
    """Container object, containing enrich details."""

    links: Links1EnrichApi


class EnrichResponseDict(TypedDict):
    type_: str
    direction: str
    class_: str
    data: NotRequired[DataEnrichApiDict]
    links: Links1EnrichApiDict
