from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KeyAlgorithm1(str, Enum):
    """Filter by key algorithm."""

    RSA_1024 = "RSA_1024"
    RSA_2048 = "RSA_2048"
    RSA_3072 = "RSA_3072"
    RSA_4096 = "RSA_4096"
    EC_PRIME256V1 = "EC_prime256v1"
    EC_SECP384R1 = "EC_secp384r1"
    EC_SECP521R1 = "EC_secp521r1"

    __str__ = str.__str__


KeyAlgorithm1OrStr: TypeAlias = Annotated[KeyAlgorithm1 | str, open_enum_validator(KeyAlgorithm1)]
