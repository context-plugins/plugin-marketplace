from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unauthorized1 import Unauthorized1

InvokeAgentErrorBody: TypeAlias = Unauthorized1 | RawError


@dataclass(frozen=True, slots=True)
class _InvokeAgentError:
    def map(self, status_code: int, content: bytes) -> InvokeAgentErrorBody:
        match status_code:
            case 401:
                return decode_json[Unauthorized1](content)
            case _:
                return RawError(status_code, content)


invoke_agent_error_mapper: Final[ErrorMapper[InvokeAgentErrorBody]] = _InvokeAgentError()
