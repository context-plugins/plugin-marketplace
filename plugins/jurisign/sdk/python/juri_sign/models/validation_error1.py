from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidationError1(SdkBaseModel):
    message: Optional[str] = UNSET
    errors: Optional[dict[str, Any]] = UNSET


class ValidationError1Dict(TypedDict):
    message: NotRequired[str]
    errors: NotRequired[dict[str, Any]]
