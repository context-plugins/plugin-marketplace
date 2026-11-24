from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CertificateKeyPairOrigin1(str, Enum):
    """Filter by certificate key pair origin."""

    AWS_MANAGED = "AWS_MANAGED"
    ACME = "ACME"
    CUSTOMER_PROVIDED = "CUSTOMER_PROVIDED"

    __str__ = str.__str__


CertificateKeyPairOrigin1OrStr: TypeAlias = Annotated[
    CertificateKeyPairOrigin1 | str, open_enum_validator(CertificateKeyPairOrigin1)
]
