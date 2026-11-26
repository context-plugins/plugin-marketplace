from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    message: Optional[str] = UNSET
    error: Optional[str] = UNSET
    detail: Optional[str] = UNSET
    extra: Optional[Any] = UNSET
    """Machine-readable context on capped responses: the 429 carries ``tier``, ``limit_per_minute``, ``limit_per_day``,
    ``retry_after_seconds``; the archive 403 carries ``reason: archive_horizon``, ``tier``, ``archive_days``. Both
    include an ``upgrade`` object (higher tiers' caps + ``pricing_url``) for callers below Pro. A 400 caused by an
    unknown query parameter additionally carries ``allowed_params`` — the complete list this endpoint accepts, read
    straight off the endpoint's own schema — plus ``docs``, a link to the developer reference. Individual entries in
    ``extra.fields`` may carry a did-you-mean hint in their ``msg``."""


class ErrorDict(TypedDict):
    message: NotRequired[str]
    error: NotRequired[str]
    detail: NotRequired[str]
    extra: NotRequired[Any]
