from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2SubscribersRequest(SdkBaseModel):
    email: Optional[str] = UNSET
    """Email address for the subscriber. **Note:** when updating an email address, we will only update it if none
    previously existed on the subscriber or we haven't linked a Shopify customer to them yet. We also can only link a
    Shopify customer if they already exist, not retrospectively."""

    tags: Optional[list[str]] = UNSET
    """Tags you would like to add to the subscriber. **Note:** tags are additive, so whatever you include here will be
    added to the existing tags on a subscriber."""

    properties: str = "{\"key\": \"value\"}"
    """Custom properties as key/value pairs. Values can be: strings, integers, string arrays, or ISO 8601 date(time).
    Subscribers can have up to 50 custom properties. If properties is unset or ``null``, it will be ignored."""


class ApiV2SubscribersRequestDict(TypedDict):
    email: NotRequired[str]
    tags: NotRequired[list[str]]
    properties: NotRequired[str]
