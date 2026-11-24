from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Links1ConnectTransactionsApi(SdkBaseModel):
    self: str
    """Self reference url."""

    next: Optional[str] = UNSET
    """URL to the next result page when there are more than 500 transactions."""


class Links1ConnectTransactionsApiDict(TypedDict):
    self: str
    next: NotRequired[str]
