from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleChannelConfig(SdkBaseModel):
    """Can be used to customize security settings for Eventarc first-party triggers in a specific region. Once the
    GoogleChannelConfig resource is configured, first-party event data is protected using the specified customer-managed
    encryption key instead of a Google-managed encryption key."""

    crypto_key_name: Optional[str] = Field(default=UNSET, alias="cryptoKeyName")
    """Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It
    must match the pattern ``projects/*/locations/*/keyRings/*/cryptoKeys/*``."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last-modified time."""

    name: Optional[str] = UNSET
    """Required. The resource name of the config. Must be in the format of,
    ``projects/{project}/locations/{location}/googleChannelConfig``. In API responses, the config name always includes
    the projectID, regardless of whether the projectID or projectNumber was provided."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels."""


class GoogleChannelConfigDict(TypedDict):
    crypto_key_name: NotRequired[str]
    update_time: NotRequired[str]
    name: NotRequired[str]
    labels: NotRequired[dict[str, str]]
