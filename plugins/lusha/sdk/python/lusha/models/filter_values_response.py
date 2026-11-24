from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FilterValuesResponse(SdkBaseModel):
    values: Optional[Any] = UNSET
    """Filter values (shape depends on filter type)"""


class FilterValuesResponseDict(TypedDict):
    values: NotRequired[Any]
