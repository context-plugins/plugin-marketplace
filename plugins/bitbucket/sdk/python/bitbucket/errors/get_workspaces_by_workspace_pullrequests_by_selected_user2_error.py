from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error:
    def map(self, status_code: int, content: bytes) -> GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_workspaces_by_workspace_pullrequests_by_selected_user2_error_mapper: Final[
    ErrorMapper[GetWorkspacesByWorkspacePullrequestsBySelectedUser2ErrorBody]
] = _GetWorkspacesByWorkspacePullrequestsBySelectedUser2Error()
