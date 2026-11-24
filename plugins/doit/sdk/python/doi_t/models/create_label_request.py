from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.color import ColorOrStr


class CreateLabelRequest(SdkBaseModel):
    """Request body for creating a label."""

    name: str
    """The name of the label."""

    color: ColorOrStr
    """The color of the label."""


class CreateLabelRequestDict(TypedDict):
    name: str
    color: ColorOrStr
