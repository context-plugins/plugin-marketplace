from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ssl_extensions_info import SslExtensionsInfo, SslExtensionsInfoDict
from .ssl_public_key_info import SslPublicKeyInfo, SslPublicKeyInfoDict
from .ssl_unit_info import SslUnitInfo, SslUnitInfoDict


class SslCertificate(SdkBaseModel):
    chain_order: Optional[str] = Field(default=UNSET, alias="chainOrder")
    authentication_type: Optional[str] = Field(default=UNSET, alias="authenticationType")
    validity_start_date: Optional[str] = Field(default=UNSET, alias="validityStartDate")
    validity_end_date: Optional[str] = Field(default=UNSET, alias="validityEndDate")
    serial_number: Optional[str] = Field(default=UNSET, alias="serialNumber")
    signature_algorithm: Optional[str] = Field(default=UNSET, alias="signatureAlgorithm")
    subject: Optional[SslUnitInfo] = UNSET
    issuer: Optional[SslUnitInfo] = UNSET
    public_key: Optional[SslPublicKeyInfo] = Field(default=UNSET, alias="publicKey")
    extensions: Optional[SslExtensionsInfo] = UNSET
    pem_raw: Optional[str] = Field(default=UNSET, alias="pemRaw")


class SslCertificateDict(TypedDict):
    chain_order: NotRequired[str]
    authentication_type: NotRequired[str]
    validity_start_date: NotRequired[str]
    validity_end_date: NotRequired[str]
    serial_number: NotRequired[str]
    signature_algorithm: NotRequired[str]
    subject: NotRequired[SslUnitInfoDict]
    issuer: NotRequired[SslUnitInfoDict]
    public_key: NotRequired[SslPublicKeyInfoDict]
    extensions: NotRequired[SslExtensionsInfoDict]
    pem_raw: NotRequired[str]
