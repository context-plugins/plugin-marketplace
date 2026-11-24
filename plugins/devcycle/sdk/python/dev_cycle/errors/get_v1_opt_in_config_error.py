from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetV1OptInConfigErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetV1OptInConfigError:
    def map(self, status_code: int, content: bytes) -> GetV1OptInConfigErrorBody:
        match status_code:
            case 400 | 401 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_v1_opt_in_config_error_mapper: Final[ErrorMapper[GetV1OptInConfigErrorBody]] = _GetV1OptInConfigError()
