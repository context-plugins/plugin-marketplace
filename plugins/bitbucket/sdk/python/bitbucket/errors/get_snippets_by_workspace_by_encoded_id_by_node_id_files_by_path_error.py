from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError:
    def map(self, status_code: int, content: bytes) -> GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_snippets_by_workspace_by_encoded_id_by_node_id_files_by_path_error_mapper: Final[
    ErrorMapper[GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathErrorBody]
] = _GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathError()
