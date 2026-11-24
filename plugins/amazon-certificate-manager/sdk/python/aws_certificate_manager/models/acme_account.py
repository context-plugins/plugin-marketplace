from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class AcmeAccount(SdkBaseModel):
    account_url: Optional[str] = Field(default=UNSET, alias="AccountUrl")
    """The URL of the ACME account."""

    public_key_thumbprint: Optional[str] = Field(default=UNSET, alias="PublicKeyThumbprint")
    """The thumbprint of the public key associated with the ACME account."""

    status: Optional[StatusOrStr] = Field(default=UNSET, alias="Status")
    """The status of the ACME account."""

    created_at: Optional[str] = Field(default=UNSET, alias="CreatedAt")
    """The time at which the ACME account was created."""

    acme_external_account_binding_arn: Optional[str] = Field(default=UNSET, alias="AcmeExternalAccountBindingArn")
    """The Amazon Resource Name (ARN) of the external account binding associated with this ACME account."""

    contacts: Optional[list[str]] = Field(default=UNSET, alias="Contacts")
    """The contact information for the ACME account."""


class AcmeAccountDict(TypedDict):
    account_url: NotRequired[str]
    public_key_thumbprint: NotRequired[str]
    status: NotRequired[StatusOrStr]
    created_at: NotRequired[str]
    acme_external_account_binding_arn: NotRequired[str]
    contacts: NotRequired[list[str]]
