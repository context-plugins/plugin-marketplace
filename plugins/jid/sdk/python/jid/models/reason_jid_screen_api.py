from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.kind import KindOrStr


class ReasonJidScreenApi(SdkBaseModel):
    code: Optional[str] = UNSET
    kind: Optional[KindOrStr] = UNSET
    points: Optional[float] = UNSET
    text: Optional[str] = UNSET
    source: Optional[str] = UNSET
    source_url: OptionalNullable[str] = UNSET
    checked_at: OptionalNullable[str] = UNSET


class ReasonJidScreenApiDict(TypedDict):
    code: NotRequired[str]
    kind: NotRequired[KindOrStr]
    points: NotRequired[float]
    text: NotRequired[str]
    source: NotRequired[str]
    source_url: NotRequired[str | None]
    checked_at: NotRequired[str | None]
