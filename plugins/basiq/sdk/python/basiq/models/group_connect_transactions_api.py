from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GroupConnectTransactionsApi(SdkBaseModel):
    code: Optional[str] = UNSET
    """Group Code"""

    title: Optional[str] = UNSET
    """Group Details"""


class GroupConnectTransactionsApiDict(TypedDict):
    code: NotRequired[str]
    title: NotRequired[str]
