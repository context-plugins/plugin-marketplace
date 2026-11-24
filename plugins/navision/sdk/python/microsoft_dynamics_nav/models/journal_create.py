from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JournalCreate(SdkBaseModel):
    code: str
    display_name: str = Field(alias="displayName")
    template_display_name: Optional[str] = Field(default=UNSET, alias="templateDisplayName")


class JournalCreateDict(TypedDict):
    code: str
    display_name: str
    template_display_name: NotRequired[str]
