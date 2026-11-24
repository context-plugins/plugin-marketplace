from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format4 import Format4OrStr


class V1ApisTypesRequest1(SdkBaseModel):
    definition: Optional[str] = UNSET
    """The new definition."""

    format: Format4OrStr
    """The new type format: SDL or JSON."""


class V1ApisTypesRequest1Dict(TypedDict):
    definition: NotRequired[str]
    format: Format4OrStr
