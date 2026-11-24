from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ConfigureLlmErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ConfigureLlmError:
    def map(self, status_code: int, content: bytes) -> ConfigureLlmErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


configure_llm_error_mapper: Final[ErrorMapper[ConfigureLlmErrorBody]] = _ConfigureLlmError()
