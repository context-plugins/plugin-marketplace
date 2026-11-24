from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ViewDataResponse(SdkBaseModel):
    data: dict[str, Any]
    """Result sets keyed by query id. Each value is an array of row objects (column name → value); 64-bit integers are
    returned as JSON strings to preserve precision."""


class ViewDataResponseDict(TypedDict):
    data: dict[str, Any]
