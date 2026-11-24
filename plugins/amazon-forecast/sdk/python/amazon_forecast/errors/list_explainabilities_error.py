from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListExplainabilitiesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListExplainabilitiesError:
    def map(self, status_code: int, content: bytes) -> ListExplainabilitiesErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_explainabilities_error_mapper: Final[ErrorMapper[ListExplainabilitiesErrorBody]] = _ListExplainabilitiesError()
