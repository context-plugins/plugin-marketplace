from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2ComplianceRedactRequest(SdkBaseModel):
    postscript_subscriber_id: Optional[str] = UNSET
    """ID of the subscriber you'd like to redact."""

    shopify_customer_id: Optional[str] = UNSET
    """A shopify customer id of the subscriber you'd like to redact."""

    email: Optional[str] = UNSET
    """An email of the subscriber you'd like to redact."""

    phone_number: Optional[str] = UNSET
    """A phone number of the subscriber you'd like to redact."""


class ApiV2ComplianceRedactRequestDict(TypedDict):
    postscript_subscriber_id: NotRequired[str]
    shopify_customer_id: NotRequired[str]
    email: NotRequired[str]
    phone_number: NotRequired[str]
