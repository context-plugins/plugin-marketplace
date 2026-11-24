from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .lag import Lag, LagDict


class Lags(SdkBaseModel):
    lags: Optional[list[Lag]] = UNSET
    """The LAGs."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The token to use to retrieve the next page of results. This value is null when there are no more results to
    return."""


class LagsDict(TypedDict):
    lags: NotRequired[list[LagDict]]
    next_token: NotRequired[str]
