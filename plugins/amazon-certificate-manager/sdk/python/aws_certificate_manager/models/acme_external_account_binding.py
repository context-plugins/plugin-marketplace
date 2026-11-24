from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AcmeExternalAccountBinding(SdkBaseModel):
    acme_external_account_binding_arn: Optional[str] = Field(default=UNSET, alias="AcmeExternalAccountBindingArn")
    """The Amazon Resource Name (ARN) of the ACME external account binding."""

    acme_endpoint_arn: Optional[str] = Field(default=UNSET, alias="AcmeEndpointArn")
    """The Amazon Resource Name (ARN) of the ACME endpoint."""

    role_arn: Optional[str] = Field(default=UNSET, alias="RoleArn")
    """The Amazon Resource Name (ARN) of the IAM role associated with the external account binding."""

    expires_at: Optional[str] = Field(default=UNSET, alias="ExpiresAt")
    """The time at which the external account binding expires."""

    revoked_at: Optional[str] = Field(default=UNSET, alias="RevokedAt")
    """The time at which the external account binding was revoked."""

    last_used_at: Optional[str] = Field(default=UNSET, alias="LastUsedAt")
    """The time at which the external account binding was last used."""

    created_at: Optional[str] = Field(default=UNSET, alias="CreatedAt")
    """The time at which the external account binding was created."""

    updated_at: Optional[str] = Field(default=UNSET, alias="UpdatedAt")
    """The time at which the external account binding was last updated."""


class AcmeExternalAccountBindingDict(TypedDict):
    acme_external_account_binding_arn: NotRequired[str]
    acme_endpoint_arn: NotRequired[str]
    role_arn: NotRequired[str]
    expires_at: NotRequired[str]
    revoked_at: NotRequired[str]
    last_used_at: NotRequired[str]
    created_at: NotRequired[str]
    updated_at: NotRequired[str]
