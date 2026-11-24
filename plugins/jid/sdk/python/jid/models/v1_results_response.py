from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ResultsResponse(SdkBaseModel):
    results: Optional[list[Any]] = UNSET


class V1ResultsResponseDict(TypedDict):
    results: NotRequired[list[Any]]
