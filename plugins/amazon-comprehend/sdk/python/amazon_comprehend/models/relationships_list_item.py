from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2 import Type2OrStr


class RelationshipsListItem(SdkBaseModel):
    ids: Optional[list[str]] = Field(default=UNSET, alias="Ids")
    """Identifers of the child blocks."""

    type_: Optional[Type2OrStr] = Field(default=UNSET, alias="Type")
    """Only supported relationship is a child relationship."""


class RelationshipsListItemDict(TypedDict):
    ids: NotRequired[list[str]]
    type_: NotRequired[Type2OrStr]
