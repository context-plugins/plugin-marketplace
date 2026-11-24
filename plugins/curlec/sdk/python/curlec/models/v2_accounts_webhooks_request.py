from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V2AccountsWebhooksRequest(SdkBaseModel):
    url: str
    alert_email: Optional[str] = UNSET
    secret: Optional[str] = UNSET
    active: Optional[bool] = UNSET
    events: dict[str, bool]


class V2AccountsWebhooksRequestDict(TypedDict):
    url: str
    alert_email: NotRequired[str]
    secret: NotRequired[str]
    active: NotRequired[bool]
    events: dict[str, bool]
