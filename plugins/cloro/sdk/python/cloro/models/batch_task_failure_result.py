from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error2 import Error2, Error2Dict


class BatchTaskFailureResult(SdkBaseModel):
    success: Literal["False"] = "False"
    """Indicates this task failed."""

    index: int
    """The zero-based position of this task in the original request array."""

    error: Error2


class BatchTaskFailureResultDict(TypedDict):
    success: Literal["False"]
    index: int
    error: Error2Dict
