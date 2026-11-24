from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1PlaybooksByIdUseErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1PlaybooksByIdUseError:
    def map(self, status_code: int, content: bytes) -> PostApiV1PlaybooksByIdUseErrorBody:
        match status_code:
            case 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_playbooks_by_id_use_error_mapper: Final[
    ErrorMapper[PostApiV1PlaybooksByIdUseErrorBody]
] = _PostApiV1PlaybooksByIdUseError()
