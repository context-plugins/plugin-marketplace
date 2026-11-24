from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class V1FundsRequest(SdkBaseModel):
    name: str
    code: OptionalNullable[str] = UNSET


class V1FundsRequestDict(TypedDict):
    name: str
    code: NotRequired[str | None]
