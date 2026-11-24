from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data import Data, DataDict


class CustomCategoriesResponse(SdkBaseModel):
    data: Data


class CustomCategoriesResponseDict(TypedDict):
    data: DataDict
