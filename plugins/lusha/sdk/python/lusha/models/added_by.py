from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.surface import SurfaceOrStr


class AddedBy(SdkBaseModel):
    """Where and by whom a row was added to the table."""

    surface: Optional[SurfaceOrStr] = UNSET


class AddedByDict(TypedDict):
    surface: NotRequired[SurfaceOrStr]
