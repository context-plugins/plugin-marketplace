from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EncryptionConfig22(SdkBaseModel):
    """Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot
    be updated."""

    kms_key: Optional[str] = Field(default=UNSET, alias="kmsKey")
    """Optional. The fully qualified customer provided Cloud KMS key name to use for customer data encryption, in the
    following
    format:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}."""


class EncryptionConfig22Dict(TypedDict):
    kms_key: NotRequired[str]
