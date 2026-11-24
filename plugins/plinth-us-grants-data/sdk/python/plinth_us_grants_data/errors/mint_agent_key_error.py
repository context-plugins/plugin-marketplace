from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

MintAgentKeyErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _MintAgentKeyError:
    def map(self, status_code: int, content: bytes) -> MintAgentKeyErrorBody:
        match status_code:
            case 400 | 401 | 429 | 502 | 503:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


mint_agent_key_error_mapper: Final[ErrorMapper[MintAgentKeyErrorBody]] = _MintAgentKeyError()
