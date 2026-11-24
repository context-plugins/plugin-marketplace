from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListBuildTestsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListBuildTestsError:
    def map(self, status_code: int, content: bytes) -> ListBuildTestsErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_build_tests_error_mapper: Final[ErrorMapper[ListBuildTestsErrorBody]] = _ListBuildTestsError()
