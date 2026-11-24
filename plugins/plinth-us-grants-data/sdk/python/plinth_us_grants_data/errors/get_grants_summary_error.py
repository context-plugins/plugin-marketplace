from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel
from ..models.http_validation_error import HttpValidationError

GetGrantsSummaryErrorBody: TypeAlias = ApiErrorModel | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetGrantsSummaryError:
    def map(self, status_code: int, content: bytes) -> GetGrantsSummaryErrorBody:
        match status_code:
            case 401 | 402:
                return decode_json[ApiErrorModel](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_grants_summary_error_mapper: Final[ErrorMapper[GetGrantsSummaryErrorBody]] = _GetGrantsSummaryError()
