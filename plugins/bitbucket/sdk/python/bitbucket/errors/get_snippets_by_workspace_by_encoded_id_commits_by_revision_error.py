from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError:
    def map(self, status_code: int, content: bytes) -> GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_snippets_by_workspace_by_encoded_id_commits_by_revision_error_mapper: Final[
    ErrorMapper[GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionErrorBody]
] = _GetSnippetsByWorkspaceByEncodedIdCommitsByRevisionError()
