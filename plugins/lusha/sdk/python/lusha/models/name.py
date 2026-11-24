from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.coverage import CoverageOrStr
from .enums.name1 import Name1OrStr


class Name(SdkBaseModel):
    coverage: Optional[CoverageOrStr] = UNSET
    name: Optional[Name1OrStr] = UNSET


class NameDict(TypedDict):
    coverage: NotRequired[CoverageOrStr]
    name: NotRequired[Name1OrStr]
