from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AllowedKeyAlgorithm(str, Enum):
    RSA_2048 = "RSA_2048"
    EC_PRIME256V1 = "EC_prime256v1"
    EC_SECP384R1 = "EC_secp384r1"

    __str__ = str.__str__


AllowedKeyAlgorithmOrStr: TypeAlias = Annotated[AllowedKeyAlgorithm | str, open_enum_validator(AllowedKeyAlgorithm)]
