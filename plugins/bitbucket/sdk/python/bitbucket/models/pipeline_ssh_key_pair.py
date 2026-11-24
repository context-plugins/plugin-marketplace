from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PipelineSshKeyPair(SdkBaseModel):
    """All Of object, pipeline_ssh_key_pair."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    private_key: Optional[str] = UNSET
    """The SSH private key. This value will be empty when retrieving the SSH key pair."""

    public_key: Optional[str] = UNSET
    """The SSH public key."""


class PipelineSshKeyPairDict(TypedDict):
    type_: NotRequired[str]
    private_key: NotRequired[str]
    public_key: NotRequired[str]
