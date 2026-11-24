from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorPostscriptPartnerIdentityApi(SdkBaseModel):
    ctx: Optional[Any] = UNSET
    log: Optional[list[str]] = UNSET
    msg: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")


class ErrorPostscriptPartnerIdentityApiDict(TypedDict):
    ctx: NotRequired[Any]
    log: NotRequired[list[str]]
    msg: NotRequired[str]
    type_: NotRequired[str]
