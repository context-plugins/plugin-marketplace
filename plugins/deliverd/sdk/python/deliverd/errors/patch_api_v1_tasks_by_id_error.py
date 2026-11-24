from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PatchApiV1TasksByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PatchApiV1TasksByIdError:
    def map(self, status_code: int, content: bytes) -> PatchApiV1TasksByIdErrorBody:
        match status_code:
            case 403 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


patch_api_v1_tasks_by_id_error_mapper: Final[ErrorMapper[PatchApiV1TasksByIdErrorBody]] = _PatchApiV1TasksByIdError()
