from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PatchApiV1KnowledgeByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PatchApiV1KnowledgeByIdError:
    def map(self, status_code: int, content: bytes) -> PatchApiV1KnowledgeByIdErrorBody:
        match status_code:
            case 402 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


patch_api_v1_knowledge_by_id_error_mapper: Final[
    ErrorMapper[PatchApiV1KnowledgeByIdErrorBody]
] = _PatchApiV1KnowledgeByIdError()
