from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ValidationStatusAwsCertificateManagerOperationsApi(str, Enum):
    """The validation status for this domain. Valid values: PENDING_VALIDATION – The domain is waiting for validation to
    complete. SUCCESS – Validation completed successfully. FAILED – Validation failed."""

    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

    __str__ = str.__str__


ValidationStatusAwsCertificateManagerOperationsApiOrStr: TypeAlias = Annotated[
    ValidationStatusAwsCertificateManagerOperationsApi | str,
    open_enum_validator(ValidationStatusAwsCertificateManagerOperationsApi),
]
