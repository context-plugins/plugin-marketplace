from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.action1 import Action1OrStr
from .enums.resource_type import ResourceTypeOrStr


class GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest(SdkBaseModel):
    """Request message for SearchChangeHistoryEvents RPC."""

    actor_email: Optional[list[str]] = Field(default=UNSET, alias="actorEmail")
    """Optional. If set, only return changes if they are made by a user in this list."""

    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    """Optional. The maximum number of ChangeHistoryEvent items to return. If unspecified, at most 50 items will be
    returned. The maximum value is 200 (higher values will be coerced to the maximum). Note that the service may return
    a page with fewer items than this value specifies (potentially even zero), and that there still may be additional
    pages. If you want a particular number of items, you'll need to continue requesting additional pages using
    ``page_token`` until you get the needed number."""

    resource_type: Optional[list[ResourceTypeOrStr]] = Field(default=UNSET, alias="resourceType")
    """Optional. If set, only return changes if they are for a resource that matches at least one of these types."""

    latest_change_time: Optional[str] = Field(default=UNSET, alias="latestChangeTime")
    """Optional. If set, only return changes made before this time (inclusive)."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Optional. A page token, received from a previous ``SearchChangeHistoryEvents`` call. Provide this to retrieve the
    subsequent page. When paginating, all other parameters provided to ``SearchChangeHistoryEvents`` must match the call
    that provided the page token."""

    property: Optional[str] = UNSET
    """Optional. Resource name for a child property. If set, only return changes made to this property or its child
    resources. Format: properties/{propertyId} Example: ``properties/100``"""

    earliest_change_time: Optional[str] = Field(default=UNSET, alias="earliestChangeTime")
    """Optional. If set, only return changes made after this time (inclusive)."""

    action: Optional[list[Action1OrStr]] = UNSET
    """Optional. If set, only return changes that match one or more of these types of actions."""


class GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestDict(TypedDict):
    actor_email: NotRequired[list[str]]
    page_size: NotRequired[int]
    resource_type: NotRequired[list[ResourceTypeOrStr]]
    latest_change_time: NotRequired[str]
    page_token: NotRequired[str]
    property: NotRequired[str]
    earliest_change_time: NotRequired[str]
    action: NotRequired[list[Action1OrStr]]
