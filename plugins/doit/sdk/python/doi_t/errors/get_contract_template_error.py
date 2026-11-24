from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetContractTemplateErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetContractTemplateError:
    def map(self, status_code: int, content: bytes) -> GetContractTemplateErrorBody:
        match status_code:
            case 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_contract_template_error_mapper: Final[ErrorMapper[GetContractTemplateErrorBody]] = _GetContractTemplateError()
