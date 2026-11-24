from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Dlr(SdkBaseModel):
    callback_endpoint: Optional[str] = UNSET
    """Optional DLR (Delivery Receipt) callback URL"""


class DlrDict(TypedDict):
    callback_endpoint: NotRequired[str]
