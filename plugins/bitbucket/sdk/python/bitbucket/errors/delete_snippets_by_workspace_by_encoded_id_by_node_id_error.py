from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError:
    def map(self, status_code: int, content: bytes) -> DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody:
        match status_code:
            case 401 | 403 | 404 | 405:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_snippets_by_workspace_by_encoded_id_by_node_id_error_mapper: Final[
    ErrorMapper[DeleteSnippetsByWorkspaceByEncodedIdByNodeIdErrorBody]
] = _DeleteSnippetsByWorkspaceByEncodedIdByNodeIdError()
