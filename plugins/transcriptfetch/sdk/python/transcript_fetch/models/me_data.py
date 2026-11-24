from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class MeData(SdkBaseModel):
    kind: Literal["me"] = "me"
    user_id: Optional[str] = UNSET
    credits: OptionalNullable[int] = UNSET
    """Remaining balance, or null for unlimited (admin) accounts."""


class MeDataDict(TypedDict):
    kind: Literal["me"]
    user_id: NotRequired[str]
    credits: NotRequired[int | None]
