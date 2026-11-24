from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AuditLogControllerFindAllErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AuditLogControllerFindAllError:
    def map(self, status_code: int, content: bytes) -> AuditLogControllerFindAllErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


audit_log_controller_find_all_error_mapper: Final[
    ErrorMapper[AuditLogControllerFindAllErrorBody]
] = _AuditLogControllerFindAllError()
