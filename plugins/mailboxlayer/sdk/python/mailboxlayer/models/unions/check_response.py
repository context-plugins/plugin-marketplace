from __future__ import annotations

from typing import TypeAlias

from ..api_error_model import ApiErrorModel, ApiErrorModelDict
from ..email_validation_response import EmailValidationResponse, EmailValidationResponseDict

CheckResponse: TypeAlias = EmailValidationResponse | ApiErrorModel

CheckResponseDict: TypeAlias = EmailValidationResponseDict | ApiErrorModelDict
