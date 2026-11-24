from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1CertInfo(SdkBaseModel):
    """X.509 certificate as defined in RFC 5280."""

    public_key: Optional[str] = Field(default=UNSET, alias="publicKey")
    """Public key component of the X.509 subject public key info."""

    serial_number: Optional[str] = Field(default=UNSET, alias="serialNumber")
    """X.509 serial number."""

    sig_alg_name: Optional[str] = Field(default=UNSET, alias="sigAlgName")
    """X.509 signatureAlgorithm."""

    issuer: Optional[str] = UNSET
    """X.509 issuer."""

    expiry_date: Optional[str] = Field(default=UNSET, alias="expiryDate")
    """X.509 ``notAfter`` validity period in milliseconds since epoch."""

    valid_from: Optional[str] = Field(default=UNSET, alias="validFrom")
    """X.509 ``notBefore`` validity period in milliseconds since epoch."""

    version: Optional[int] = UNSET
    """X.509 version."""

    subject_alternative_names: Optional[list[str]] = Field(default=UNSET, alias="subjectAlternativeNames")
    """X.509 subject alternative names (SANs) extension."""

    basic_constraints: Optional[str] = Field(default=UNSET, alias="basicConstraints")
    """X.509 basic constraints extension."""

    subject: Optional[str] = UNSET
    """X.509 subject."""

    is_valid: Optional[str] = Field(default=UNSET, alias="isValid")
    """Flag that specifies whether the certificate is valid. Flag is set to ``Yes`` if the certificate is valid, ``No``
    if expired, or ``Not yet`` if not yet valid."""


class GoogleCloudApigeeV1CertInfoDict(TypedDict):
    public_key: NotRequired[str]
    serial_number: NotRequired[str]
    sig_alg_name: NotRequired[str]
    issuer: NotRequired[str]
    expiry_date: NotRequired[str]
    valid_from: NotRequired[str]
    version: NotRequired[int]
    subject_alternative_names: NotRequired[list[str]]
    basic_constraints: NotRequired[str]
    subject: NotRequired[str]
    is_valid: NotRequired[str]
