from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1ReviewsByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1ReviewsByIdError:
    def map(self, status_code: int, content: bytes) -> GetApiV1ReviewsByIdErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_reviews_by_id_error_mapper: Final[ErrorMapper[GetApiV1ReviewsByIdErrorBody]] = _GetApiV1ReviewsByIdError()
