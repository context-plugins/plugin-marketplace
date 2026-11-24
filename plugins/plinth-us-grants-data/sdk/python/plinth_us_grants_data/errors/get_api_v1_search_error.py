from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetApiV1SearchErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1SearchError:
    def map(self, status_code: int, content: bytes) -> GetApiV1SearchErrorBody:
        match status_code:
            case 400 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_api_v1_search_error_mapper: Final[ErrorMapper[GetApiV1SearchErrorBody]] = _GetApiV1SearchError()
