from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1TasksByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1TasksByIdError:
    def map(self, status_code: int, content: bytes) -> GetApiV1TasksByIdErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_tasks_by_id_error_mapper: Final[ErrorMapper[GetApiV1TasksByIdErrorBody]] = _GetApiV1TasksByIdError()
