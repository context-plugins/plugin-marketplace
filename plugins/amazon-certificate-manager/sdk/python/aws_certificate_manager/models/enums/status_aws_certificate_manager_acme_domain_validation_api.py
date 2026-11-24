from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsCertificateManagerAcmeDomainValidationApi(str, Enum):
    """The status of the domain validation."""

    VALIDATING = "VALIDATING"
    VALID = "VALID"
    INVALID = "INVALID"
    DELETING = "DELETING"

    __str__ = str.__str__


StatusAwsCertificateManagerAcmeDomainValidationApiOrStr: TypeAlias = Annotated[
    StatusAwsCertificateManagerAcmeDomainValidationApi | str,
    open_enum_validator(StatusAwsCertificateManagerAcmeDomainValidationApi),
]
