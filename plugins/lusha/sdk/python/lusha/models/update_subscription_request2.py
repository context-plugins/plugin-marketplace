from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateSubscriptionRequest2(SdkBaseModel):
    signal_types: Optional[list[str]] = Field(default=UNSET, alias="signalTypes")
    url: Optional[str] = UNSET
    name: Optional[str] = UNSET
    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    regenerate_secret: Optional[bool] = Field(default=UNSET, alias="regenerateSecret")


class UpdateSubscriptionRequest2Dict(TypedDict):
    signal_types: NotRequired[list[str]]
    url: NotRequired[str]
    name: NotRequired[str]
    is_active: NotRequired[bool]
    regenerate_secret: NotRequired[bool]
