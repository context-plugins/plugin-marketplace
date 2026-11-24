from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV2WebhooksTokenResponse(SdkBaseModel):
    token: Optional[str] = UNSET


class ApiV2WebhooksTokenResponseDict(TypedDict):
    token: NotRequired[str]
