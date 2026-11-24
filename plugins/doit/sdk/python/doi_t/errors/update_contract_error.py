from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateContractErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateContractError:
    def map(self, status_code: int, content: bytes) -> UpdateContractErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_contract_error_mapper: Final[ErrorMapper[UpdateContractErrorBody]] = _UpdateContractError()
