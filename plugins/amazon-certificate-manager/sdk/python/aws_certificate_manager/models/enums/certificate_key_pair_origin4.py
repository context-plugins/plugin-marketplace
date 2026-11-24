from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CertificateKeyPairOrigin4(str, Enum):
    AWS_MANAGED = "AWS_MANAGED"
    ACME = "ACME"
    CUSTOMER_PROVIDED = "CUSTOMER_PROVIDED"

    __str__ = str.__str__


CertificateKeyPairOrigin4OrStr: TypeAlias = Annotated[
    CertificateKeyPairOrigin4 | str, open_enum_validator(CertificateKeyPairOrigin4)
]
