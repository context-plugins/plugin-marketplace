from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Evidence(SdkBaseModel):
    text: Optional[str] = UNSET
    source: Optional[str] = UNSET
    source_url: OptionalNullable[str] = UNSET


class EvidenceDict(TypedDict):
    text: NotRequired[str]
    source: NotRequired[str]
    source_url: NotRequired[str | None]
