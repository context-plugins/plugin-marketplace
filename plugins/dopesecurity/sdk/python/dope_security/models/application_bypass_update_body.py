from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom import Custom, CustomDict
from .default import Default, DefaultDict


class ApplicationBypassUpdateBody(SdkBaseModel):
    """Payload for upserting application bypass entries. At least one of ``custom`` or ``default`` must be provided.
    Under each, at least one of ``mac`` or ``windows`` must be provided. Unmentioned custom entries are preserved.
    Unknown default entry names are silently ignored."""

    custom: Optional[Custom] = UNSET
    """Custom application entries to upsert (matched by name), keyed by platform."""

    default: Optional[Default] = UNSET
    """Default application entries with updated toggle states (matched by name), keyed by platform."""


class ApplicationBypassUpdateBodyDict(TypedDict):
    custom: NotRequired[CustomDict]
    default: NotRequired[DefaultDict]
