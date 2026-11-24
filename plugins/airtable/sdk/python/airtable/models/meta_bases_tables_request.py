from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaBasesTablesRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """The new name for the table."""

    description: Optional[str] = UNSET
    """The new description for the table."""


class MetaBasesTablesRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
