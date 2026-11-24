from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_measurement_protocol_secret import (
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret,
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict,
)


class GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse(SdkBaseModel):
    """Response message for ListMeasurementProtocolSecret RPC"""

    measurement_protocol_secrets: Optional[list[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret]] = Field(
        default=UNSET, alias="measurementProtocolSecrets"
    )
    """A list of secrets for the parent stream specified in the request."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponseDict(TypedDict):
    measurement_protocol_secrets: NotRequired[list[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecretDict]]
    next_page_token: NotRequired[str]
