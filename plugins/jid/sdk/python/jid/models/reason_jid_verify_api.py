from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.effect_jid_verify_api import EffectJidVerifyApiOrStr
from .enums.kind_jid_verify_api import KindJidVerifyApiOrStr
from .source1 import Source1, Source1Dict
from .unions.met1 import Met1, Met1Dict


class ReasonJidVerifyApi(SdkBaseModel):
    code: str
    requirement: str
    kind: Optional[KindJidVerifyApiOrStr] = UNSET
    met: Met1
    effect: OptionalNullable[EffectJidVerifyApiOrStr] = UNSET
    detail: Optional[str] = UNSET
    fact_ids: list[str]
    source: OptionalNullable[Source1] = UNSET
    source_url: OptionalNullable[str] = UNSET
    verified_at: OptionalNullable[RFC3339DateTime] = UNSET
    fresh_until: OptionalNullable[RFC3339DateTime] = UNSET
    authority: Optional[str] = UNSET


class ReasonJidVerifyApiDict(TypedDict):
    code: str
    requirement: str
    kind: NotRequired[KindJidVerifyApiOrStr]
    met: Met1Dict
    effect: NotRequired[EffectJidVerifyApiOrStr | None]
    detail: NotRequired[str]
    fact_ids: list[str]
    source: NotRequired[Source1Dict | None]
    source_url: NotRequired[str | None]
    verified_at: NotRequired[RFC3339DateTime | None]
    fresh_until: NotRequired[RFC3339DateTime | None]
    authority: NotRequired[str]
