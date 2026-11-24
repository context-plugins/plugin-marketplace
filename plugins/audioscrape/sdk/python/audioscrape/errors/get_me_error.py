from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_body import ApiErrorBody

GetMeErrorBody: TypeAlias = ApiErrorBody | RawError


@dataclass(frozen=True, slots=True)
class _GetMeError:
    def map(self, status_code: int, content: bytes) -> GetMeErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiErrorBody](content)
            case _:
                return RawError(status_code, content)


get_me_error_mapper: Final[ErrorMapper[GetMeErrorBody]] = _GetMeError()
