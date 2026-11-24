from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1PlaybooksByIdVersionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1PlaybooksByIdVersionsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1PlaybooksByIdVersionsErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_playbooks_by_id_versions_error_mapper: Final[
    ErrorMapper[PostApiV1PlaybooksByIdVersionsErrorBody]
] = _PostApiV1PlaybooksByIdVersionsError()
