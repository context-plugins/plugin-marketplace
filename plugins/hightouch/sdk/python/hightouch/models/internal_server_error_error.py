from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InternalServerErrorError(SdkBaseModel):
    enum_internal_server_error: str = Field(default="Internal Server Error", alias="Enum_Internal Server Error")


class InternalServerErrorErrorDict(TypedDict):
    enum_internal_server_error: str
