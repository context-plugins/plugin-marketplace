from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .certificate_options import CertificateOptions, CertificateOptionsDict
from .domain_validation import DomainValidation, DomainValidationDict
from .enums.certificate_key_pair_origin import CertificateKeyPairOriginOrStr
from .enums.failure_reason import FailureReasonOrStr
from .enums.key_algorithm import KeyAlgorithmOrStr
from .enums.managed_by import ManagedByOrStr
from .enums.renewal_eligibility import RenewalEligibilityOrStr
from .enums.revocation_reason import RevocationReasonOrStr
from .enums.status_aws_certificate_manager_certificates_api import StatusAwsCertificateManagerCertificatesApiOrStr
from .enums.type_aws_certificate_manager_certificates_api import TypeAwsCertificateManagerCertificatesApiOrStr
from .extended_key_usage import ExtendedKeyUsage, ExtendedKeyUsageDict
from .key_usage import KeyUsage, KeyUsageDict
from .renewal_summary import RenewalSummary, RenewalSummaryDict
from .update_summary import UpdateSummary, UpdateSummaryDict


class CertificateDetail(SdkBaseModel):
    certificate_arn: Optional[str] = Field(default=UNSET, alias="CertificateArn")
    """The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see Amazon Resource Names
    (ARNs) in the Amazon Web Services General Reference."""

    domain_name: Optional[str] = Field(default=UNSET, alias="DomainName")
    """The fully qualified domain name for the certificate, such as www.example.com or example.com."""

    subject_alternative_names: Optional[list[str]] = Field(default=UNSET, alias="SubjectAlternativeNames")
    """One or more domain names (subject alternative names) included in the certificate. This list contains the domain
    names that are bound to the public key that is contained in the certificate. The subject alternative names include
    the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the
    website."""

    managed_by: Optional[ManagedByOrStr] = Field(default=UNSET, alias="ManagedBy")
    """Identifies the Amazon Web Services service that manages the certificate issued by ACM."""

    domain_validation_options: Optional[list[DomainValidation]] = Field(default=UNSET, alias="DomainValidationOptions")
    """Contains information about the initial validation of each domain name that occurs as a result of the
    RequestCertificate request. This field exists only when the certificate type is AMAZON_ISSUED."""

    serial: Optional[str] = Field(default=UNSET, alias="Serial")
    """The serial number of the certificate."""

    subject: Optional[str] = Field(default=UNSET, alias="Subject")
    """The name of the entity that is associated with the public key contained in the certificate."""

    issuer: Optional[str] = Field(default=UNSET, alias="Issuer")
    """The name of the certificate authority that issued and signed the certificate."""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreatedAt")
    """The time at which the certificate was requested."""

    issued_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="IssuedAt")
    """The time at which the certificate was issued. This value exists only when the certificate type is
    AMAZON_ISSUED."""

    imported_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ImportedAt")
    """The date and time when the certificate was imported. This value exists only when the certificate type is
    IMPORTED."""

    status: Optional[StatusAwsCertificateManagerCertificatesApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it
    fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated
    attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or
    VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again.
    If validation succeeds, the certificate enters status ISSUED."""

    revoked_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="RevokedAt")
    """The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED."""

    revocation_reason: Optional[RevocationReasonOrStr] = Field(default=UNSET, alias="RevocationReason")
    """The reason the certificate was revoked. This value exists only when the certificate status is REVOKED."""

    not_before: Optional[RFC3339DateTime] = Field(default=UNSET, alias="NotBefore")
    """The time before which the certificate is not valid."""

    not_after: Optional[RFC3339DateTime] = Field(default=UNSET, alias="NotAfter")
    """The time after which the certificate is not valid."""

    key_algorithm: Optional[KeyAlgorithmOrStr] = Field(default=UNSET, alias="KeyAlgorithm")
    """The algorithm that was used to generate the public-private key pair."""

    signature_algorithm: Optional[str] = Field(default=UNSET, alias="SignatureAlgorithm")
    """The algorithm that was used to sign the certificate."""

    in_use_by: Optional[list[str]] = Field(default=UNSET, alias="InUseBy")
    """A list of ARNs for the Amazon Web Services resources that are using the certificate. A certificate can be used by
    multiple Amazon Web Services resources."""

    failure_reason: Optional[FailureReasonOrStr] = Field(default=UNSET, alias="FailureReason")
    """The reason the certificate request failed. This value exists only when the certificate status is FAILED. For more
    information, see Certificate Request Failed in the Certificate Manager User Guide."""

    type_: Optional[TypeAwsCertificateManagerCertificatesApiOrStr] = Field(default=UNSET, alias="Type")
    """The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates
    that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported
    certificates. For more information about the differences between certificates that you import and those that ACM
    provides, see Importing Certificates in the Certificate Manager User Guide."""

    renewal_summary: Optional[RenewalSummary] = Field(default=UNSET, alias="RenewalSummary")
    key_usages: Optional[list[KeyUsage]] = Field(default=UNSET, alias="KeyUsages")
    """A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the
    public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT,
    NON_REPUDIATION, and more."""

    extended_key_usages: Optional[list[ExtendedKeyUsage]] = Field(default=UNSET, alias="ExtendedKeyUsages")
    """Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the
    certificate public key can be used and consists of a name and an object identifier (OID)."""

    certificate_authority_arn: Optional[str] = Field(default=UNSET, alias="CertificateAuthorityArn")
    """The Amazon Resource Name (ARN) of the private certificate authority (CA) that issued the certificate. This has
    the following format: arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012"""

    renewal_eligibility: Optional[RenewalEligibilityOrStr] = Field(default=UNSET, alias="RenewalEligibility")
    """Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can
    be renewed with the RenewCertificate command."""

    options: Optional[CertificateOptions] = Field(default=UNSET, alias="Options")
    update_summary: Optional[UpdateSummary] = Field(default=UNSET, alias="UpdateSummary")
    certificate_key_pair_origin: Optional[CertificateKeyPairOriginOrStr] = Field(
        default=UNSET, alias="CertificateKeyPairOrigin"
    )
    """The origin of the certificate's key pair."""

    acme_endpoint_arn: Optional[str] = Field(default=UNSET, alias="AcmeEndpointArn")
    """The ARN of the ACME endpoint used to issue the certificate."""

    acme_account_id: Optional[str] = Field(default=UNSET, alias="AcmeAccountId")
    """The ACME account identifier associated with the certificate."""


class CertificateDetailDict(TypedDict):
    certificate_arn: NotRequired[str]
    domain_name: NotRequired[str]
    subject_alternative_names: NotRequired[list[str]]
    managed_by: NotRequired[ManagedByOrStr]
    domain_validation_options: NotRequired[list[DomainValidationDict]]
    serial: NotRequired[str]
    subject: NotRequired[str]
    issuer: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    issued_at: NotRequired[RFC3339DateTime]
    imported_at: NotRequired[RFC3339DateTime]
    status: NotRequired[StatusAwsCertificateManagerCertificatesApiOrStr]
    revoked_at: NotRequired[RFC3339DateTime]
    revocation_reason: NotRequired[RevocationReasonOrStr]
    not_before: NotRequired[RFC3339DateTime]
    not_after: NotRequired[RFC3339DateTime]
    key_algorithm: NotRequired[KeyAlgorithmOrStr]
    signature_algorithm: NotRequired[str]
    in_use_by: NotRequired[list[str]]
    failure_reason: NotRequired[FailureReasonOrStr]
    type_: NotRequired[TypeAwsCertificateManagerCertificatesApiOrStr]
    renewal_summary: NotRequired[RenewalSummaryDict]
    key_usages: NotRequired[list[KeyUsageDict]]
    extended_key_usages: NotRequired[list[ExtendedKeyUsageDict]]
    certificate_authority_arn: NotRequired[str]
    renewal_eligibility: NotRequired[RenewalEligibilityOrStr]
    options: NotRequired[CertificateOptionsDict]
    update_summary: NotRequired[UpdateSummaryDict]
    certificate_key_pair_origin: NotRequired[CertificateKeyPairOriginOrStr]
    acme_endpoint_arn: NotRequired[str]
    acme_account_id: NotRequired[str]
