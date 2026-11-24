from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data1 import Data1, Data1Dict


class CustomCategoriesUrlsResponse(SdkBaseModel):
    data: Data1


class CustomCategoriesUrlsResponseDict(TypedDict):
    data: Data1Dict
