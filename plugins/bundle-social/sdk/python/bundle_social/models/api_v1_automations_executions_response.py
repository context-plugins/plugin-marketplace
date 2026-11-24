from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .item2_bundle_social_automation_api import Item2BundleSocialAutomationApi, Item2BundleSocialAutomationApiDict


class ApiV1AutomationsExecutionsResponse(SdkBaseModel):
    items: list[Item2BundleSocialAutomationApi]
    total: Optional[float] = UNSET
    next_cursor: OptionalNullable[str] = Field(default=UNSET, alias="nextCursor")


class ApiV1AutomationsExecutionsResponseDict(TypedDict):
    items: list[Item2BundleSocialAutomationApiDict]
    total: NotRequired[float]
    next_cursor: NotRequired[str | None]
