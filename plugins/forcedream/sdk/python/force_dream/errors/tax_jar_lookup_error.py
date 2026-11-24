from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TaxJarLookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TaxJarLookupError:
    def map(self, status_code: int, content: bytes) -> TaxJarLookupErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


tax_jar_lookup_error_mapper: Final[ErrorMapper[TaxJarLookupErrorBody]] = _TaxJarLookupError()
