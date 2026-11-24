from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListExplainabilityExportsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListExplainabilityExportsError:
    def map(self, status_code: int, content: bytes) -> ListExplainabilityExportsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_explainability_exports_error_mapper: Final[
    ErrorMapper[ListExplainabilityExportsErrorBody]
] = _ListExplainabilityExportsError()
