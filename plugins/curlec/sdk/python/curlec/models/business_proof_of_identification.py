from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_razorpay_partner_documents_api import TypeRazorpayPartnerDocumentsApiOrStr


class BusinessProofOfIdentification(SdkBaseModel):
    type_: Optional[TypeRazorpayPartnerDocumentsApiOrStr] = Field(default=UNSET, alias="type")
    document_id: Optional[str] = UNSET


class BusinessProofOfIdentificationDict(TypedDict):
    type_: NotRequired[TypeRazorpayPartnerDocumentsApiOrStr]
    document_id: NotRequired[str]
