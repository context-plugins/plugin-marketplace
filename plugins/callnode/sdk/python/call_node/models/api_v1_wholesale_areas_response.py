from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .area import Area, AreaDict


class ApiV1WholesaleAreasResponse(SdkBaseModel):
    areas: Optional[list[Area]] = UNSET


class ApiV1WholesaleAreasResponseDict(TypedDict):
    areas: NotRequired[list[AreaDict]]
