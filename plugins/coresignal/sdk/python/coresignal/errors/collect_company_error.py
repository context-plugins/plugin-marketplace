from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CollectCompanyErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CollectCompanyError:
    def map(self, status_code: int, content: bytes) -> CollectCompanyErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


collect_company_error_mapper: Final[ErrorMapper[CollectCompanyErrorBody]] = _CollectCompanyError()
