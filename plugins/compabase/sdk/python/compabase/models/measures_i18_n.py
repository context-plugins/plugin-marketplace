from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MeasuresI18N(SdkBaseModel):
    en: Optional[str] = UNSET
    de: Optional[str] = UNSET


class MeasuresI18NDict(TypedDict):
    en: NotRequired[str]
    de: NotRequired[str]
