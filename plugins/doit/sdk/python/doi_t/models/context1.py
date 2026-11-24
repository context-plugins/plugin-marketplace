from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Context1(SdkBaseModel):
    account_id: Optional[str] = Field(default=UNSET, alias="accountId")
    regions: Optional[list[str]] = UNSET


class Context1Dict(TypedDict):
    account_id: NotRequired[str]
    regions: NotRequired[list[str]]
