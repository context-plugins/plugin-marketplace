from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ApprovalsByIdCancelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ApprovalsByIdCancelError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ApprovalsByIdCancelErrorBody:
        match status_code:
            case 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_approvals_by_id_cancel_error_mapper: Final[
    ErrorMapper[PostApiV1ApprovalsByIdCancelErrorBody]
] = _PostApiV1ApprovalsByIdCancelError()
