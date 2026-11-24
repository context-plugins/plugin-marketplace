from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data2 import Data2, Data2Dict


class CustomCategoriesUrlsRequest(SdkBaseModel):
    data: Optional[Data2] = UNSET


class CustomCategoriesUrlsRequestDict(TypedDict):
    data: NotRequired[Data2Dict]
