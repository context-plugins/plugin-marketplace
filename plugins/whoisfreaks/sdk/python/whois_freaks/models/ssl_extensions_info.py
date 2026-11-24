from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ssl_alternate_names import SslAlternateNames, SslAlternateNamesDict
from .ssl_authority_info import SslAuthorityInfo, SslAuthorityInfoDict
from .ssl_certificate_policy import SslCertificatePolicy, SslCertificatePolicyDict


class SslExtensionsInfo(SdkBaseModel):
    authority_key_identifier: Optional[str] = Field(default=UNSET, alias="authorityKeyIdentifier")
    subject_key_identifier: Optional[str] = Field(default=UNSET, alias="subjectKeyIdentifier")
    key_usages: Optional[list[str]] = Field(default=UNSET, alias="keyUsages")
    extended_key_usages: Optional[list[str]] = Field(default=UNSET, alias="extendedKeyUsages")
    crl_distribution_points: Optional[list[str]] = Field(default=UNSET, alias="crlDistributionPoints")
    authority_info_access: Optional[SslAuthorityInfo] = Field(default=UNSET, alias="authorityInfoAccess")
    subject_alternative_names: Optional[SslAlternateNames] = Field(default=UNSET, alias="subjectAlternativeNames")
    certificate_policies: Optional[list[SslCertificatePolicy]] = Field(default=UNSET, alias="certificatePolicies")


class SslExtensionsInfoDict(TypedDict):
    authority_key_identifier: NotRequired[str]
    subject_key_identifier: NotRequired[str]
    key_usages: NotRequired[list[str]]
    extended_key_usages: NotRequired[list[str]]
    crl_distribution_points: NotRequired[list[str]]
    authority_info_access: NotRequired[SslAuthorityInfoDict]
    subject_alternative_names: NotRequired[SslAlternateNamesDict]
    certificate_policies: NotRequired[list[SslCertificatePolicyDict]]
