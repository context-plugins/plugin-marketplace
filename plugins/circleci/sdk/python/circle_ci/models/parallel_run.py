from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ParallelRun(SdkBaseModel):
    index: Optional[int] = UNSET
    """The parallel run index"""

    status: Optional[str] = UNSET
    """The status of this parallel run"""


class ParallelRunDict(TypedDict):
    index: NotRequired[int]
    status: NotRequired[str]
