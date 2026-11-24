from __future__ import annotations

from typing import Any, Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ValidateErrorJsonError(SdkBaseModel):
    message: Literal["Validation failed"] = "Validation failed"
    details: dict[str, Any]


class ValidateErrorJsonErrorDict(TypedDict):
    message: Literal["Validation failed"]
    details: dict[str, Any]
