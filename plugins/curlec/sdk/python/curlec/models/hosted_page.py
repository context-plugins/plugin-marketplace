from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .label import Label, LabelDict


class HostedPage(SdkBaseModel):
    """Customise labels on the payment details section of the hosted page."""

    label: Optional[Label] = UNSET
    """Map of field names to custom label text. Supports localisation (Hindi, Tamil, etc.)."""


class HostedPageDict(TypedDict):
    label: NotRequired[LabelDict]
