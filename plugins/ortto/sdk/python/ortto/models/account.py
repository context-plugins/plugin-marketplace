from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Account(SdkBaseModel):
    fields: Optional[Any] = UNSET


class AccountDict(TypedDict):
    fields: NotRequired[Any]
