from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.v1_psa_card400_error1 import V1PsaCard400Error1
from ..models.v1_psa_card401_error1 import V1PsaCard401Error1
from ..models.v1_psa_card404_error1 import V1PsaCard404Error1
from ..models.v1_psa_card429_error1 import V1PsaCard429Error1
from ..models.v1_psa_card502_error1 import V1PsaCard502Error1
from ..models.v1_psa_card503_error1 import V1PsaCard503Error1

GetPsaCardErrorBody: TypeAlias = (
    V1PsaCard400Error1
    | V1PsaCard401Error1
    | V1PsaCard404Error1
    | V1PsaCard429Error1
    | V1PsaCard502Error1
    | V1PsaCard503Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetPsaCardError:
    def map(self, status_code: int, content: bytes) -> GetPsaCardErrorBody:
        match status_code:
            case 400:
                return decode_json[V1PsaCard400Error1](content)
            case 401:
                return decode_json[V1PsaCard401Error1](content)
            case 404:
                return decode_json[V1PsaCard404Error1](content)
            case 429:
                return decode_json[V1PsaCard429Error1](content)
            case 502:
                return decode_json[V1PsaCard502Error1](content)
            case 503:
                return decode_json[V1PsaCard503Error1](content)
            case _:
                return RawError(status_code, content)


get_psa_card_error_mapper: Final[ErrorMapper[GetPsaCardErrorBody]] = _GetPsaCardError()
