from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListPredictorsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListPredictorsError:
    def map(self, status_code: int, content: bytes) -> ListPredictorsErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_predictors_error_mapper: Final[ErrorMapper[ListPredictorsErrorBody]] = _ListPredictorsError()
