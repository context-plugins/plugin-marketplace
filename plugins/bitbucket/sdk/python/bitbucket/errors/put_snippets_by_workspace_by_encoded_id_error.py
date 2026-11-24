from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutSnippetsByWorkspaceByEncodedIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutSnippetsByWorkspaceByEncodedIdError:
    def map(self, status_code: int, content: bytes) -> PutSnippetsByWorkspaceByEncodedIdErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_snippets_by_workspace_by_encoded_id_error_mapper: Final[
    ErrorMapper[PutSnippetsByWorkspaceByEncodedIdErrorBody]
] = _PutSnippetsByWorkspaceByEncodedIdError()
