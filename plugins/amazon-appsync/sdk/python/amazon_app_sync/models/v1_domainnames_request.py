from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1DomainnamesRequest(SdkBaseModel):
    domain_name: str = Field(alias="domainName")
    """The domain name."""

    certificate_arn: str = Field(alias="certificateArn")
    """The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an
    Identity and Access Management (IAM) server certificate."""

    description: Optional[str] = UNSET
    """A description of the DomainName."""

    tags: Optional[dict[str, str]] = UNSET


class V1DomainnamesRequestDict(TypedDict):
    domain_name: str
    certificate_arn: str
    description: NotRequired[str]
    tags: NotRequired[dict[str, str]]
