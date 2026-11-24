from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Bpay(SdkBaseModel):
    biller_code: Optional[str] = Field(default=UNSET, alias="billerCode")
    """BPAY Biller Code for the transaction."""

    biller_name: Optional[str] = Field(default=UNSET, alias="billerName")
    """Name of the BPAY biller for the transaction."""

    crn: Optional[str] = UNSET
    """CRN for the transaction."""


class BpayDict(TypedDict):
    biller_code: NotRequired[str]
    biller_name: NotRequired[str]
    crn: NotRequired[str]
