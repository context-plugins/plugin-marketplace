from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InstanceReference(SdkBaseModel):
    """A reference to a Compute Engine instance."""

    instance_name: Optional[str] = Field(default=UNSET, alias="instanceName")
    """The user-friendly name of the Compute Engine instance."""

    instance_id: Optional[str] = Field(default=UNSET, alias="instanceId")
    """The unique identifier of the Compute Engine instance."""

    public_ecies_key: Optional[str] = Field(default=UNSET, alias="publicEciesKey")
    """The public ECIES key used for sharing data with this instance."""

    public_key: Optional[str] = Field(default=UNSET, alias="publicKey")
    """The public RSA key used for sharing data with this instance."""


class InstanceReferenceDict(TypedDict):
    instance_name: NotRequired[str]
    instance_id: NotRequired[str]
    public_ecies_key: NotRequired[str]
    public_key: NotRequired[str]
