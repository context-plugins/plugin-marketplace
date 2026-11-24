from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error1 import Error1, Error1Dict


class CreateSubscriptionErrorResult(SdkBaseModel):
    index: int
    success: Literal["False"] = "False"
    error: Error1


class CreateSubscriptionErrorResultDict(TypedDict):
    index: int
    success: Literal["False"]
    error: Error1Dict
