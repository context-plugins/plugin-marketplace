from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .include_lusha_signals_api import IncludeLushaSignalsApi, IncludeLushaSignalsApiDict


class FiltersLushaSignalsApi(SdkBaseModel):
    include: Optional[IncludeLushaSignalsApi] = UNSET


class FiltersLushaSignalsApiDict(TypedDict):
    include: NotRequired[IncludeLushaSignalsApiDict]
