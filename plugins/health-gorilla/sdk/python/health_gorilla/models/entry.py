from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Entry(SdkBaseModel):
    full_url: Optional[str] = Field(default=UNSET, alias="fullUrl")
    resource: Optional[Any] = UNSET


class EntryDict(TypedDict):
    full_url: NotRequired[str]
    resource: NotRequired[Any]
