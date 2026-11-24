from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetCompaniesKrsByKrsGroupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetCompaniesKrsByKrsGroupError:
    def map(self, status_code: int, content: bytes) -> GetCompaniesKrsByKrsGroupErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_companies_krs_by_krs_group_error_mapper: Final[
    ErrorMapper[GetCompaniesKrsByKrsGroupErrorBody]
] = _GetCompaniesKrsByKrsGroupError()
