from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DomainNameConfig(SdkBaseModel):
    domain_name: Optional[str] = Field(default=UNSET, alias="domainName")
    """The domain name."""

    description: Optional[str] = UNSET
    """A description of the DomainName configuration."""

    certificate_arn: Optional[str] = Field(default=UNSET, alias="certificateArn")
    """The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an
    Identity and Access Management (IAM) server certificate."""

    appsync_domain_name: Optional[str] = Field(default=UNSET, alias="appsyncDomainName")
    """The domain name that AppSync provides."""

    hosted_zone_id: Optional[str] = Field(default=UNSET, alias="hostedZoneId")
    """The ID of your Amazon Route 53 hosted zone."""

    tags: Optional[dict[str, str]] = UNSET
    domain_name_arn: Optional[str] = Field(default=UNSET, alias="domainNameArn")
    """The Amazon Resource Name (ARN) of the domain name."""


class DomainNameConfigDict(TypedDict):
    domain_name: NotRequired[str]
    description: NotRequired[str]
    certificate_arn: NotRequired[str]
    appsync_domain_name: NotRequired[str]
    hosted_zone_id: NotRequired[str]
    tags: NotRequired[dict[str, str]]
    domain_name_arn: NotRequired[str]
