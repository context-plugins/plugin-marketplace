from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .business_proof_of_address import BusinessProofOfAddress, BusinessProofOfAddressDict
from .business_proof_of_identification import BusinessProofOfIdentification, BusinessProofOfIdentificationDict


class AccountDocument(SdkBaseModel):
    """KYC documents for a sub-merchant account. Files must be JPG/PNG (max 4MB) or PDF (max 2MB)."""

    business_proof_of_identification: Optional[list[BusinessProofOfIdentification]] = UNSET
    business_proof_of_address: Optional[list[BusinessProofOfAddress]] = UNSET


class AccountDocumentDict(TypedDict):
    business_proof_of_identification: NotRequired[list[BusinessProofOfIdentificationDict]]
    business_proof_of_address: NotRequired[list[BusinessProofOfAddressDict]]
