from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class KeyUsage1(str, Enum):
    """Filter by key usage."""

    DIGITAL_SIGNATURE = "DIGITAL_SIGNATURE"
    NON_REPUDIATION = "NON_REPUDIATION"
    KEY_ENCIPHERMENT = "KEY_ENCIPHERMENT"
    DATA_ENCIPHERMENT = "DATA_ENCIPHERMENT"
    KEY_AGREEMENT = "KEY_AGREEMENT"
    CERTIFICATE_SIGNING = "CERTIFICATE_SIGNING"
    CRL_SIGNING = "CRL_SIGNING"
    ENCIPHER_ONLY = "ENCIPHER_ONLY"
    DECIPHER_ONLY = "DECIPHER_ONLY"
    ANY = "ANY"
    CUSTOM = "CUSTOM"

    __str__ = str.__str__


KeyUsage1OrStr: TypeAlias = Annotated[KeyUsage1 | str, open_enum_validator(KeyUsage1)]
