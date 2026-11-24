from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value import Value, ValueDict


class ApplicationsAvailableCountriesResponse(SdkBaseModel):
    value: Optional[list[Value]] = UNSET


class ApplicationsAvailableCountriesResponseDict(TypedDict):
    value: NotRequired[list[ValueDict]]
