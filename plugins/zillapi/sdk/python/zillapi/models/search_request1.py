from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SearchRequest1(SdkBaseModel):
    filters: Any


class SearchRequest1Dict(TypedDict):
    filters: Any
