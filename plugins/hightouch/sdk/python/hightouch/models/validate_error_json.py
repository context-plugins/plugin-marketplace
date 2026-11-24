from __future__ import annotations

from typing import Any, Literal

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ValidateErrorJson(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    message: Literal["Validation failed"] = "Validation failed"
    details: dict[str, Any]


class ValidateErrorJsonDict(TypedDict):
    message: Literal["Validation failed"]
    details: dict[str, Any]
