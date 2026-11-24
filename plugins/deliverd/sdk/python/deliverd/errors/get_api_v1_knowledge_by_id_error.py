from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetApiV1KnowledgeByIdErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1KnowledgeByIdError:
    def map(self, status_code: int, content: bytes) -> GetApiV1KnowledgeByIdErrorBody:
        match status_code:
            case 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_api_v1_knowledge_by_id_error_mapper: Final[
    ErrorMapper[GetApiV1KnowledgeByIdErrorBody]
] = _GetApiV1KnowledgeByIdError()
