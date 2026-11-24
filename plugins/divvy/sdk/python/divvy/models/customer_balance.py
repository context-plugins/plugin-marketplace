from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomerBalance(SdkBaseModel):
    """The type CustomerBalance dto."""

    amount: Optional[float] = UNSET


class CustomerBalanceDict(TypedDict):
    amount: NotRequired[float]
