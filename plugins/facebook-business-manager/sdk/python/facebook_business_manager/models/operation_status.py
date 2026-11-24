from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OperationStatus(SdkBaseModel):
    status: Optional[int] = UNSET
    """Operation status code"""


class OperationStatusDict(TypedDict):
    status: NotRequired[int]
