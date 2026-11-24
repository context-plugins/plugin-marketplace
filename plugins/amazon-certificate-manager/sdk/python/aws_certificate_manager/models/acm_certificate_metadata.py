from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.certificate_key_pair_origin import CertificateKeyPairOriginOrStr
from .enums.export_option import ExportOptionOrStr
from .enums.managed_by import ManagedByOrStr
from .enums.renewal_eligibility import RenewalEligibilityOrStr
from .enums.renewal_status import RenewalStatusOrStr
from .enums.status_aws_certificate_manager_certificates_api import StatusAwsCertificateManagerCertificatesApiOrStr
from .enums.type_aws_certificate_manager_certificates_api import TypeAwsCertificateManagerCertificatesApiOrStr
from .enums.validation_method import ValidationMethodOrStr


class AcmCertificateMetadata(SdkBaseModel):
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreatedAt")
    """The time at which the certificate was requested."""

    exported: Optional[bool] = Field(default=UNSET, alias="Exported")
    """Indicates whether the certificate has been exported."""

    imported_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="ImportedAt")
    """The date and time when the certificate was imported. This value exists only when the certificate type is
    IMPORTED."""

    in_use: Optional[bool] = Field(default=UNSET, alias="InUse")
    """Indicates whether the certificate is currently in use by an Amazon Web Services service."""

    issued_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="IssuedAt")
    """The time at which the certificate was issued. This value exists only when the certificate type is
    AMAZON_ISSUED."""

    renewal_eligibility: Optional[RenewalEligibilityOrStr] = Field(default=UNSET, alias="RenewalEligibility")
    """Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can
    be renewed with the RenewCertificate command."""

    revoked_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="RevokedAt")
    """The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED."""

    status: Optional[StatusAwsCertificateManagerCertificatesApiOrStr] = Field(default=UNSET, alias="Status")
    """The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it
    fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated
    attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or
    VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again.
    If validation succeeds, the certificate enters status ISSUED."""

    renewal_status: Optional[RenewalStatusOrStr] = Field(default=UNSET, alias="RenewalStatus")
    """The renewal status of the certificate."""

    type_: Optional[TypeAwsCertificateManagerCertificatesApiOrStr] = Field(default=UNSET, alias="Type")
    """The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates
    that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported
    certificates. For more information about the differences between certificates that you import and those that ACM
    provides, see Importing Certificates in the Certificate Manager User Guide."""

    export_option: Optional[ExportOptionOrStr] = Field(default=UNSET, alias="ExportOption")
    """Indicates whether the certificate can be exported."""

    managed_by: Optional[ManagedByOrStr] = Field(default=UNSET, alias="ManagedBy")
    """Identifies the Amazon Web Services service that manages the certificate issued by ACM."""

    validation_method: Optional[ValidationMethodOrStr] = Field(default=UNSET, alias="ValidationMethod")
    """Specifies the domain validation method."""

    certificate_key_pair_origin: Optional[CertificateKeyPairOriginOrStr] = Field(
        default=UNSET, alias="CertificateKeyPairOrigin"
    )
    """The origin of the certificate's key pair."""

    acme_endpoint_arn: Optional[str] = Field(default=UNSET, alias="AcmeEndpointArn")
    """The ARN of the ACME endpoint used to issue the certificate."""

    acme_account_id: Optional[str] = Field(default=UNSET, alias="AcmeAccountId")
    """The ACME account identifier associated with the certificate."""


class AcmCertificateMetadataDict(TypedDict):
    created_at: NotRequired[RFC3339DateTime]
    exported: NotRequired[bool]
    imported_at: NotRequired[RFC3339DateTime]
    in_use: NotRequired[bool]
    issued_at: NotRequired[RFC3339DateTime]
    renewal_eligibility: NotRequired[RenewalEligibilityOrStr]
    revoked_at: NotRequired[RFC3339DateTime]
    status: NotRequired[StatusAwsCertificateManagerCertificatesApiOrStr]
    renewal_status: NotRequired[RenewalStatusOrStr]
    type_: NotRequired[TypeAwsCertificateManagerCertificatesApiOrStr]
    export_option: NotRequired[ExportOptionOrStr]
    managed_by: NotRequired[ManagedByOrStr]
    validation_method: NotRequired[ValidationMethodOrStr]
    certificate_key_pair_origin: NotRequired[CertificateKeyPairOriginOrStr]
    acme_endpoint_arn: NotRequired[str]
    acme_account_id: NotRequired[str]
