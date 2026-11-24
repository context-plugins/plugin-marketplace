from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusAwsCertificateManagerCertificatesApi(str, Enum):
    """The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it
    fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated
    attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or
    VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again.
    If validation succeeds, the certificate enters status ISSUED."""

    PENDING_VALIDATION = "PENDING_VALIDATION"
    ISSUED = "ISSUED"
    INACTIVE = "INACTIVE"
    EXPIRED = "EXPIRED"
    VALIDATION_TIMED_OUT = "VALIDATION_TIMED_OUT"
    REVOKED = "REVOKED"
    FAILED = "FAILED"

    __str__ = str.__str__


StatusAwsCertificateManagerCertificatesApiOrStr: TypeAlias = Annotated[
    StatusAwsCertificateManagerCertificatesApi | str, open_enum_validator(StatusAwsCertificateManagerCertificatesApi)
]
