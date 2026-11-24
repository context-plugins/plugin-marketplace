from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1TasksByIdApplyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1TasksByIdApplyError:
    def map(self, status_code: int, content: bytes) -> PostApiV1TasksByIdApplyErrorBody:
        match status_code:
            case 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_tasks_by_id_apply_error_mapper: Final[
    ErrorMapper[PostApiV1TasksByIdApplyErrorBody]
] = _PostApiV1TasksByIdApplyError()
