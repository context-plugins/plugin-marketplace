from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.code_staying_data_api import CodeStayingDataApiOrStr
from .enums.type import TypeOrStr


class PlatformFailureError(SdkBaseModel):
    type_: TypeOrStr = Field(alias="type")
    code: CodeStayingDataApiOrStr
    message: str
    retryable: bool


class PlatformFailureErrorDict(TypedDict):
    type_: TypeOrStr
    code: CodeStayingDataApiOrStr
    message: str
    retryable: bool
