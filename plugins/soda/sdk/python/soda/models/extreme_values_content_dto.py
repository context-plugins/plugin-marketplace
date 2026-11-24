from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExtremeValuesContentDto(SdkBaseModel):
    maximum: Optional[list[Any]] = UNSET
    minimum: Optional[list[Any]] = UNSET


class ExtremeValuesContentDtoDict(TypedDict):
    maximum: NotRequired[list[Any]]
    minimum: NotRequired[list[Any]]
