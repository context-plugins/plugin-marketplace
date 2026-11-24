from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaDataSharingSettings(SdkBaseModel):
    """A resource message representing data sharing settings of a Google Analytics account."""

    sharing_with_google_support_enabled: Optional[bool] = Field(default=UNSET, alias="sharingWithGoogleSupportEnabled")
    """Allows Google technical support representatives access to your Google Analytics data and account when necessary
    to provide service and find solutions to technical issues. This field maps to the "Technical support" field in the
    Google Analytics Admin UI."""

    sharing_with_google_assigned_sales_enabled: Optional[bool] = Field(
        default=UNSET, alias="sharingWithGoogleAssignedSalesEnabled"
    )
    """Allows Google access to your Google Analytics account data, including account usage and configuration data,
    product spending, and users associated with your Google Analytics account, so that Google can help you make the most
    of Google products, providing you with insights, offers, recommendations, and optimization tips across Google
    Analytics and other Google products for business. This field maps to the "Recommendations for your business" field
    in the Google Analytics Admin UI."""

    sharing_with_google_any_sales_enabled: Optional[bool] = Field(
        default=UNSET, alias="sharingWithGoogleAnySalesEnabled"
    )
    """Deprecated. This field is no longer used and always returns false."""

    sharing_with_others_enabled: Optional[bool] = Field(default=UNSET, alias="sharingWithOthersEnabled")
    """Enable features like predictions, modeled data, and benchmarking that can provide you with richer business
    insights when you contribute aggregated measurement data. The data you share (including information about the
    property from which it is shared) is aggregated and de-identified before being used to generate business insights.
    This field maps to the "Modeling contributions & business insights" field in the Google Analytics Admin UI."""

    name: Optional[str] = UNSET
    """Identifier. Resource name. Format: accounts/{account}/dataSharingSettings Example:
    "accounts/1000/dataSharingSettings"
    """

    sharing_with_google_products_enabled: Optional[bool] = Field(
        default=UNSET, alias="sharingWithGoogleProductsEnabled"
    )
    """Allows Google to use the data to improve other Google products or services. This fields maps to the "Google
    products & services" field in the Google Analytics Admin UI."""


class GoogleAnalyticsAdminV1BetaDataSharingSettingsDict(TypedDict):
    sharing_with_google_support_enabled: NotRequired[bool]
    sharing_with_google_assigned_sales_enabled: NotRequired[bool]
    sharing_with_google_any_sales_enabled: NotRequired[bool]
    sharing_with_others_enabled: NotRequired[bool]
    name: NotRequired[str]
    sharing_with_google_products_enabled: NotRequired[bool]
