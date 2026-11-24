from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListCertificateDomainValidationsRequest(SdkBaseModel):
    certificate_arn: str = Field(alias="CertificateArn")
    """The Amazon Resource Name (ARN) of the certificate for which to list domain validation summaries."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """A token returned by a previous call to ListCertificateDomainValidations. If the number of results exceeds
    MaxItems, use this token to retrieve the next page of results."""

    max_items: Optional[int] = Field(default=UNSET, alias="MaxItems")
    """The maximum number of domain validation summaries to return. If you don't specify a value, the default is
    1000."""


class ListCertificateDomainValidationsRequestDict(TypedDict):
    certificate_arn: str
    next_token: NotRequired[str]
    max_items: NotRequired[int]
