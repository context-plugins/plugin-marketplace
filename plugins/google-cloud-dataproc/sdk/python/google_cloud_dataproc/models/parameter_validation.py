from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .regex_validation import RegexValidation, RegexValidationDict
from .value_validation import ValueValidation, ValueValidationDict


class ParameterValidation(SdkBaseModel):
    """Configuration for parameter validation."""

    values: Optional[ValueValidation] = UNSET
    """Validation based on a list of allowed values."""

    regex: Optional[RegexValidation] = UNSET
    """Validation based on regular expressions."""


class ParameterValidationDict(TypedDict):
    values: NotRequired[ValueValidationDict]
    regex: NotRequired[RegexValidationDict]
