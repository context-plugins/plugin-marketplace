from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entry1 import Entry1, Entry1Dict


class PublishRequest(SdkBaseModel):
    """Parameters for publishing or unpublishing an entry or asset."""

    entry: Optional[Entry1] = UNSET
    """Publish configuration."""


class PublishRequestDict(TypedDict):
    entry: NotRequired[Entry1Dict]
