from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error1 import Error1, Error1Dict


class GoogleRpcErrorError(SdkBaseModel):
    """The error envelope every Google API returns."""

    error: Optional[Error1] = UNSET


class GoogleRpcErrorErrorDict(TypedDict):
    error: NotRequired[Error1Dict]
