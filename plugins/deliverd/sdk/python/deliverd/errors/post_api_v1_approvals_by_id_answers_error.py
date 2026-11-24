from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ApprovalsByIdAnswersErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ApprovalsByIdAnswersError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ApprovalsByIdAnswersErrorBody:
        match status_code:
            case 403 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_approvals_by_id_answers_error_mapper: Final[
    ErrorMapper[PostApiV1ApprovalsByIdAnswersErrorBody]
] = _PostApiV1ApprovalsByIdAnswersError()
