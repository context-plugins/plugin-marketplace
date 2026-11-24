from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CountryflagsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CountryflagsError:
    def map(self, status_code: int, content: bytes) -> CountryflagsErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


countryflags_error_mapper: Final[ErrorMapper[CountryflagsErrorBody]] = _CountryflagsError()
