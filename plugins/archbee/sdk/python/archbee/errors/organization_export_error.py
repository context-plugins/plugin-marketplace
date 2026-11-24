from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.team_export400_error1 import TeamExport400Error1

OrganizationExportErrorBody: TypeAlias = TeamExport400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _OrganizationExportError:
    def map(self, status_code: int, content: bytes) -> OrganizationExportErrorBody:
        match status_code:
            case 400:
                return decode_json[TeamExport400Error1](content)
            case _:
                return RawError(status_code, content)


organization_export_error_mapper: Final[ErrorMapper[OrganizationExportErrorBody]] = _OrganizationExportError()
