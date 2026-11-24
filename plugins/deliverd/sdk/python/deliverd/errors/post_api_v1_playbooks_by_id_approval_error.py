from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1PlaybooksByIdApprovalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1PlaybooksByIdApprovalError:
    def map(self, status_code: int, content: bytes) -> PostApiV1PlaybooksByIdApprovalErrorBody:
        match status_code:
            case 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_playbooks_by_id_approval_error_mapper: Final[
    ErrorMapper[PostApiV1PlaybooksByIdApprovalErrorBody]
] = _PostApiV1PlaybooksByIdApprovalError()
