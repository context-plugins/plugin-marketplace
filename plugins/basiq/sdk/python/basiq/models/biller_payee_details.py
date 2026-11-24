from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BillerPayeeDetails(SdkBaseModel):
    """Details specific to biller payees."""

    biller_code: Optional[str] = Field(default=UNSET, alias="billerCode")
    """The BPAY biller code."""

    crn: Optional[str] = UNSET
    """The Customer Reference Number for the biller."""

    biller_name: Optional[str] = Field(default=UNSET, alias="billerName")
    """The name of the biller."""


class BillerPayeeDetailsDict(TypedDict):
    biller_code: NotRequired[str]
    crn: NotRequired[str]
    biller_name: NotRequired[str]
