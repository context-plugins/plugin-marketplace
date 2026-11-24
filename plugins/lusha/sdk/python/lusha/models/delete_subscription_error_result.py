from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error import Error, ErrorDict


class DeleteSubscriptionErrorResult(SdkBaseModel):
    index: int
    success: Literal["False"] = "False"
    error: Error


class DeleteSubscriptionErrorResultDict(TypedDict):
    index: int
    success: Literal["False"]
    error: ErrorDict
