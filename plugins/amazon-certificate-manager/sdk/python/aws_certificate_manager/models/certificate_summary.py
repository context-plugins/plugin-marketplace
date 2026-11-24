from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.certificate_key_pair_origin import CertificateKeyPairOriginOrStr
from .enums.export_option2 import ExportOption2OrStr
from .enums.extended_key_usage2 import ExtendedKeyUsage2OrStr
from .enums.key_algorithm import KeyAlgorithmOrStr
from .enums.key_usage2 import KeyUsage2OrStr
from .enums.managed_by import ManagedByOrStr
from .enums.renewal_eligibility import RenewalEligibilityOrStr
from .enums.status_aws_certificate_manager_certificates_api import StatusAwsCertificateManagerCertificatesApiOrStr
from .enums.type_aws_certificate_manager_certificates_api import TypeAwsCertificateManagerCertificatesApiOrStr


class CertificateSummary(SdkBaseModel):
    certificate_arn: Optional[str] = Field(default=UNSET, alias="CertificateArn")
    """Amazon Resource Name (ARN) of the certificate. This is of the form:
    arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more information about ARNs,
    see Amazon Resource Names (ARNs)."""

    domain_name: Optional[str] = Field(default=UNSET, alias="DomainName")
    """Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate."""

    subject_alternative_name_summaries: Optional[list[str]] = Field(
        default=UNSET, alias="SubjectAlternativeNameSummaries"
    )
    """One or more domain names (subject alternative names) included in the certificate. This list contains the domain
    names that are bound to the public key that is contained in the certificate. The subject alternative names include
    the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the
    website. When called by ListCertificates, this parameter will only return the first 100 subject alternative names
    included in the certificate. To display the full list of subject alternative names, use DescribeCertificate."""

    has_additional_subject_alternative_names: Optional[bool] = Field(
        default=UNSET, alias="HasAdditionalSubjectAlternativeNames"
    )
    """When called by ListCertificates, indicates whether the full list of subject alternative names has been included
    in the response. If false, the response includes all of the subject alternative names included in the certificate.
    If true, the response only includes the first 100 subject alternative names included in the certificate. To display
    the full list of subject alternative names, use DescribeCertificate."""

    status: Optional[StatusAwsCertificateManagerCertificatesApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it
    fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated
    attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or
    VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again.
    If validation succeeds, the certificate enters status ISSUED."""

    type_: Optional[TypeAwsCertificateManagerCertificatesApiOrStr] = Field(default=UNSET, alias="Type")
    """The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates
    that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported
    certificates. For more information about the differences between certificates that you import and those that ACM
    provides, see Importing Certificates in the Certificate Manager User Guide."""

    key_algorithm: Optional[KeyAlgorithmOrStr] = Field(default=UNSET, alias="KeyAlgorithm")
    """The algorithm that was used to generate the public-private key pair."""

    key_usages: Optional[list[KeyUsage2OrStr]] = Field(default=UNSET, alias="KeyUsages")
    """A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the
    public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT,
    NON_REPUDIATION, and more."""

    extended_key_usages: Optional[list[ExtendedKeyUsage2OrStr]] = Field(default=UNSET, alias="ExtendedKeyUsages")
    """Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the
    certificate public key can be used and consists of a name and an object identifier (OID)."""

    export_option: Optional[ExportOption2OrStr] = Field(default=UNSET, alias="ExportOption")
    """Indicates if export is enabled for the certificate."""

    in_use: Optional[bool] = Field(default=UNSET, alias="InUse")
    """Indicates whether the certificate is currently in use by any Amazon Web Services resources."""

    exported: Optional[bool] = Field(default=UNSET, alias="Exported")
    """Indicates whether the certificate has been exported."""

    renewal_eligibility: Optional[RenewalEligibilityOrStr] = Field(default=UNSET, alias="RenewalEligibility")
    """Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can
    be renewed with the RenewCertificate command."""

    not_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="NotBefore")
    """The time before which the certificate is not valid."""

    not_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="NotAfter")
    """The time after which the certificate is not valid."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreatedAt")
    """The time at which the certificate was requested."""

    issued_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="IssuedAt")
    """The time at which the certificate was issued. This value exists only when the certificate type is
    AMAZON_ISSUED."""

    imported_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ImportedAt")
    """The date and time when the certificate was imported. This value exists only when the certificate type is
    IMPORTED."""

    revoked_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="RevokedAt")
    """The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED."""

    managed_by: Optional[ManagedByOrStr] = Field(default=UNSET, alias="ManagedBy")
    """Identifies the Amazon Web Services service that manages the certificate issued by ACM."""

    certificate_key_pair_origin: Optional[CertificateKeyPairOriginOrStr] = Field(
        default=UNSET, alias="CertificateKeyPairOrigin"
    )
    """The origin of the certificate's key pair."""


class CertificateSummaryDict(TypedDict):
    certificate_arn: NotRequired[str]
    domain_name: NotRequired[str]
    subject_alternative_name_summaries: NotRequired[list[str]]
    has_additional_subject_alternative_names: NotRequired[bool]
    status: NotRequired[StatusAwsCertificateManagerCertificatesApiOrStr]
    type_: NotRequired[TypeAwsCertificateManagerCertificatesApiOrStr]
    key_algorithm: NotRequired[KeyAlgorithmOrStr]
    key_usages: NotRequired[list[KeyUsage2OrStr]]
    extended_key_usages: NotRequired[list[ExtendedKeyUsage2OrStr]]
    export_option: NotRequired[ExportOption2OrStr]
    in_use: NotRequired[bool]
    exported: NotRequired[bool]
    renewal_eligibility: NotRequired[RenewalEligibilityOrStr]
    not_before: NotRequired[RFC3339DateTime]
    not_after: NotRequired[RFC3339DateTime]
    created_at: NotRequired[RFC3339DateTime]
    issued_at: NotRequired[RFC3339DateTime]
    imported_at: NotRequired[RFC3339DateTime]
    revoked_at: NotRequired[RFC3339DateTime]
    managed_by: NotRequired[ManagedByOrStr]
    certificate_key_pair_origin: NotRequired[CertificateKeyPairOriginOrStr]
