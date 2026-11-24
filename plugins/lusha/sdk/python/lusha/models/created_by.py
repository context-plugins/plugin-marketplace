from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.surface import SurfaceOrStr


class CreatedBy(SdkBaseModel):
    """Where and by whom the table was created."""

    surface: Optional[SurfaceOrStr] = UNSET
    created_by_user_id: Optional[int] = Field(default=UNSET, alias="createdByUserId")


class CreatedByDict(TypedDict):
    surface: NotRequired[SurfaceOrStr]
    created_by_user_id: NotRequired[int]
