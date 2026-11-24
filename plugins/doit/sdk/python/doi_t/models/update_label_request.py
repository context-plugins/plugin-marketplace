from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.color import ColorOrStr


class UpdateLabelRequest(SdkBaseModel):
    """Request body for updating a label."""

    name: OptionalNullable[str] = UNSET
    """The name of the label."""

    color: OptionalNullable[ColorOrStr] = UNSET
    """The color of the label."""


class UpdateLabelRequestDict(TypedDict):
    name: NotRequired[str | None]
    color: NotRequired[ColorOrStr | None]
