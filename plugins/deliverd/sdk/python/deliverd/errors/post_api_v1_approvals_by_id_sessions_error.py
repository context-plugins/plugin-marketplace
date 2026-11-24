from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ApprovalsByIdSessionsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ApprovalsByIdSessionsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ApprovalsByIdSessionsErrorBody:
        match status_code:
            case 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_approvals_by_id_sessions_error_mapper: Final[
    ErrorMapper[PostApiV1ApprovalsByIdSessionsErrorBody]
] = _PostApiV1ApprovalsByIdSessionsError()
