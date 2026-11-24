from __future__ import annotations

from typing import TypeAlias

from ..create_signup_response import CreateSignupResponse, CreateSignupResponseDict
from ..signup_error_response import SignupErrorResponse, SignupErrorResponseDict

SignupsResponse: TypeAlias = CreateSignupResponse | SignupErrorResponse

SignupsResponseDict: TypeAlias = CreateSignupResponseDict | SignupErrorResponseDict
