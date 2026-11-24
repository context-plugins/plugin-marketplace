from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateContractTemplateErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateContractTemplateError:
    def map(self, status_code: int, content: bytes) -> UpdateContractTemplateErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_contract_template_error_mapper: Final[
    ErrorMapper[UpdateContractTemplateErrorBody]
] = _UpdateContractTemplateError()
