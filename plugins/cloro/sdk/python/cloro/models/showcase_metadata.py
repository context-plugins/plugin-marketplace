from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .showcase_background import ShowcaseBackground, ShowcaseBackgroundDict
from .showcase_image import ShowcaseImage, ShowcaseImageDict
from .showcase_slot import ShowcaseSlot, ShowcaseSlotDict


class ShowcaseMetadata(SdkBaseModel):
    """Visual showcase metadata attached to a shopping product (image, background, and per-slot placement)."""

    image: Optional[ShowcaseImage] = UNSET
    """Image rendered as the hero of a product showcase"""

    background: Optional[ShowcaseBackground] = UNSET
    """Background styling for a product showcase"""

    slots: Optional[dict[str, ShowcaseSlot]] = UNSET
    """Slot map keyed by slot identifier"""

    debug: Optional[Any] = UNSET
    """Free-form debug metadata; opaque to clients"""


class ShowcaseMetadataDict(TypedDict):
    image: NotRequired[ShowcaseImageDict]
    background: NotRequired[ShowcaseBackgroundDict]
    slots: NotRequired[dict[str, ShowcaseSlotDict]]
    debug: NotRequired[Any]
