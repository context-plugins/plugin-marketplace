from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .account import Account, AccountDict
from .links import Links, LinksDict


class SshAccountKey(SdkBaseModel):
    """All Of ssh_key, object, ssh_account_key."""

    uuid: Optional[str] = UNSET
    """The SSH key's immutable ID."""

    key: Optional[str] = UNSET
    """The SSH public key value in OpenSSH format."""

    comment: Optional[str] = UNSET
    """The comment parsed from the SSH key (if present)"""

    label: Optional[str] = UNSET
    """The user-defined label for the SSH key"""

    created_on: Optional[RFC3339DateTime] = UNSET
    last_used: Optional[RFC3339DateTime] = UNSET
    links: Optional[Links] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    owner: Optional[Account] = UNSET
    expires_on: Optional[RFC3339DateTime] = UNSET
    fingerprint: Optional[str] = UNSET
    """The SSH key fingerprint in SHA-256 format."""


class SshAccountKeyDict(TypedDict):
    uuid: NotRequired[str]
    key: NotRequired[str]
    comment: NotRequired[str]
    label: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    last_used: NotRequired[RFC3339DateTime]
    links: NotRequired[LinksDict]
    type_: NotRequired[str]
    owner: NotRequired[AccountDict]
    expires_on: NotRequired[RFC3339DateTime]
    fingerprint: NotRequired[str]
