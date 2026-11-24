from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1ApprovalsByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1ApprovalsByIdError:
    def map(self, status_code: int, content: bytes) -> GetApiV1ApprovalsByIdErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_approvals_by_id_error_mapper: Final[
    ErrorMapper[GetApiV1ApprovalsByIdErrorBody]
] = _GetApiV1ApprovalsByIdError()
