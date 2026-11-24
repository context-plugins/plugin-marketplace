from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.confidence import ConfidenceOrStr
from .source import Source, SourceDict


class Fact(SdkBaseModel):
    predicate: Optional[str] = UNSET
    label: Optional[str] = UNSET
    value: Optional[Any] = UNSET
    source: Optional[Source] = UNSET
    source_url: OptionalNullable[str] = UNSET
    observed_at: OptionalNullable[str] = UNSET
    verified_at: Optional[RFC3339DateTime] = UNSET
    next_check_at: Optional[RFC3339DateTime] = UNSET
    confidence: Optional[ConfidenceOrStr] = UNSET
    snapshot_sha256: OptionalNullable[str] = UNSET


class FactDict(TypedDict):
    predicate: NotRequired[str]
    label: NotRequired[str]
    value: NotRequired[Any]
    source: NotRequired[SourceDict]
    source_url: NotRequired[str | None]
    observed_at: NotRequired[str | None]
    verified_at: NotRequired[RFC3339DateTime]
    next_check_at: NotRequired[RFC3339DateTime]
    confidence: NotRequired[ConfidenceOrStr]
    snapshot_sha256: NotRequired[str | None]
