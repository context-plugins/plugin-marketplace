from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RegexValidation(SdkBaseModel):
    """Validation based on regular expressions."""

    regexes: Optional[list[str]] = UNSET
    """Required. RE2 regular expressions used to validate the parameter's value. The value must match the regex in its
    entirety (substring matches are not sufficient)."""


class RegexValidationDict(TypedDict):
    regexes: NotRequired[list[str]]
