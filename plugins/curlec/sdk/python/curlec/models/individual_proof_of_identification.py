from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2_razorpay_partner_documents_api import Type2RazorpayPartnerDocumentsApiOrStr


class IndividualProofOfIdentification(SdkBaseModel):
    type_: Optional[Type2RazorpayPartnerDocumentsApiOrStr] = Field(default=UNSET, alias="type")
    url: Optional[str] = UNSET
    document_id: Optional[str] = UNSET


class IndividualProofOfIdentificationDict(TypedDict):
    type_: NotRequired[Type2RazorpayPartnerDocumentsApiOrStr]
    url: NotRequired[str]
    document_id: NotRequired[str]
