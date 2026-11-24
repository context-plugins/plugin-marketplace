from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidationError(SdkBaseModel):
    message: Optional[str] = UNSET
    errors: Optional[dict[str, Any]] = UNSET


class ValidationErrorDict(TypedDict):
    message: NotRequired[str]
    errors: NotRequired[dict[str, Any]]
