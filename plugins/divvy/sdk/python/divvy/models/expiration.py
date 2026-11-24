from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Expiration(SdkBaseModel):
    year: Optional[str] = UNSET
    """Card expiration year"""

    month: Optional[str] = UNSET
    """Card expiration month"""


class ExpirationDict(TypedDict):
    year: NotRequired[str]
    month: NotRequired[str]
