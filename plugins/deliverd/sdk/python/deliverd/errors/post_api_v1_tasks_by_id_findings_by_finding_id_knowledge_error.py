from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1TasksByIdFindingsByFindingIdKnowledgeError:
    def map(self, status_code: int, content: bytes) -> PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


post_api_v1_tasks_by_id_findings_by_finding_id_knowledge_error_mapper: Final[
    ErrorMapper[PostApiV1TasksByIdFindingsByFindingIdKnowledgeErrorBody]
] = _PostApiV1TasksByIdFindingsByFindingIdKnowledgeError()
