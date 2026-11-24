from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .value1 import Value1, Value1Dict


class ApplicationsAvailableApplicationVersionsResponse(SdkBaseModel):
    value: Optional[list[Value1]] = UNSET


class ApplicationsAvailableApplicationVersionsResponseDict(TypedDict):
    value: NotRequired[list[Value1Dict]]
