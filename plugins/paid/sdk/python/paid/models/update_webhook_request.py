from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class UpdateWebhookRequest(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    """Whether the webhook is enabled for delivery."""

    url: OptionalNullable[str] = UNSET
    """The HTTPS endpoint Paid should deliver this webhook to. Set to null to clear it while disabled."""


class UpdateWebhookRequestDict(TypedDict):
    enabled: NotRequired[bool]
    url: NotRequired[str | None]
