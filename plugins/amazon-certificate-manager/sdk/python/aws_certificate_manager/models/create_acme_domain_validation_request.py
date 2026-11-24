from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .prevalidation_options import PrevalidationOptions, PrevalidationOptionsDict
from .tag_model import TagModel, TagModelDict


class CreateAcmeDomainValidationRequest(SdkBaseModel):
    idempotency_token: Optional[str] = Field(default=UNSET, alias="IdempotencyToken")
    """A unique, case-sensitive identifier to ensure idempotency of the request."""

    acme_endpoint_arn: str = Field(alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint."""

    domain_name: str = Field(alias="DomainName")
    """The domain name to validate."""

    prevalidation_options: PrevalidationOptions = Field(alias="PrevalidationOptions")
    """Exactly one member is set."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """One or more tags to associate with the domain validation."""


class CreateAcmeDomainValidationRequestDict(TypedDict):
    idempotency_token: NotRequired[str]
    acme_endpoint_arn: str
    domain_name: str
    prevalidation_options: PrevalidationOptionsDict
    tags: NotRequired[list[TagModelDict]]
