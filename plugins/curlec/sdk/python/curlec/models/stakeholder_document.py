from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .individual_proof_of_address import IndividualProofOfAddress, IndividualProofOfAddressDict
from .individual_proof_of_identification import IndividualProofOfIdentification, IndividualProofOfIdentificationDict


class StakeholderDocument(SdkBaseModel):
    """KYC documents for a stakeholder. Supports PAN, Aadhaar, passport, and voter ID. Files must be JPG/PNG (max 4MB)
    or PDF (max 2MB)."""

    individual_proof_of_address: Optional[list[IndividualProofOfAddress]] = UNSET
    individual_proof_of_identification: Optional[list[IndividualProofOfIdentification]] = UNSET


class StakeholderDocumentDict(TypedDict):
    individual_proof_of_address: NotRequired[list[IndividualProofOfAddressDict]]
    individual_proof_of_identification: NotRequired[list[IndividualProofOfIdentificationDict]]
