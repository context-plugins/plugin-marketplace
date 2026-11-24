from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class ApiResponseOfBoolean(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    status: Optional[bool] = UNSET
    message: OptionalNullable[str] = UNSET
    code: Optional[int] = UNSET
    data: Optional[bool] = UNSET


class ApiResponseOfBooleanDict(TypedDict):
    status: NotRequired[bool]
    message: NotRequired[str | None]
    code: NotRequired[int]
    data: NotRequired[bool]
