from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError:
    def map(self, status_code: int, content: bytes) -> GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody:
        match status_code:
            case 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_snippets_by_workspace_by_encoded_id_by_revision_patch_error_mapper: Final[
    ErrorMapper[GetSnippetsByWorkspaceByEncodedIdByRevisionPatchErrorBody]
] = _GetSnippetsByWorkspaceByEncodedIdByRevisionPatchError()
