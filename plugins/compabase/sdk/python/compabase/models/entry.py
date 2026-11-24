from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel
from .justification_i18_n import JustificationI18N, JustificationI18NDict
from .measures_i18_n import MeasuresI18N, MeasuresI18NDict


class Entry(SdkBaseModel):
    source: Optional[str] = UNSET
    name: Optional[str] = UNSET
    measures: OptionalNullable[str] = UNSET
    """Restrictive measures, Polish source text. Lettered items are separated by newlines."""

    justification: OptionalNullable[str] = UNSET
    """Legal grounds, Polish source text. Paragraphs are separated by a blank line."""

    measures_i18n: OptionalNullable[MeasuresI18N] = UNSET
    justification_i18n: OptionalNullable[JustificationI18N] = UNSET
    listed_on: OptionalNullable[Date] = UNSET
    removed_on: OptionalNullable[Date] = UNSET
    source_url: OptionalNullable[str] = UNSET


class EntryDict(TypedDict):
    source: NotRequired[str]
    name: NotRequired[str]
    measures: NotRequired[str | None]
    justification: NotRequired[str | None]
    measures_i18n: NotRequired[MeasuresI18NDict | None]
    justification_i18n: NotRequired[JustificationI18NDict | None]
    listed_on: NotRequired[Date | None]
    removed_on: NotRequired[Date | None]
    source_url: NotRequired[str | None]
