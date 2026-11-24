from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeRazorpayPartnerDocumentsApi(str, Enum):
    BUSINESS_PROOF_URL = "business_proof_url"
    GST_CERTIFICATE = "gst_certificate"
    SHOP_ESTABLISHMENT_CERTIFICATE = "shop_establishment_certificate"
    CERTIFICATE_OF_INCORPORATION = "certificate_of_incorporation"
    TRUST_DEED = "trust_deed"
    SOCIETY_REGISTRATION_CERTIFICATE = "society_registration_certificate"

    __str__ = str.__str__


TypeRazorpayPartnerDocumentsApiOrStr: TypeAlias = Annotated[
    TypeRazorpayPartnerDocumentsApi | str, open_enum_validator(TypeRazorpayPartnerDocumentsApi)
]
