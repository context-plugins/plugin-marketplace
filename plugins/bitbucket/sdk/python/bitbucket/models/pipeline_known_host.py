from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pipeline_ssh_public_key2 import PipelineSshPublicKey2, PipelineSshPublicKey2Dict


class PipelineKnownHost(SdkBaseModel):
    """All Of object, pipeline_known_host."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID identifying the known host."""

    hostname: Optional[str] = UNSET
    """The hostname of the known host."""

    public_key: Optional[PipelineSshPublicKey2] = UNSET
    """The public key of the known host."""


class PipelineKnownHostDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    hostname: NotRequired[str]
    public_key: NotRequired[PipelineSshPublicKey2Dict]
