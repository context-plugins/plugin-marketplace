from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class JustificationI18N(SdkBaseModel):
    en: Optional[str] = UNSET
    de: Optional[str] = UNSET


class JustificationI18NDict(TypedDict):
    en: NotRequired[str]
    de: NotRequired[str]
