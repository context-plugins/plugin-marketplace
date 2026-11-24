from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .meta import Meta, MetaDict


class SuccessEnvelope(SdkBaseModel):
    data: Any
    """Endpoint-specific data payload."""

    meta: Meta
    """Canonical response metadata present on every 200 (§6.3.3)."""


class SuccessEnvelopeDict(TypedDict):
    data: Any
    meta: MetaDict
