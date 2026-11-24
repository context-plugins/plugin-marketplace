from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EncryptionType(str, Enum):
    """Optional. Encryption type for the region. If the encryption type is CMEK, the cmek_key_name must be provided. If
    no encryption type is provided, GMEK will be used."""

    ENCRYPTION_TYPE_UNSPECIFIED = "ENCRYPTION_TYPE_UNSPECIFIED"
    GMEK = "GMEK"
    CMEK = "CMEK"

    __str__ = str.__str__


EncryptionTypeOrStr: TypeAlias = Annotated[EncryptionType | str, open_enum_validator(EncryptionType)]
