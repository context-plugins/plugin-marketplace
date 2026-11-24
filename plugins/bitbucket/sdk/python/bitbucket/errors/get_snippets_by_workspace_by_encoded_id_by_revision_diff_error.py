from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError:
    def map(self, status_code: int, content: bytes) -> GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_snippets_by_workspace_by_encoded_id_by_revision_diff_error_mapper: Final[
    ErrorMapper[GetSnippetsByWorkspaceByEncodedIdByRevisionDiffErrorBody]
] = _GetSnippetsByWorkspaceByEncodedIdByRevisionDiffError()
