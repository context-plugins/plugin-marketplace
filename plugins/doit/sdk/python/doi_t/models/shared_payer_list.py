from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .shared_payer import SharedPayer, SharedPayerDict


class SharedPayerList(SdkBaseModel):
    items: Optional[list[SharedPayer]] = UNSET


class SharedPayerListDict(TypedDict):
    items: NotRequired[list[SharedPayerDict]]
