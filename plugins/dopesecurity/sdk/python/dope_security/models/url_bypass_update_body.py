from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_bypass_request_item import CustomBypassRequestItem, CustomBypassRequestItemDict
from .default_bypass_item import DefaultBypassItem, DefaultBypassItemDict


class UrlBypassUpdateBody(SdkBaseModel):
    """Payload for upserting URL bypass entries. At least one of ``custom`` or ``default`` must be provided. Unmentioned
    custom entries are preserved. Unknown default entry names are silently ignored."""

    custom: Optional[list[CustomBypassRequestItem]] = UNSET
    """Custom URL entries to upsert (matched by name)."""

    default: Optional[list[DefaultBypassItem]] = UNSET
    """Default URL entries with updated toggle states (matched by name)."""


class UrlBypassUpdateBodyDict(TypedDict):
    custom: NotRequired[list[CustomBypassRequestItemDict]]
    default: NotRequired[list[DefaultBypassItemDict]]
