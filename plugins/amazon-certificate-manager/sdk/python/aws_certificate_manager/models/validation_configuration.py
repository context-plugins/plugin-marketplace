from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.validation_method1_aws_certificate_manager_operations_api import (
    ValidationMethod1AwsCertificateManagerOperationsApiOrStr,
)
from .enums.validation_status_aws_certificate_manager_operations_api import (
    ValidationStatusAwsCertificateManagerOperationsApiOrStr,
)
from .validation_challenge import ValidationChallenge, ValidationChallengeDict


class ValidationConfiguration(SdkBaseModel):
    validation_method: Optional[ValidationMethod1AwsCertificateManagerOperationsApiOrStr] = Field(
        default=UNSET, alias="ValidationMethod"
    )
    """The validation method for this configuration. Valid values: DNS – Validation using a CNAME record added to your
    DNS configuration. EMAIL – Validation using an approval email sent to domain contacts. HTTP – Validation using an
    HTTP resource placed on your web server."""

    validation_challenge: Optional[ValidationChallenge] = Field(default=UNSET, alias="ValidationChallenge")
    """Exactly one member is set."""

    validation_status: Optional[ValidationStatusAwsCertificateManagerOperationsApiOrStr] = Field(
        default=UNSET, alias="ValidationStatus"
    )
    """The validation status for this domain. Valid values: PENDING_VALIDATION – The domain is waiting for validation to
    complete. SUCCESS – Validation completed successfully. FAILED – Validation failed."""


class ValidationConfigurationDict(TypedDict):
    validation_method: NotRequired[ValidationMethod1AwsCertificateManagerOperationsApiOrStr]
    validation_challenge: NotRequired[ValidationChallengeDict]
    validation_status: NotRequired[ValidationStatusAwsCertificateManagerOperationsApiOrStr]
