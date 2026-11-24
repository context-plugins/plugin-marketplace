from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.name1 import Name1OrStr


class ExtendedKeyUsage(SdkBaseModel):
    name: Optional[Name1OrStr] = Field(default=UNSET, alias="Name")
    """The name of an Extended Key Usage value."""

    oid: Optional[str] = Field(default=UNSET, alias="OID")
    """An object identifier (OID) for the extension value. OIDs are strings of numbers separated by periods. The
    following OIDs are defined in RFC 3280 and RFC 5280. 1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION)
    1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION) 1.3.6.1.5.5.7.3.3 (CODE_SIGNING) 1.3.6.1.5.5.7.3.4
    (EMAIL_PROTECTION) 1.3.6.1.5.5.7.3.8 (TIME_STAMPING) 1.3.6.1.5.5.7.3.9 (OCSP_SIGNING) 1.3.6.1.5.5.7.3.5
    (IPSEC_END_SYSTEM) 1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL) 1.3.6.1.5.5.7.3.7 (IPSEC_USER)"""


class ExtendedKeyUsageDict(TypedDict):
    name: NotRequired[Name1OrStr]
    oid: NotRequired[str]
