from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CertificateKeyPairOrigin(str, Enum):
    """The origin of the certificate's key pair."""

    AWS_MANAGED = "AWS_MANAGED"
    ACME = "ACME"
    CUSTOMER_PROVIDED = "CUSTOMER_PROVIDED"

    __str__ = str.__str__


CertificateKeyPairOriginOrStr: TypeAlias = Annotated[
    CertificateKeyPairOrigin | str, open_enum_validator(CertificateKeyPairOrigin)
]
