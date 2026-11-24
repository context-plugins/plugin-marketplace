from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Source(SdkBaseModel):
    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    agency: OptionalNullable[str] = UNSET


class SourceDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    agency: NotRequired[str | None]
