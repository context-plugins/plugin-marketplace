from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineSshPublicKey(SdkBaseModel):
    """All Of object, pipeline_ssh_public_key."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    key_type: Optional[str] = UNSET
    """The type of the public key."""

    key: Optional[str] = UNSET
    """The base64 encoded public key."""

    md5_fingerprint: Optional[str] = UNSET
    """The MD5 fingerprint of the public key."""

    sha256_fingerprint: Optional[str] = UNSET
    """The SHA-256 fingerprint of the public key."""


class PipelineSshPublicKeyDict(TypedDict):
    type_: NotRequired[str]
    key_type: NotRequired[str]
    key: NotRequired[str]
    md5_fingerprint: NotRequired[str]
    sha256_fingerprint: NotRequired[str]
