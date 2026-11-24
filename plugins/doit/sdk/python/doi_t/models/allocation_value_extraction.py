from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .allocation_value_extraction_source import AllocationValueExtractionSource, AllocationValueExtractionSourceDict
from .enums.on_missing import OnMissing, OnMissingOrStr


class AllocationValueExtraction(SdkBaseModel):
    """Makes the rule emit a value extracted from the first non-empty source instead of the rule name."""

    sources: list[AllocationValueExtractionSource]
    """Ordered extraction sources; the first non-empty value wins."""

    on_missing: OnMissingOrStr = Field(default=OnMissing.USE_FALLBACK, alias="onMissing")
    """What happens when every source is missing or empty on a matching row. "useFallback" (default) emits the fallback
    value, which is required in that mode; "nextRule" lets the row fall through to the next rule in the group."""

    fallback: OptionalNullable[str] = UNSET
    """Literal emitted when every source is missing. Required with onMissing "useFallback" (the default); not allowed
    with onMissing "nextRule"."""


class AllocationValueExtractionDict(TypedDict):
    sources: list[AllocationValueExtractionSourceDict]
    on_missing: NotRequired[OnMissingOrStr]
    fallback: NotRequired[str | None]
