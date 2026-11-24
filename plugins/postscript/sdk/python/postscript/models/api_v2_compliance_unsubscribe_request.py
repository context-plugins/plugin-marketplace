from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2ComplianceUnsubscribeRequest(SdkBaseModel):
    postscript_subscriber_id: Optional[str] = UNSET
    """ID of the subscriber you'd like to opt out."""

    phone_number: Optional[str] = UNSET
    """A phone number of the subscriber you'd like to opt out."""


class ApiV2ComplianceUnsubscribeRequestDict(TypedDict):
    postscript_subscriber_id: NotRequired[str]
    phone_number: NotRequired[str]
