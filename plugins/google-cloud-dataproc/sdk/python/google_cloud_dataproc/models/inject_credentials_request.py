from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InjectCredentialsRequest(SdkBaseModel):
    """A request to inject credentials into a cluster."""

    cluster_uuid: Optional[str] = Field(default=UNSET, alias="clusterUuid")
    """Required. The cluster UUID."""

    credentials_ciphertext: Optional[str] = Field(default=UNSET, alias="credentialsCiphertext")
    """Required. The encrypted credentials being injected in to the cluster.The client is responsible for encrypting the
    credentials in a way that is supported by the cluster.A wrapped value is used here so that the actual contents of
    the encrypted credentials are not written to audit logs."""


class InjectCredentialsRequestDict(TypedDict):
    cluster_uuid: NotRequired[str]
    credentials_ciphertext: NotRequired[str]
