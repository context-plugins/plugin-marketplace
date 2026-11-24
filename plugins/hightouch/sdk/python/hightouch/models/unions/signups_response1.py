from __future__ import annotations

from typing import TypeAlias

from ..signup_error_response import SignupErrorResponse, SignupErrorResponseDict
from ..validate_error_json import ValidateErrorJson, ValidateErrorJsonDict

SignupsResponse1: TypeAlias = SignupErrorResponse | ValidateErrorJson

SignupsResponse1Dict: TypeAlias = SignupErrorResponseDict | ValidateErrorJsonDict
