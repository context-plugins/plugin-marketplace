from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EncryptionConfig2(SdkBaseModel):
    """Encryption settings for the service."""

    kms_key: Optional[str] = Field(default=UNSET, alias="kmsKey")
    """Optional. The fully qualified customer provided Cloud KMS key name to use for customer data encryption, in the
    following
    format:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}."""


class EncryptionConfig2Dict(TypedDict):
    kms_key: NotRequired[str]
