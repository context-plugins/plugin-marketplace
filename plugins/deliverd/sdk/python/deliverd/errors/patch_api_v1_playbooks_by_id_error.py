from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PatchApiV1PlaybooksByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PatchApiV1PlaybooksByIdError:
    def map(self, status_code: int, content: bytes) -> PatchApiV1PlaybooksByIdErrorBody:
        match status_code:
            case 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


patch_api_v1_playbooks_by_id_error_mapper: Final[
    ErrorMapper[PatchApiV1PlaybooksByIdErrorBody]
] = _PatchApiV1PlaybooksByIdError()
