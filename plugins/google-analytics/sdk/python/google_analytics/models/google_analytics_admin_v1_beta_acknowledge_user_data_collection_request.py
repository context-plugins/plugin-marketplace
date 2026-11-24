from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequest(SdkBaseModel):
    """Request message for AcknowledgeUserDataCollection RPC."""

    acknowledgement: Optional[str] = UNSET
    """Required. An acknowledgement that the caller of this method understands the terms of user data collection. This
    field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my
    end users for the collection and processing of their data, including the association of such data with the
    visitation information Google Analytics collects from my site and/or app property."
    """


class GoogleAnalyticsAdminV1BetaAcknowledgeUserDataCollectionRequestDict(TypedDict):
    acknowledgement: NotRequired[str]
