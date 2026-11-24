from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WebhooksRegenerateSecretResponse(SdkBaseModel):
    secret: Optional[str] = UNSET
    message: Optional[str] = UNSET


class WebhooksRegenerateSecretResponseDict(TypedDict):
    secret: NotRequired[str]
    message: NotRequired[str]
