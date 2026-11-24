from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

StoragetransferProjectsAgentPoolsListErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _StoragetransferProjectsAgentPoolsListError:
    def map(self, status_code: int, content: bytes) -> StoragetransferProjectsAgentPoolsListErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


storagetransfer_projects_agent_pools_list_error_mapper: Final[
    ErrorMapper[StoragetransferProjectsAgentPoolsListErrorBody]
] = _StoragetransferProjectsAgentPoolsListError()
