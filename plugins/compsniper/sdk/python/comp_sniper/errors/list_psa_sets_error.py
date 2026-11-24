from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_psa_sets400_error1 import V1PsaSets400Error1
from ..models.v1_psa_sets401_error1 import V1PsaSets401Error1
from ..models.v1_psa_sets429_error1 import V1PsaSets429Error1
from ..models.v1_psa_sets502_error1 import V1PsaSets502Error1
from ..models.v1_psa_sets503_error1 import V1PsaSets503Error1

ListPsaSetsErrorBody: TypeAlias = (
    V1PsaSets400Error1 | V1PsaSets401Error1 | V1PsaSets429Error1 | V1PsaSets502Error1 | V1PsaSets503Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _ListPsaSetsError:
    def map(self, status_code: int, content: bytes) -> ListPsaSetsErrorBody:
        match status_code:
            case 400:
                return decode_json[V1PsaSets400Error1](content)
            case 401:
                return decode_json[V1PsaSets401Error1](content)
            case 429:
                return decode_json[V1PsaSets429Error1](content)
            case 502:
                return decode_json[V1PsaSets502Error1](content)
            case 503:
                return decode_json[V1PsaSets503Error1](content)
            case _:
                return RawError(status_code, content)


list_psa_sets_error_mapper: Final[ErrorMapper[ListPsaSetsErrorBody]] = _ListPsaSetsError()
