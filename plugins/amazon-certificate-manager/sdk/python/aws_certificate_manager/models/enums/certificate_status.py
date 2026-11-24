from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CertificateStatus(str, Enum):
    PENDING_VALIDATION = "PENDING_VALIDATION"
    ISSUED = "ISSUED"
    INACTIVE = "INACTIVE"
    EXPIRED = "EXPIRED"
    VALIDATION_TIMED_OUT = "VALIDATION_TIMED_OUT"
    REVOKED = "REVOKED"
    FAILED = "FAILED"

    __str__ = str.__str__


CertificateStatusOrStr: TypeAlias = Annotated[CertificateStatus | str, open_enum_validator(CertificateStatus)]
