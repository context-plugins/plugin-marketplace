from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.warn_code import WarnCodeOrStr


class WarningsListItem(SdkBaseModel):
    page: Optional[int] = Field(default=UNSET, alias="Page")
    """Page number in the input document."""

    warn_code: Optional[WarnCodeOrStr] = Field(default=UNSET, alias="WarnCode")
    """The type of warning."""

    warn_message: Optional[str] = Field(default=UNSET, alias="WarnMessage")
    """Text message associated with the warning."""


class WarningsListItemDict(TypedDict):
    page: NotRequired[int]
    warn_code: NotRequired[WarnCodeOrStr]
    warn_message: NotRequired[str]
