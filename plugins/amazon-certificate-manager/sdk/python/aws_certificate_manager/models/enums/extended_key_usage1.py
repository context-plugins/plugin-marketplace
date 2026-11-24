from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ExtendedKeyUsage1(str, Enum):
    """Filter by extended key usage."""

    TLS_WEB_SERVER_AUTHENTICATION = "TLS_WEB_SERVER_AUTHENTICATION"
    TLS_WEB_CLIENT_AUTHENTICATION = "TLS_WEB_CLIENT_AUTHENTICATION"
    CODE_SIGNING = "CODE_SIGNING"
    EMAIL_PROTECTION = "EMAIL_PROTECTION"
    TIME_STAMPING = "TIME_STAMPING"
    OCSP_SIGNING = "OCSP_SIGNING"
    IPSEC_END_SYSTEM = "IPSEC_END_SYSTEM"
    IPSEC_TUNNEL = "IPSEC_TUNNEL"
    IPSEC_USER = "IPSEC_USER"
    ANY = "ANY"
    NONE = "NONE"
    CUSTOM = "CUSTOM"

    __str__ = str.__str__


ExtendedKeyUsage1OrStr: TypeAlias = Annotated[ExtendedKeyUsage1 | str, open_enum_validator(ExtendedKeyUsage1)]
