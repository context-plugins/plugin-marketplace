from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModelsLexAccessDeniedExceptionError(SdkBaseModel):
    message: Optional[str] = UNSET


class ModelsLexAccessDeniedExceptionErrorDict(TypedDict):
    message: NotRequired[str]
