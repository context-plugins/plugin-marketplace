from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1ApprovalsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ApprovalsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ApprovalsErrorBody:
        match status_code:
            case 400 | 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_approvals_error_mapper: Final[ErrorMapper[PostApiV1ApprovalsErrorBody]] = _PostApiV1ApprovalsError()
