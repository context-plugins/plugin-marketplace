from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Quote(SdkBaseModel):
    speaker: Optional[str] = UNSET
    role: OptionalNullable[str] = UNSET
    text: Optional[str] = UNSET


class QuoteDict(TypedDict):
    speaker: NotRequired[str]
    role: NotRequired[str | None]
    text: NotRequired[str]
