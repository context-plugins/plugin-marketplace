from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.certificate_key_pair_origin1 import CertificateKeyPairOrigin1OrStr
from .enums.export_option1 import ExportOption1OrStr
from .enums.managed_by1 import ManagedBy1OrStr
from .enums.renewal_status1 import RenewalStatus1OrStr
from .enums.status1 import Status1OrStr
from .enums.type1 import Type1OrStr
from .enums.validation_method1 import ValidationMethod1OrStr


class AcmCertificateMetadataFilter(SdkBaseModel):
    """Exactly one member is set."""

    status: Optional[Status1OrStr] = Field(default=UNSET, alias="Status")
    """Filter by certificate status."""

    renewal_status: Optional[RenewalStatus1OrStr] = Field(default=UNSET, alias="RenewalStatus")
    """Filter by certificate renewal status."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="Type")
    """Filter by certificate type."""

    in_use: Optional[bool] = Field(default=UNSET, alias="InUse")
    """Filter by whether the certificate is in use."""

    exported: Optional[bool] = Field(default=UNSET, alias="Exported")
    """Filter by whether the certificate has been exported."""

    export_option: Optional[ExportOption1OrStr] = Field(default=UNSET, alias="ExportOption")
    """Filter by certificate export option."""

    managed_by: Optional[ManagedBy1OrStr] = Field(default=UNSET, alias="ManagedBy")
    """Filter by the entity that manages the certificate."""

    validation_method: Optional[ValidationMethod1OrStr] = Field(default=UNSET, alias="ValidationMethod")
    """Filter by validation method."""

    certificate_key_pair_origin: Optional[CertificateKeyPairOrigin1OrStr] = Field(
        default=UNSET, alias="CertificateKeyPairOrigin"
    )
    """Filter by certificate key pair origin."""

    acme_endpoint_arn: Optional[str] = Field(default=UNSET, alias="AcmeEndpointArn")
    """Filter by ACME endpoint ARN."""

    acme_account_id: Optional[str] = Field(default=UNSET, alias="AcmeAccountId")
    """Filter by ACME account identifier."""


class AcmCertificateMetadataFilterDict(TypedDict):
    status: NotRequired[Status1OrStr]
    renewal_status: NotRequired[RenewalStatus1OrStr]
    type_: NotRequired[Type1OrStr]
    in_use: NotRequired[bool]
    exported: NotRequired[bool]
    export_option: NotRequired[ExportOption1OrStr]
    managed_by: NotRequired[ManagedBy1OrStr]
    validation_method: NotRequired[ValidationMethod1OrStr]
    certificate_key_pair_origin: NotRequired[CertificateKeyPairOrigin1OrStr]
    acme_endpoint_arn: NotRequired[str]
    acme_account_id: NotRequired[str]
