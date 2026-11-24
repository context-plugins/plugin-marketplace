from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.field_model import FieldModelOrStr


class V3CanRevealItem(SdkBaseModel):
    """Indicates a data type that can be revealed and its credit cost"""

    field: Optional[FieldModelOrStr] = UNSET
    credits: Optional[int] = UNSET
    """Credit cost (0 when already revealed for this account)"""


class V3CanRevealItemDict(TypedDict):
    field: NotRequired[FieldModelOrStr]
    credits: NotRequired[int]
