from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .links import Links, LinksDict


class SshKey(SdkBaseModel):
    """All Of object, ssh_key."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
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


class SshKeyDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    key: NotRequired[str]
    comment: NotRequired[str]
    label: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    last_used: NotRequired[RFC3339DateTime]
    links: NotRequired[LinksDict]
