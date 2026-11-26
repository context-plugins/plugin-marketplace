from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AmountRange(SdkBaseModel):
    from_: Optional[float] = Field(default=UNSET, alias="from")
    """Amount range start"""

    to: Optional[float] = UNSET
    """Amount range end"""


class AmountRangeDict(TypedDict):
    from_: NotRequired[float]
    to: NotRequired[float]
