from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .code_error import CodeError, CodeErrorDict


class EvaluateCodeErrorDetail(SdkBaseModel):
    message: Optional[str] = UNSET
    """The error payload."""

    code_errors: Optional[list[CodeError]] = Field(default=UNSET, alias="codeErrors")
    """Contains the list of CodeError objects."""


class EvaluateCodeErrorDetailDict(TypedDict):
    message: NotRequired[str]
    code_errors: NotRequired[list[CodeErrorDict]]
