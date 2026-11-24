from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_gates423_error1 import ApiV1Gates423Error1

PostApiV1GatesErrorBody: TypeAlias = ApiV1Gates423Error1 | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1GatesError:
    def map(self, status_code: int, content: bytes) -> PostApiV1GatesErrorBody:
        match status_code:
            case 423:
                return decode_json[ApiV1Gates423Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_gates_error_mapper: Final[ErrorMapper[PostApiV1GatesErrorBody]] = _PostApiV1GatesError()
