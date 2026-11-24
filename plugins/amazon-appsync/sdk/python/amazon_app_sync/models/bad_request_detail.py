from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code_error import CodeError, CodeErrorDict


class BadRequestDetail(SdkBaseModel):
    code_errors: Optional[list[CodeError]] = Field(default=UNSET, alias="codeErrors")
    """Contains the list of errors in the request."""


class BadRequestDetailDict(TypedDict):
    code_errors: NotRequired[list[CodeErrorDict]]
