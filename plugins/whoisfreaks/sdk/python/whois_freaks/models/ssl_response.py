from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ssl_certificate import SslCertificate, SslCertificateDict


class SslResponse(SdkBaseModel):
    domain_name: Optional[str] = Field(default=UNSET, alias="domainName")
    query_time: Optional[str] = Field(default=UNSET, alias="queryTime")
    ssl_certificates: Optional[list[SslCertificate]] = Field(default=UNSET, alias="sslCertificates")
    ssl_raw: Optional[str] = Field(default=UNSET, alias="sslRaw")


class SslResponseDict(TypedDict):
    domain_name: NotRequired[str]
    query_time: NotRequired[str]
    ssl_certificates: NotRequired[list[SslCertificateDict]]
    ssl_raw: NotRequired[str]
