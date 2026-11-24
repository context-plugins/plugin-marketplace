from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateContractTemplateErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateContractTemplateError:
    def map(self, status_code: int, content: bytes) -> CreateContractTemplateErrorBody:
        match status_code:
            case 400 | 401 | 403 | 409 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_contract_template_error_mapper: Final[
    ErrorMapper[CreateContractTemplateErrorBody]
] = _CreateContractTemplateError()
