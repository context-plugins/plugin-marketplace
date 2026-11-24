from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Class1ConnectTransactionsApi(SdkBaseModel):
    title: Optional[str] = UNSET
    """Class Details"""

    code: Optional[str] = UNSET
    """Class Code"""


class Class1ConnectTransactionsApiDict(TypedDict):
    title: NotRequired[str]
    code: NotRequired[str]
