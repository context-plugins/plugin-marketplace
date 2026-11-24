from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateContractErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateContractError:
    def map(self, status_code: int, content: bytes) -> CreateContractErrorBody:
        match status_code:
            case 400 | 401 | 403:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_contract_error_mapper: Final[ErrorMapper[CreateContractErrorBody]] = _CreateContractError()
