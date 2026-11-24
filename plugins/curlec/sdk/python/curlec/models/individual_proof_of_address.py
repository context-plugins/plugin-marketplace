from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_razorpay_partner_documents_api import Type1RazorpayPartnerDocumentsApiOrStr


class IndividualProofOfAddress(SdkBaseModel):
    type_: Optional[Type1RazorpayPartnerDocumentsApiOrStr] = Field(default=UNSET, alias="type")
    url: Optional[str] = UNSET
    document_id: Optional[str] = UNSET


class IndividualProofOfAddressDict(TypedDict):
    type_: NotRequired[Type1RazorpayPartnerDocumentsApiOrStr]
    url: NotRequired[str]
    document_id: NotRequired[str]
