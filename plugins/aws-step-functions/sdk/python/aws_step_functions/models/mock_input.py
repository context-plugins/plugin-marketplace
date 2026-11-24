from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.field_validation_mode import FieldValidationModeOrStr
from .mock_error_output import MockErrorOutput, MockErrorOutputDict


class MockInput(SdkBaseModel):
    result: Optional[str] = UNSET
    """A JSON string containing the mocked result of the state invocation."""

    error_output: Optional[MockErrorOutput] = Field(default=UNSET, alias="errorOutput")
    field_validation_mode: Optional[FieldValidationModeOrStr] = Field(default=UNSET, alias="fieldValidationMode")
    """Determines the level of strictness when validating mocked results against their respective API models. Values
    include: STRICT: All required fields must be present, and all present fields must conform to the API's schema.
    PRESENT: All present fields must conform to the API's schema. NONE: No validation is performed. If no value is
    specified, the default value is STRICT."""


class MockInputDict(TypedDict):
    result: NotRequired[str]
    error_output: NotRequired[MockErrorOutputDict]
    field_validation_mode: NotRequired[FieldValidationModeOrStr]
