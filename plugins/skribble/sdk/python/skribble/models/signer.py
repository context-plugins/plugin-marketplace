from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .optional_signer_infos import OptionalSignerInfos, OptionalSignerInfosDict
from .signer_certificate import SignerCertificate, SignerCertificateDict


class Signer(SdkBaseModel):
    valid: Optional[bool] = UNSET
    signer: Optional[str] = UNSET
    time: Optional[RFC3339DateTime] = UNSET
    quality: Optional[str] = UNSET
    legislation: Optional[str] = UNSET
    long_term_validation: Optional[bool] = Field(default=UNSET, alias="longTermValidation")
    visual_differences: Optional[bool] = Field(default=UNSET, alias="visualDifferences")
    undefined_changes: Optional[bool] = Field(default=UNSET, alias="undefinedChanges")
    certificate: Optional[SignerCertificate] = UNSET
    optional_infos: Optional[OptionalSignerInfos] = Field(default=UNSET, alias="optionalInfos")


class SignerDict(TypedDict):
    valid: NotRequired[bool]
    signer: NotRequired[str]
    time: NotRequired[RFC3339DateTime]
    quality: NotRequired[str]
    legislation: NotRequired[str]
    long_term_validation: NotRequired[bool]
    visual_differences: NotRequired[bool]
    undefined_changes: NotRequired[bool]
    certificate: NotRequired[SignerCertificateDict]
    optional_infos: NotRequired[OptionalSignerInfosDict]
