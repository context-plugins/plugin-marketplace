from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1TasksByIdCompleteErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1TasksByIdCompleteError:
    def map(self, status_code: int, content: bytes) -> PostApiV1TasksByIdCompleteErrorBody:
        match status_code:
            case 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_tasks_by_id_complete_error_mapper: Final[
    ErrorMapper[PostApiV1TasksByIdCompleteErrorBody]
] = _PostApiV1TasksByIdCompleteError()
