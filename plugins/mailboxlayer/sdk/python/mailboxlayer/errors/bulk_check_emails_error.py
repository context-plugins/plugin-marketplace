from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel
from ..models.request_validation_error import RequestValidationError

BulkCheckEmailsErrorBody: TypeAlias = ApiErrorModel | RequestValidationError | RawError


@dataclass(frozen=True, slots=True)
class _BulkCheckEmailsError:
    def map(self, status_code: int, content: bytes) -> BulkCheckEmailsErrorBody:
        match status_code:
            case 401 | 403 | 404 | 429 | 500 | 503:
                return decode_json[ApiErrorModel](content)
            case 422:
                return decode_json[RequestValidationError](content)
            case _:
                return RawError(status_code, content)


bulk_check_emails_error_mapper: Final[ErrorMapper[BulkCheckEmailsErrorBody]] = _BulkCheckEmailsError()
