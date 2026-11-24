from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_account3 import (
    GoogleAnalyticsAdminV1BetaAccount3,
    GoogleAnalyticsAdminV1BetaAccount3Dict,
)
from .google_analytics_admin_v1_beta_conversion_event2 import (
    GoogleAnalyticsAdminV1BetaConversionEvent2,
    GoogleAnalyticsAdminV1BetaConversionEvent2Dict,
)
from .google_analytics_admin_v1_beta_data_retention_settings2 import (
    GoogleAnalyticsAdminV1BetaDataRetentionSettings2,
    GoogleAnalyticsAdminV1BetaDataRetentionSettings2Dict,
)
from .google_analytics_admin_v1_beta_data_stream1 import (
    GoogleAnalyticsAdminV1BetaDataStream1,
    GoogleAnalyticsAdminV1BetaDataStream1Dict,
)
from .google_analytics_admin_v1_beta_firebase_link2 import (
    GoogleAnalyticsAdminV1BetaFirebaseLink2,
    GoogleAnalyticsAdminV1BetaFirebaseLink2Dict,
)
from .google_analytics_admin_v1_beta_google_ads_link2 import (
    GoogleAnalyticsAdminV1BetaGoogleAdsLink2,
    GoogleAnalyticsAdminV1BetaGoogleAdsLink2Dict,
)
from .google_analytics_admin_v1_beta_measurement_protocol_secret1 import (
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1,
    GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1Dict,
)
from .google_analytics_admin_v1_beta_property2 import (
    GoogleAnalyticsAdminV1BetaProperty2,
    GoogleAnalyticsAdminV1BetaProperty2Dict,
)


class GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResource(SdkBaseModel):
    """A snapshot of a resource as before or after the result of a change in change history."""

    measurement_protocol_secret: Optional[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1] = Field(
        default=UNSET, alias="measurementProtocolSecret"
    )
    """A snapshot of a MeasurementProtocolSecret resource in change history."""

    property: Optional[GoogleAnalyticsAdminV1BetaProperty2] = UNSET
    """A snapshot of a Property resource in change history."""

    data_stream: Optional[GoogleAnalyticsAdminV1BetaDataStream1] = Field(default=UNSET, alias="dataStream")
    """A snapshot of a DataStream resource in change history."""

    data_retention_settings: Optional[GoogleAnalyticsAdminV1BetaDataRetentionSettings2] = Field(
        default=UNSET, alias="dataRetentionSettings"
    )
    """A snapshot of a data retention settings resource in change history."""

    google_ads_link: Optional[GoogleAnalyticsAdminV1BetaGoogleAdsLink2] = Field(default=UNSET, alias="googleAdsLink")
    """A snapshot of a GoogleAdsLink resource in change history."""

    firebase_link: Optional[GoogleAnalyticsAdminV1BetaFirebaseLink2] = Field(default=UNSET, alias="firebaseLink")
    """A snapshot of a FirebaseLink resource in change history."""

    conversion_event: Optional[GoogleAnalyticsAdminV1BetaConversionEvent2] = Field(
        default=UNSET, alias="conversionEvent"
    )
    """A snapshot of a ConversionEvent resource in change history."""

    account: Optional[GoogleAnalyticsAdminV1BetaAccount3] = UNSET
    """A snapshot of an Account resource in change history."""


class GoogleAnalyticsAdminV1BetaChangeHistoryChangeChangeHistoryResourceDict(TypedDict):
    measurement_protocol_secret: NotRequired[GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret1Dict]
    property: NotRequired[GoogleAnalyticsAdminV1BetaProperty2Dict]
    data_stream: NotRequired[GoogleAnalyticsAdminV1BetaDataStream1Dict]
    data_retention_settings: NotRequired[GoogleAnalyticsAdminV1BetaDataRetentionSettings2Dict]
    google_ads_link: NotRequired[GoogleAnalyticsAdminV1BetaGoogleAdsLink2Dict]
    firebase_link: NotRequired[GoogleAnalyticsAdminV1BetaFirebaseLink2Dict]
    conversion_event: NotRequired[GoogleAnalyticsAdminV1BetaConversionEvent2Dict]
    account: NotRequired[GoogleAnalyticsAdminV1BetaAccount3Dict]
