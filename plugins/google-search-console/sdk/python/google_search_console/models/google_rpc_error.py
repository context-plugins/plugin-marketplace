from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error import Error, ErrorDict


class GoogleRpcError(SdkBaseModel):
    """The error envelope every Google API returns."""

    error: Optional[Error] = UNSET


class GoogleRpcErrorDict(TypedDict):
    error: NotRequired[ErrorDict]
