from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeJidQualifyApi(str, Enum):
    TOR = "tor"
    HOSTING_OR_VPN = "hosting_or_vpn"
    OTHER = "other"
    UNKNOWN = "unknown"

    __str__ = str.__str__


TypeJidQualifyApiOrStr: TypeAlias = Annotated[TypeJidQualifyApi | str, open_enum_validator(TypeJidQualifyApi)]
