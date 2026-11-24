from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1PlaybooksByIdStartErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1PlaybooksByIdStartError:
    def map(self, status_code: int, content: bytes) -> PostApiV1PlaybooksByIdStartErrorBody:
        match status_code:
            case 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_playbooks_by_id_start_error_mapper: Final[
    ErrorMapper[PostApiV1PlaybooksByIdStartErrorBody]
] = _PostApiV1PlaybooksByIdStartError()
