from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.effect import EffectOrStr


class Signal(SdkBaseModel):
    name: Optional[str] = UNSET
    label: Optional[str] = UNSET
    value: Optional[Any] = UNSET
    effect: Optional[EffectOrStr] = UNSET
    detail: Optional[str] = UNSET
    source: Optional[str] = UNSET
    source_url: OptionalNullable[str] = UNSET
    verified_at: OptionalNullable[str] = UNSET


class SignalDict(TypedDict):
    name: NotRequired[str]
    label: NotRequired[str]
    value: NotRequired[Any]
    effect: NotRequired[EffectOrStr]
    detail: NotRequired[str]
    source: NotRequired[str]
    source_url: NotRequired[str | None]
    verified_at: NotRequired[str | None]
