from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_firebase_link import (
    GoogleAnalyticsAdminV1BetaFirebaseLink,
    GoogleAnalyticsAdminV1BetaFirebaseLinkDict,
)


class GoogleAnalyticsAdminV1BetaListFirebaseLinksResponse(SdkBaseModel):
    """Response message for ListFirebaseLinks RPC"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be
    populated."""

    firebase_links: Optional[list[GoogleAnalyticsAdminV1BetaFirebaseLink]] = Field(default=UNSET, alias="firebaseLinks")
    """List of FirebaseLinks. This will have at most one value."""


class GoogleAnalyticsAdminV1BetaListFirebaseLinksResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    firebase_links: NotRequired[list[GoogleAnalyticsAdminV1BetaFirebaseLinkDict]]
