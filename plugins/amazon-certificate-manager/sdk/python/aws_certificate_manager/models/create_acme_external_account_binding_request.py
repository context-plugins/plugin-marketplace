from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .expiration import Expiration, ExpirationDict
from .tag_model import TagModel, TagModelDict


class CreateAcmeExternalAccountBindingRequest(SdkBaseModel):
    idempotency_token: Optional[str] = Field(default=UNSET, alias="IdempotencyToken")
    """A unique, case-sensitive identifier to ensure idempotency of the request."""

    acme_endpoint_arn: str = Field(alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint."""

    role_arn: str = Field(alias="RoleArn")
    """The Amazon Resource Name (ARN) of the IAM role to associate with the external account binding."""

    expiration: Optional[Expiration] = Field(default=UNSET, alias="Expiration")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """One or more tags to associate with the external account binding."""


class CreateAcmeExternalAccountBindingRequestDict(TypedDict):
    idempotency_token: NotRequired[str]
    acme_endpoint_arn: str
    role_arn: str
    expiration: NotRequired[ExpirationDict]
    tags: NotRequired[list[TagModelDict]]
