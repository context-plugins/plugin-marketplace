from __future__ import annotations

from typing import TypeAlias

from ..api_error_model import ApiErrorModel, ApiErrorModelDict
from ..email_validation_response import EmailValidationResponse, EmailValidationResponseDict

BulkCheckResponse: TypeAlias = list[EmailValidationResponse] | ApiErrorModel

BulkCheckResponseDict: TypeAlias = list[EmailValidationResponseDict] | ApiErrorModelDict
