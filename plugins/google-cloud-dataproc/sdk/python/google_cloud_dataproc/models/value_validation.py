from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValueValidation(SdkBaseModel):
    """Validation based on a list of allowed values."""

    values: Optional[list[str]] = UNSET
    """Required. List of allowed values for the parameter."""


class ValueValidationDict(TypedDict):
    values: NotRequired[list[str]]
