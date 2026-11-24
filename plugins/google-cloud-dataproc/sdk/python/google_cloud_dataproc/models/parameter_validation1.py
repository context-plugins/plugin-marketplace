from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .regex_validation import RegexValidation, RegexValidationDict
from .value_validation import ValueValidation, ValueValidationDict


class ParameterValidation1(SdkBaseModel):
    """Optional. Validation rules to be applied to this parameter's value."""

    values: Optional[ValueValidation] = UNSET
    """Validation based on a list of allowed values."""

    regex: Optional[RegexValidation] = UNSET
    """Validation based on regular expressions."""


class ParameterValidation1Dict(TypedDict):
    values: NotRequired[ValueValidationDict]
    regex: NotRequired[RegexValidationDict]
