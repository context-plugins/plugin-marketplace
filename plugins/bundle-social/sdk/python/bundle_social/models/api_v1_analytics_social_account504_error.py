from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ApiV1AnalyticsSocialAccount504Error(SdkBaseModel):
    status_code: OptionalNullable[float] = Field(default=UNSET, alias="statusCode")
    message: str


class ApiV1AnalyticsSocialAccount504ErrorDict(TypedDict):
    status_code: NotRequired[float | None]
    message: str
