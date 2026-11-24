from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ListContractTemplatesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ListContractTemplatesError:
    def map(self, status_code: int, content: bytes) -> ListContractTemplatesErrorBody:
        match status_code:
            case 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


list_contract_templates_error_mapper: Final[ErrorMapper[ListContractTemplatesErrorBody]] = _ListContractTemplatesError()
