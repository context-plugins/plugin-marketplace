from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaBasesTablesFieldsFieldIdRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    """The new name for the field."""

    description: Optional[str] = UNSET
    """The new description for the field."""

    options: Optional[Any] = UNSET
    """Updated configuration options for the field."""


class MetaBasesTablesFieldsFieldIdRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    options: NotRequired[Any]
