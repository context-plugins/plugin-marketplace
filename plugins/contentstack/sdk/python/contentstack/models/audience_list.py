from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audience import Audience, AudienceDict


class AudienceList(SdkBaseModel):
    """A list of audience segment definitions."""

    data: Optional[list[Audience]] = UNSET
    """Array of audience objects."""


class AudienceListDict(TypedDict):
    data: NotRequired[list[AudienceDict]]
