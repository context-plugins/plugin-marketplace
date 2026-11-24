from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FiltersResponse(SdkBaseModel):
    data: Optional[Any] = UNSET
    """Available filter values grouped by filter name."""


class FiltersResponseDict(TypedDict):
    data: NotRequired[Any]
