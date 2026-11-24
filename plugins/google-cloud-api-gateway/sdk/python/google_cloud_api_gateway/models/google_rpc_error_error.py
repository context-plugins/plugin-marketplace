from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class GoogleRpcErrorError(SdkBaseModel):
    """The error envelope every Google API returns."""

    error: Optional[Error] = UNSET


class GoogleRpcErrorErrorDict(TypedDict):
    error: NotRequired[ErrorDict]
