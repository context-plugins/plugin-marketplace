from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error10 import Error10, Error10Dict


class BatchTaskFailureResult2(SdkBaseModel):
    success: Literal["False"] = "False"
    """Indicates this task failed."""

    index: int
    """The zero-based position of this task in the original request array."""

    error: Error10


class BatchTaskFailureResult2Dict(TypedDict):
    success: Literal["False"]
    index: int
    error: Error10Dict
