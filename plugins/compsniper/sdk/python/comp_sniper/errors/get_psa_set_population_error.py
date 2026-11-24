from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_psa_set400_error1 import V1PsaSet400Error1
from ..models.v1_psa_set401_error1 import V1PsaSet401Error1
from ..models.v1_psa_set429_error1 import V1PsaSet429Error1
from ..models.v1_psa_set502_error1 import V1PsaSet502Error1
from ..models.v1_psa_set503_error1 import V1PsaSet503Error1

GetPsaSetPopulationErrorBody: TypeAlias = (
    V1PsaSet400Error1 | V1PsaSet401Error1 | V1PsaSet429Error1 | V1PsaSet502Error1 | V1PsaSet503Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _GetPsaSetPopulationError:
    def map(self, status_code: int, content: bytes) -> GetPsaSetPopulationErrorBody:
        match status_code:
            case 400:
                return decode_json[V1PsaSet400Error1](content)
            case 401:
                return decode_json[V1PsaSet401Error1](content)
            case 429:
                return decode_json[V1PsaSet429Error1](content)
            case 502:
                return decode_json[V1PsaSet502Error1](content)
            case 503:
                return decode_json[V1PsaSet503Error1](content)
            case _:
                return RawError(status_code, content)


get_psa_set_population_error_mapper: Final[ErrorMapper[GetPsaSetPopulationErrorBody]] = _GetPsaSetPopulationError()
