from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .distinguished_name import DistinguishedName, DistinguishedNameDict
from .enums.extended_key_usage2 import ExtendedKeyUsage2OrStr
from .enums.key_algorithm import KeyAlgorithmOrStr
from .enums.key_usage2 import KeyUsage2OrStr
from .general_name import GeneralName, GeneralNameDict


class X509Attributes(SdkBaseModel):
    issuer: Optional[DistinguishedName] = Field(default=UNSET, alias="Issuer")
    subject: Optional[DistinguishedName] = Field(default=UNSET, alias="Subject")
    subject_alternative_names: Optional[list[GeneralName]] = Field(default=UNSET, alias="SubjectAlternativeNames")
    """One or more domain names (subject alternative names) included in the certificate. This list contains the domain
    names that are bound to the public key that is contained in the certificate. The subject alternative names include
    the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the
    website."""

    extended_key_usages: Optional[list[ExtendedKeyUsage2OrStr]] = Field(default=UNSET, alias="ExtendedKeyUsages")
    """Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the
    certificate public key can be used and consists of a name and an object identifier (OID)."""

    key_algorithm: Optional[KeyAlgorithmOrStr] = Field(default=UNSET, alias="KeyAlgorithm")
    """The algorithm that was used to generate the public-private key pair."""

    key_usages: Optional[list[KeyUsage2OrStr]] = Field(default=UNSET, alias="KeyUsages")
    """A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the
    public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT,
    NON_REPUDIATION, and more."""

    serial_number: Optional[str] = Field(default=UNSET, alias="SerialNumber")
    """The serial number assigned by the certificate authority."""

    not_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="NotAfter")
    """The time after which the certificate is not valid."""

    not_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="NotBefore")
    """The time before which the certificate is not valid."""


class X509AttributesDict(TypedDict):
    issuer: NotRequired[DistinguishedNameDict]
    subject: NotRequired[DistinguishedNameDict]
    subject_alternative_names: NotRequired[list[GeneralNameDict]]
    extended_key_usages: NotRequired[list[ExtendedKeyUsage2OrStr]]
    key_algorithm: NotRequired[KeyAlgorithmOrStr]
    key_usages: NotRequired[list[KeyUsage2OrStr]]
    serial_number: NotRequired[str]
    not_after: NotRequired[RFC3339DateTime]
    not_before: NotRequired[RFC3339DateTime]
