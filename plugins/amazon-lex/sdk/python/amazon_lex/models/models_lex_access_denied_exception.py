from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModelsLexAccessDeniedException(SdkBaseModel):
    message: Optional[str] = UNSET


class ModelsLexAccessDeniedExceptionDict(TypedDict):
    message: NotRequired[str]
