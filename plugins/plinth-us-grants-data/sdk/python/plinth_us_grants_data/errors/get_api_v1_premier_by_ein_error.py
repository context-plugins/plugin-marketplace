from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel
from ..models.http_validation_error import HttpValidationError

GetApiV1PremierByEinErrorBody: TypeAlias = ApiErrorModel | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1PremierByEinError:
    def map(self, status_code: int, content: bytes) -> GetApiV1PremierByEinErrorBody:
        match status_code:
            case 401 | 402:
                return decode_json[ApiErrorModel](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_api_v1_premier_by_ein_error_mapper: Final[ErrorMapper[GetApiV1PremierByEinErrorBody]] = _GetApiV1PremierByEinError()
