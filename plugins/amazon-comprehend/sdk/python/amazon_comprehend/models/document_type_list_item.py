from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type3 import Type3OrStr


class DocumentTypeListItem(SdkBaseModel):
    page: Optional[int] = Field(default=UNSET, alias="Page")
    """Page number."""

    type_: Optional[Type3OrStr] = Field(default=UNSET, alias="Type")
    """Document type."""


class DocumentTypeListItemDict(TypedDict):
    page: NotRequired[int]
    type_: NotRequired[Type3OrStr]
