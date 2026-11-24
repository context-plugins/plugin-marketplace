from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret(SdkBaseModel):
    """A secret value used for sending hits to Measurement Protocol."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of this secret. This secret may be a child of any type of stream. Format:
    properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}"""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Human-readable display name for this secret."""

    secret_value: Optional[str] = Field(default=UNSET, alias="secretValue")
    """Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement
    Protocol API when sending hits to this secret's parent property."""


class GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict(TypedDict):
    name: NotRequired[str]
    display_name: NotRequired[str]
    secret_value: NotRequired[str]
