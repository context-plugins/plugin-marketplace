from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ConfirmCustomerAgreementRequest(SdkBaseModel):
    agreement_name: Optional[str] = Field(default=UNSET, alias="agreementName")
    """The name of the customer agreement."""


class ConfirmCustomerAgreementRequestDict(TypedDict):
    agreement_name: NotRequired[str]
