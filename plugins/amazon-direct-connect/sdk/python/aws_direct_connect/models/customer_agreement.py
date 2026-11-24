from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomerAgreement(SdkBaseModel):
    agreement_name: Optional[str] = Field(default=UNSET, alias="agreementName")
    """The name of the agreement."""

    status: Optional[str] = UNSET
    """The status of the customer agreement. This will be either signed or unsigned"""


class CustomerAgreementDict(TypedDict):
    agreement_name: NotRequired[str]
    status: NotRequired[str]
